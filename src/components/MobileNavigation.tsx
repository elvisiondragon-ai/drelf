import { Home, Sparkles, Brain, Heart, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    icon: Home,
    label: "Home",
    path: "/",
    emoji: "🏠"
  },
  {
    icon: Sparkles,
    label: "Product",
    path: "/product",
    emoji: "✨"
  },
  {
    icon: Brain,
    label: "Why",
    path: "/why",
    emoji: "🧠"
  },
  {
    icon: Heart,
    label: "Beauty is Meditate",
    path: "/meditate",
    emoji: "🧘"
  },
  {
    icon: ShoppingCart,
    label: "Checkout",
    path: "/checkout",
    emoji: "🛒"
  }
];

export function MobileNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 luxury-card border-t border-rose-gold/20">
      <div className="flex items-center justify-around py-2 px-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 min-w-0 flex-1",
                isActive 
                  ? "rose-gradient text-pearl-white shadow-luxury" 
                  : "text-warm-gray hover:text-rose-gold hover:bg-rose-gold/10"
              )}
            >
              <div className="flex items-center justify-center w-6 h-6 mb-1">
                <span className="text-lg">{item.emoji}</span>
              </div>
              <span className="text-xs font-medium text-center leading-tight">
                {item.label.split(' ').map((word, index) => (
                  <span key={index} className="block">
                    {word}
                  </span>
                ))}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}