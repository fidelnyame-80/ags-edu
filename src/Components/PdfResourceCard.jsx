import { Eye, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function PdfResourceCard({
  title,
  description,
  coverImage,
  pdfFile,
  fileSize,
  updated,
}) {
  const pdfUrl = pdfFile.startsWith("/") ? pdfFile : `/${pdfFile}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-[28px] border border-[#e8e5f0] bg-white shadow-[0_4px_24px_rgba(86,72,150,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(86,72,150,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f1fb]">
        {coverImage ? (
          <img
            src={coverImage}
            alt=""
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#6657c8]/10 to-[#f4f1fb]">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-12 items-center justify-center rounded-lg border border-[#6657c8]/20 bg-white shadow-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6657c8]">
                  PDF
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#6657c8]/60">
                Document
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <h3 className="text-lg font-bold leading-snug text-[#171727]">{title}</h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-[#555568]">{description}</p>
        )}

        {(fileSize || updated) && (
          <div className="mt-3 flex items-center gap-4 text-[11px] font-medium text-[#88879b]">
            {fileSize && <span>{fileSize}</span>}
            {updated && (
              <>
                {fileSize && <span className="h-1 w-1 rounded-full bg-[#d9d4e8]" />}
                <span>Updated {updated}</span>
              </>
            )}
          </div>
        )}

        <div className="mt-auto flex gap-3 pt-5">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#d9d4e8] bg-white text-xs font-bold text-[#555568] transition hover:border-[#6657c8] hover:bg-[#f4f1fb] hover:text-[#6657c8] active:scale-[0.97]"
          >
            <Eye size={14} strokeWidth={2.2} />
            Preview
          </a>
          <a
            href={pdfUrl}
            download
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#6657c8] text-xs font-bold text-white shadow-[0_4px_16px_rgba(102,87,200,0.2)] transition hover:bg-[#5546b8] hover:shadow-[0_8px_28px_rgba(102,87,200,0.3)] active:scale-[0.97]"
          >
            <Download size={14} strokeWidth={2.2} />
            Download
          </a>
        </div>
      </div>
    </motion.div>
  );
}
