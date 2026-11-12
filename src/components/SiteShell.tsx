import type { ReactNode } from "react";
import { serializeJsonLd } from "@/lib/seo";
import { Background3D } from "./Background3D";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface SiteShellProps {
  children: ReactNode;
  jsonLd?: unknown;
  mainClassName?: string;
}

export function SiteShell({
  children,
  jsonLd,
  mainClassName = "flex-1",
}: SiteShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Background3D />
      {jsonLd !== undefined && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      )}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className={mainClassName}>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
