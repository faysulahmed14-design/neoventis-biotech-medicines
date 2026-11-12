import type { CSSProperties, ReactNode } from "react";
import {
  Activity,
  Bandage,
  ClipboardPlus,
  Droplet,
  FlaskConical,
  HeartPulse,
  Hospital,
  Pill,
  ShieldPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

interface FloatingIconBadge {
  id: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  gradient: string;
  rotate: string;
  delay: string;
  duration: string;
  opacity: string;
  icon: ReactNode;
}

const HEALTHCARE_BADGES: FloatingIconBadge[] = [
  {
    id: "pill-top-left",
    top: "6%",
    left: "4%",
    size: "h-14 w-14 sm:h-16 sm:w-16",
    gradient: "from-orange-500 to-orange-600",
    rotate: "-12deg",
    delay: "0s",
    duration: "7s",
    opacity: "opacity-20",
    icon: <Pill className="h-7 w-7 text-white" />,
  },
  {
    id: "stethoscope-top-right",
    top: "8%",
    right: "5%",
    size: "h-16 w-16 sm:h-20 sm:w-20",
    gradient: "from-slate-600 to-slate-800",
    rotate: "14deg",
    delay: "1.2s",
    duration: "8.5s",
    opacity: "opacity-20",
    icon: <Stethoscope className="h-8 w-8 text-white" />,
  },
  {
    id: "shield-upper-left",
    top: "20%",
    left: "12%",
    size: "h-12 w-12 sm:h-14 sm:w-14",
    gradient: "from-amber-500 to-orange-600",
    rotate: "8deg",
    delay: "2.1s",
    duration: "9s",
    opacity: "opacity-20",
    icon: <ShieldPlus className="h-6 w-6 text-white" />,
  },
  {
    id: "flask-upper-right",
    top: "23%",
    right: "11%",
    size: "h-14 w-14 sm:h-16 sm:w-16",
    gradient: "from-slate-500 to-slate-700",
    rotate: "-10deg",
    delay: "0.7s",
    duration: "7.5s",
    opacity: "opacity-20",
    icon: <FlaskConical className="h-7 w-7 text-white" />,
  },
  {
    id: "syringe-mid-left",
    top: "39%",
    left: "3%",
    size: "h-16 w-16 sm:h-18 sm:w-18",
    gradient: "from-orange-400 to-amber-600",
    rotate: "18deg",
    delay: "1.8s",
    duration: "8s",
    opacity: "opacity-20",
    icon: <Syringe className="h-7 w-7 text-white" />,
  },
  {
    id: "heart-mid-right",
    top: "42%",
    right: "4%",
    size: "h-14 w-14 sm:h-16 sm:w-16",
    gradient: "from-orange-600 to-red-600",
    rotate: "-14deg",
    delay: "2.6s",
    duration: "9.5s",
    opacity: "opacity-20",
    icon: <HeartPulse className="h-7 w-7 text-white" />,
  },
  {
    id: "bandage-mid-center-left",
    top: "56%",
    left: "8%",
    size: "h-12 w-12 sm:h-14 sm:w-14",
    gradient: "from-slate-600 to-slate-700",
    rotate: "-16deg",
    delay: "0.9s",
    duration: "8.2s",
    opacity: "opacity-20",
    icon: <Bandage className="h-6 w-6 text-white" />,
  },
  {
    id: "droplet-mid-center-right",
    top: "60%",
    right: "9%",
    size: "h-14 w-14 sm:h-16 sm:w-16",
    gradient: "from-orange-500 to-amber-600",
    rotate: "12deg",
    delay: "1.5s",
    duration: "7.8s",
    opacity: "opacity-20",
    icon: <Droplet className="h-7 w-7 text-white" />,
  },
  {
    id: "clipboard-low-left",
    top: "74%",
    left: "4%",
    size: "h-14 w-14 sm:h-16 sm:w-16",
    gradient: "from-slate-700 to-slate-800",
    rotate: "10deg",
    delay: "2.2s",
    duration: "8.8s",
    opacity: "opacity-20",
    icon: <ClipboardPlus className="h-7 w-7 text-white" />,
  },
  {
    id: "hospital-low-right",
    top: "78%",
    right: "4%",
    size: "h-16 w-16 sm:h-18 sm:w-18",
    gradient: "from-orange-500 to-orange-700",
    rotate: "-8deg",
    delay: "0.4s",
    duration: "9.2s",
    opacity: "opacity-20",
    icon: <Hospital className="h-7 w-7 text-white" />,
  },
  {
    id: "activity-bottom-center",
    top: "89%",
    left: "48%",
    size: "h-12 w-12 sm:h-14 sm:w-14",
    gradient: "from-slate-600 to-slate-800",
    rotate: "6deg",
    delay: "1.1s",
    duration: "7.4s",
    opacity: "opacity-20",
    icon: <Activity className="h-6 w-6 text-white" />,
  },
];

export function Background3D() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden [contain:strict]"
    >
      {/* Base 3D Ambient Lighting Layer */}
      <div className="site-backdrop-3d absolute inset-0" />

      {/* Full-Viewport 3D Perspective Grid */}
      <div className="site-grid-3d" />

      {/* Floating 3D Circular Healthcare Icon Badges */}
      {HEALTHCARE_BADGES.map((badge) => (
        <div
          key={badge.id}
          style={
            {
              top: badge.top,
              left: badge.left,
              right: badge.right,
              animationDelay: badge.delay,
              animationDuration: badge.duration,
              "--badge-rotate": badge.rotate,
            } as CSSProperties
          }
          className={`animate-float-3d absolute flex ${badge.size} ${badge.opacity} items-center justify-center rounded-full bg-gradient-to-br ${badge.gradient} shadow-[0_18px_32px_-8px_rgba(15,23,42,0.22),inset_0_3px_6px_rgba(255,255,255,0.45),inset_0_-4px_8px_rgba(0,0,0,0.2)] ring-4 ring-white/60`}
        >
          {badge.icon}
        </div>
      ))}
    </div>
  );
}
