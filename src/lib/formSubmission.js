const MAX_TOTAL_UPLOAD_BYTES = 2.5 * 1024 * 1024;

const readFileAsBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const [, content = ""] = String(reader.result).split(",");
      resolve(content);
    };
    reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
    reader.readAsDataURL(file);
  });

export async function submitWebsiteForm(form, formType) {
  const formData = new FormData(form);
  const fields = {};
  const files = [];
  let totalUploadBytes = 0;

  for (const [name, value] of formData.entries()) {
    if (value instanceof File) {
      if (!value.name || value.size === 0) continue;
      totalUploadBytes += value.size;
      files.push({ name, file: value });
      continue;
    }

    fields[name] = value;
  }

  if (totalUploadBytes > MAX_TOTAL_UPLOAD_BYTES) {
    throw new Error("Attachments must total 2.5 MB or less. Please reduce the file size and try again.");
  }

  const attachments = await Promise.all(
    files.map(async ({ name, file }) => ({
      field: name,
      filename: file.name,
      contentType: file.type || "application/octet-stream",
      content: await readFileAsBase64(file),
    })),
  );

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, fields, attachments }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "Your form could not be sent. Please try again later.");
  }
}
