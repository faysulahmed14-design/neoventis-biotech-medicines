import type { Medicine, MedicineCategory } from "@/types/medicine";

export const MEDICINE_CATEGORIES: MedicineCategory[] = [
  "Capsules",
  "Tablets",
];

/**
 * Neoventis Medicines product catalog.
 * Only product picture and name are shown (no prices).
 * Each item currently uses a dedicated sample image from `/public/images/medicines/`.
 * Replace any `image` value with your Cloudinary URL or public ID when ready.
 */
export const MEDICINES: Medicine[] = [
  {
    id: "cap-otubic",
    name: "Cap. Otubic",
    category: "Capsules",
    image: "/images/medicines/cap-otubic.jpg",
  },
  {
    id: "cap-otucid",
    name: "Cap. Otucid",
    category: "Capsules",
    image: "/images/medicines/cap-otucid.jpg",
  },
  {
    id: "tab-utamin",
    name: "Tab. Utamin",
    category: "Tablets",
    image: "/images/medicines/tab-utamin.jpg",
  },
  {
    id: "cap-eberry",
    name: "Cap. Eberry",
    category: "Capsules",
    image: "/images/medicines/cap-eberry.jpg",
  },
  {
    id: "cap-xymotac",
    name: "Cap. Xymotac",
    category: "Capsules",
    image: "/images/medicines/cap-xymotac.jpg",
  },
  {
    id: "cap-fattycid",
    name: "Cap. Fattycid",
    category: "Capsules",
    image: "/images/medicines/cap-fattycid.jpg",
  },
  {
    id: "tab-capium",
    name: "Tab. Capium",
    category: "Tablets",
    image: "/images/medicines/tab-capium.jpg",
  },
  {
    id: "cap-aptigut",
    name: "Cap. Aptigut",
    category: "Capsules",
    image: "/images/medicines/cap-aptigut.jpg",
  },
  {
    id: "cap-infinity-f",
    name: "Cap. Infinity F",
    category: "Capsules",
    image: "/images/medicines/cap-infinity-f.jpg",
  },
  {
    id: "tab-gcosam",
    name: "Tab. Gcosam",
    category: "Tablets",
    image: "/images/medicines/tab-gcosam.jpg",
  },
  {
    id: "cap-addlife",
    name: "Cap. Addlife",
    category: "Capsules",
    image: "/images/medicines/cap-addlife.jpg",
  },
  {
    id: "cap-simogut",
    name: "Cap. Simogut",
    category: "Capsules",
    image: "/images/medicines/cap-simogut.jpg",
  },
  {
    id: "tab-kedopa",
    name: "Tab. Kedopa",
    category: "Tablets",
    image: "/images/medicines/tab-kedopa.jpg",
  },
  {
    id: "cap-assure",
    name: "Cap. Assure",
    category: "Capsules",
    image: "/images/medicines/cap-assure.jpg",
  },
  {
    id: "tab-lipocid-sr",
    name: "Tab. Lipocid SR",
    category: "Tablets",
    image: "/images/medicines/tab-lipocid-sr.jpg",
  },
  {
    id: "cap-vipro",
    name: "Cap. Vipro",
    category: "Capsules",
    image: "/images/medicines/cap-vipro.jpg",
  },
];
