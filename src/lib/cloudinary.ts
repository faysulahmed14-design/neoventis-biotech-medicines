const CLOUDINARY_CLOUD_NAME = (
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim() || ""
).replace(/[^a-zA-Z0-9_-]/g, "");
const CLOUDINARY_HOST = "https://res.cloudinary.com/";

/**
 * Resolves a medicine image source to an optimized URL.
 * Supports full Cloudinary URLs, Cloudinary public IDs, and local `/images/...` paths.
 */
export function getMedicineImageUrl(imageSource: string, width = 800): string {
  const trimmed = imageSource.trim();

  if (!trimmed) {
    return "/images/medicines/tablet-pack.svg";
  }

  // Local static asset inside /public (reject protocol-relative `//` URLs)
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return trimmed;
  }

  // Full Cloudinary URL -> inject automatic format/quality/width optimization if missing
  if (trimmed.startsWith(CLOUDINARY_HOST)) {
    const uploadMarker = "/image/upload/";
    const markerIndex = trimmed.indexOf(uploadMarker);
    if (markerIndex !== -1) {
      const afterUpload = trimmed.slice(markerIndex + uploadMarker.length);
      if (!afterUpload.startsWith("f_auto") && !afterUpload.startsWith("q_auto")) {
        const prefix = trimmed.slice(0, markerIndex + uploadMarker.length);
        return `${prefix}f_auto,q_auto,w_${width},c_limit/${afterUpload}`;
      }
    }
    return trimmed;
  }

  // External HTTP(S) URL
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  // Cloudinary public ID (requires NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)
  if (CLOUDINARY_CLOUD_NAME) {
    const cleanId = trimmed.replace(/^\/+/, "");
    return `${CLOUDINARY_HOST}${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width},c_limit/${cleanId}`;
  }

  return "/images/medicines/tablet-pack.svg";
}
