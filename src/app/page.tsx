import { HeroSection } from "@/components/HeroSection";
import { MedicineCatalog } from "@/components/MedicineCatalog";
import { SiteShell } from "@/components/SiteShell";
import { MEDICINES } from "@/data/medicines";
import { buildHomeJsonLd, getSiteUrl } from "@/lib/seo";

export default function HomePage() {
  const jsonLd = buildHomeJsonLd(getSiteUrl());

  return (
    <SiteShell jsonLd={jsonLd}>
      <HeroSection />
      <MedicineCatalog medicines={MEDICINES} />
    </SiteShell>
  );
}
