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
    <div className="min-h-screen gradient-calm">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-wellness flex items-center justify-center">
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
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back! 👋
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a moment to check in with yourself. Your mental health matters, and we're here to support you every step of the way.
            </p>
          </div>
        )}
        
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50 mt-16">
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
