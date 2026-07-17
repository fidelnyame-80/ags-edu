export default function AcademicImageMask({ src, alt, objectPosition = "50% 50%", className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <clipPath id="academic-mask-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.839 0.362A0.009 0.009 0 0 0 0.412 0.123A0.009 0.009 0 0 0 0.221 0.713A0.009 0.009 0 0 0 0.892 0.619A0.009 0.009 0 0 0 0.839 0.362" />
          </clipPath>
        </defs>
      </svg>
      <img
        src={src}
        alt={alt || ""}
        style={{ clipPath: "url(#academic-mask-clip)", objectPosition, width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
