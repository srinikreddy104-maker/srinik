import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoodTracker } from "@/components/ui/mood-tracker";
import { WellnessDashboard } from "@/components/ui/wellness-dashboard";
import { WellnessResources } from "@/components/ui/wellness-resources";
import { WellnessNavigation } from "@/components/WellnessNavigation";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState("check-in");
  const { toast } = useToast();

  const handleMoodSubmit = (data: { mood: number; factors: string[]; notes: string }) => {
    // In a real app, this would send data to backend
    console.log("Mood data submitted:", data);
    
    toast({
      title: "Check-in Completed! ✨",
      description: "Your wellness data has been recorded. Thank you for taking care of yourself!",
    });

    // Automatically switch to dashboard after successful submission
    setTimeout(() => {
      setActiveSection("dashboard");
    }, 2000);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "check-in":
        return <MoodTracker onSubmit={handleMoodSubmit} />;
      case "dashboard":
        return <WellnessDashboard />;
      case "resources":
        return <WellnessResources />;
      case "profile":
        return (
          <Card className="max-w-2xl mx-auto shadow-gentle">
            <CardHeader>
              <CardTitle>Profile & Settings</CardTitle>
              <CardDescription>Manage your wellness preferences and account settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Profile settings coming soon...</p>
            </CardContent>
          </Card>
        );
      default:
        return <MoodTracker onSubmit={handleMoodSubmit} />;
    }
  };

  return (
    <div className="min-h-screen wellness-background relative">
      {/* Floating Background Elements */}
      <div className="floating-element">
        <div className="w-24 h-24 rounded-full bg-primary/10 animate-pulse-soft"></div>
      </div>
      <div className="floating-element">
        <div className="w-16 h-16 rounded-full bg-accent/15 animate-pulse-soft"></div>
      </div>
      <div className="floating-element">
        <div className="w-20 h-20 rounded-full bg-secondary/20 animate-pulse-soft"></div>
      </div>
      {/* Header */}
      <header className="border-b border-border/30 bg-background/60 backdrop-blur-md sticky top-0 z-50 shadow-gentle">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-10 h-10 rounded-full bg-gradient-wellness flex items-center justify-center shadow-glow animate-float">
                <span className="text-xl">🧠</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">MindCare</h1>
                <p className="text-sm text-muted-foreground">Student Wellness Platform</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                AI-Powered
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                className="border-2 hover:border-primary/50"
              >
                💬 Get Support
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <WellnessNavigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8">
        {activeSection === "check-in" && (
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back! 👋
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a moment to check in with yourself. Your mental health matters, and we're here to support you every step of the way.
            </p>
          </div>
        )}
        
        <div className="animate-scale-in">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-background/40 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Remember: If you're experiencing a mental health emergency, please contact emergency services or call 988 (Suicide & Crisis Lifeline).
            </p>
            <p>
              MindCare • Supporting student wellness through AI-powered insights
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
