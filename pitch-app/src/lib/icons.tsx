import {
  Calendar,
  Clock,
  CreditCard,
  Gem,
  Globe,
  Handshake,
  Layers,
  LayoutDashboard,
  LucideIcon,
  MessageCircle,
  PackageX,
  Plug,
  Repeat,
  ScanBarcode,
  Shield,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  PackageX,
  Clock,
  Layers,
  Globe,
  TrendingUp,
  Sparkles,
  ScanBarcode,
  CreditCard,
  Users,
  LayoutDashboard,
  Shield,
  Plug,
  Repeat,
  Wallet,
  Gem,
  Handshake,
  ShoppingBag,
  Calendar,
  MessageCircle,
};

export function PitchIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Layers;
  return <Icon className={className} strokeWidth={1.5} />;
}
