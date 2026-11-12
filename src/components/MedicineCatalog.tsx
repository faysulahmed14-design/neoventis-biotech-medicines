"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { MEDICINE_CATEGORIES } from "@/data/medicines";
import { getShortMedicineName } from "@/lib/seo";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";
import type { Medicine, MedicineCategory } from "@/types/medicine";
import { MedicineCard } from "./MedicineCard";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface MedicineCatalogProps {
  medicines: Medicine[];
}

type CategoryFilter = "All" | MedicineCategory;

const CATEGORIES: CategoryFilter[] = ["All", ...MEDICINE_CATEGORIES];

function getSearchScore(medicine: Medicine, rawQuery: string): number {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return 1;

  const fullName = medicine.name.toLowerCase();
  const shortName = getShortMedicineName(fullName);
  const normalizedQuery = getShortMedicineName(query);

  if (
    fullName === query ||
    shortName === query ||
    (normalizedQuery !== "" && shortName === normalizedQuery)
  ) {
    return 100;
  }

  if (
    shortName.startsWith(query) ||
    fullName.startsWith(query) ||
    (normalizedQuery !== "" && shortName.startsWith(normalizedQuery))
  ) {
    return 80;
  }

  if (
    shortName.includes(query) ||
    fullName.includes(query) ||
    (normalizedQuery !== "" && shortName.includes(normalizedQuery))
  ) {
    return 60;
  }

  return 0;
}

export function MedicineCatalog({ medicines }: MedicineCatalogProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const filteredMedicines = useMemo(() => {
    const query = deferredSearchQuery.trim();

    return medicines
      .map((medicine, index) => ({
        medicine,
        index,
        score: getSearchScore(medicine, query),
      }))
      .filter(({ medicine, score }) => {
        const matchesCategory =
          selectedCategory === "All" || medicine.category === selectedCategory;
        return matchesCategory && score > 0;
      })
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .map(({ medicine }) => medicine);
  }, [medicines, deferredSearchQuery, selectedCategory]);

  const customInquiryUrl = buildWhatsAppOrderUrl();

  return (
    <section id="catalog" className="relative">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mb-6 flex flex-col gap-4 sm:mb-7 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[1.75rem]">
            Our Medicines
          </h2>
        </div>

        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                searchQuery.trim() !== "" &&
                filteredMedicines.length > 0
              ) {
                e.preventDefault();
                router.push(`/medicines/${filteredMedicines[0].id}`);
              }
            }}
            placeholder="Search medicine by name..."
            aria-label="Search medicine by name"
            className="w-full rounded-xl border border-slate-200 bg-white/95 py-2.5 pr-10 pl-10 text-sm text-slate-900 placeholder-slate-400 shadow-xs outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-7 flex flex-wrap gap-2 sm:mb-8 sm:gap-2.5">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97] sm:text-sm ${
                isActive
                  ? "brand-gradient text-white shadow-sm shadow-orange-500/25"
                  : "border border-slate-200/90 bg-white/95 text-slate-700 shadow-2xs hover:border-orange-300 hover:bg-orange-50/60 hover:text-orange-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMedicines.map((medicine, index) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              priority={index < 4}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
          <p className="text-base font-semibold text-slate-800">
            No matching medicine found
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Can&apos;t find the medicine you need? Message us directly on WhatsApp and
            our team will assist you.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={customInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Request on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
