import {
  Drill, Hammer, BrickWall, Axe, Flame, Ruler, Disc, Briefcase,
  Lightbulb, Sun, Wrench, Droplets, BatteryCharging, type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Drill, Hammer, BrickWall, Axe, Flame, Ruler, Disc, Briefcase,
  Lightbulb, Sun, Wrench, Droplets, BatteryCharging,
};

export default function CategoryIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Wrench;
  return <Icon className={className} />;
}