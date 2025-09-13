import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  {
    id: "check-in",
    label: "Daily Check-in",
    icon: "📝",
    description: "Track your daily wellness"
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "📊",
    description: "View your wellness insights"
  },
  {
    id: "resources",
    label: "Resources",
    icon: "🛠️",
    description: "Wellness tools & guides"
  },
  {
    id: "profile",
    label: "Profile",
    icon: "👤",
    description: "Manage your account"
  }
];

export function WellnessNavigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <Card className="shadow-gentle">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "outline"}
              size="lg"
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex-1 flex items-center gap-3 h-auto py-3 px-4 transition-bounce",
                activeSection === item.id
                  ? "bg-gradient-wellness shadow-wellness"
                  : "border-2 hover:border-primary/50 hover:bg-primary/5"
              )}
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex flex-col items-start">
                <span className="font-semibold">{item.label}</span>
                <span className="text-xs opacity-80">{item.description}</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}