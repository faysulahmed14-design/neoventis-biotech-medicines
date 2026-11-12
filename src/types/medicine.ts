export type MedicineCategory = "Capsules" | "Tablets";

export interface Medicine {
  id: string;
  name: string;
  category: MedicineCategory;
  /**
   * Accepts:
   * 1. A full Cloudinary URL: https://res.cloudinary.com/<cloud>/image/upload/...
   * 2. A Cloudinary public ID (when NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set): e.g. "neoventis/cap-otubic"
   * 3. A local fallback path in /public: e.g. "/images/medicines/capsule-bottle.svg"
   */
  image: string;
}
