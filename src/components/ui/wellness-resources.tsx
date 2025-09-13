import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const resourceCategories = {
  coping: [
    {
      title: "5-Minute Breathing Exercise",
      description: "Quick stress relief through guided breathing",
      duration: "5 min",
      difficulty: "Beginner",
      type: "Audio",
      tags: ["Stress", "Anxiety", "Quick Relief"]
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Full-body relaxation technique for deep calm",
      duration: "15 min",
      difficulty: "Beginner",
      type: "Video",
      tags: ["Stress", "Sleep", "Relaxation"]
    },
    {
      title: "Mindful Study Breaks",
      description: "Techniques to reset your mind during study sessions",
      duration: "3 min",
      difficulty: "Beginner",
      type: "Article",
      tags: ["Focus", "Study", "Productivity"]
    }
  ],
  mindfulness: [
    {
      title: "Daily Gratitude Practice",
      description: "Build resilience through gratitude journaling",
      duration: "10 min",
      difficulty: "Beginner",
      type: "Interactive",
      tags: ["Gratitude", "Mood", "Resilience"]
    },
    {
      title: "Body Scan Meditation",
      description: "Connect with your body and reduce tension",
      duration: "20 min",
      difficulty: "Intermediate",
      type: "Audio",
      tags: ["Meditation", "Awareness", "Relaxation"]
    },
    {
      title: "Mindful Walking",
      description: "Transform daily walks into mindfulness practice",
      duration: "Variable",
      difficulty: "Beginner",
      type: "Guide",
      tags: ["Movement", "Mindfulness", "Nature"]
    }
  ],
  sleep: [
    {
      title: "Sleep Hygiene Checklist",
      description: "Optimize your environment for better sleep",
      duration: "2 min",
      difficulty: "Beginner",
      type: "Checklist",
      tags: ["Sleep", "Environment", "Habits"]
    },
    {
      title: "Wind-Down Routine",
      description: "Create a calming pre-sleep ritual",
      duration: "30 min",
      difficulty: "Beginner",
      type: "Guide",
      tags: ["Sleep", "Routine", "Relaxation"]
    },
    {
      title: "Sleep Stories",
      description: "Calming narratives to help you drift off",
      duration: "25 min",
      difficulty: "Beginner",
      type: "Audio",
      tags: ["Sleep", "Stories", "Relaxation"]
    }
  ],
  social: [
    {
      title: "Building Support Networks",
      description: "How to create meaningful connections in college",
      duration: "8 min",
      difficulty: "Beginner",
      type: "Article",
      tags: ["Connection", "Friends", "Support"]
    },
    {
      title: "Healthy Boundaries",
      description: "Setting limits while maintaining relationships",
      duration: "12 min",
      difficulty: "Intermediate",
      type: "Video",
      tags: ["Boundaries", "Relationships", "Self-care"]
    },
    {
      title: "Social Anxiety Toolkit",
      description: "Practical strategies for social situations",
      duration: "15 min",
      difficulty: "Intermediate",
      type: "Interactive",
      tags: ["Anxiety", "Social", "Confidence"]
    }
  ]
};

const emergencyResources = [
  {
    title: "Crisis Text Line",
    description: "24/7 support via text message",
    contact: "Text HOME to 741741",
    type: "Immediate"
  },
  {
    title: "National Suicide Prevention Lifeline",
    description: "24/7 phone and chat support",
    contact: "988 or chat online",
    type: "Immediate"
  },
  {
    title: "Campus Counseling Center",
    description: "Professional counseling services",
    contact: "Visit student services",
    type: "Professional"
  }
];

export function WellnessResources() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Audio": return "🎧";
      case "Video": return "📹";
      case "Article": return "📖";
      case "Interactive": return "🎯";
      case "Guide": return "📋";
      case "Checklist": return "✅";
      default: return "📚";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      case "Advanced": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Emergency Resources */}
      <Card className="shadow-wellness border-destructive/20">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center gap-2">
            🚨 Emergency Support
          </CardTitle>
          <CardDescription>
            If you're in crisis or need immediate help, these resources are available 24/7
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyResources.map((resource, index) => (
              <div key={index} className="p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                <h4 className="font-semibold text-destructive mb-2">{resource.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                <p className="font-medium text-foreground">{resource.contact}</p>
                <Badge variant="outline" className="mt-2 border-destructive/50 text-destructive">
                  {resource.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resource Library */}
      <Card className="shadow-gentle">
        <CardHeader>
          <CardTitle>Wellness Resource Library</CardTitle>
          <CardDescription>
            Curated tools and techniques to support your mental health journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="coping" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="coping">Coping Skills</TabsTrigger>
              <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
              <TabsTrigger value="sleep">Sleep</TabsTrigger>
              <TabsTrigger value="social">Social Support</TabsTrigger>
            </TabsList>

            {Object.entries(resourceCategories).map(([category, resources]) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map((resource, index) => (
                    <Card key={index} className="shadow-gentle hover:shadow-wellness transition-smooth border-2 hover:border-primary/20">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                          <Badge 
                            variant="outline" 
                            className={getDifficultyColor(resource.difficulty)}
                          >
                            {resource.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>⏱️ {resource.duration}</span>
                          <Badge variant="secondary" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {resource.tags.map((tag, tagIndex) => (
                            <Badge 
                              key={tagIndex} 
                              variant="outline" 
                              className="text-xs px-2 py-0.5"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-wellness hover:shadow-glow transition-bounce"
                        >
                          Start Session
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-gentle">
        <CardHeader>
          <CardTitle>Quick Wellness Actions</CardTitle>
          <CardDescription>
            Immediate tools for common wellness needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="h-20 flex-col gap-2 border-2 hover:border-primary/50 transition-bounce"
            >
              <span className="text-2xl">🧘</span>
              <span className="text-sm">Quick Calm</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-20 flex-col gap-2 border-2 hover:border-primary/50 transition-bounce"
            >
              <span className="text-2xl">💤</span>
              <span className="text-sm">Sleep Help</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-20 flex-col gap-2 border-2 hover:border-primary/50 transition-bounce"
            >
              <span className="text-2xl">⚡</span>
              <span className="text-sm">Energy Boost</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-20 flex-col gap-2 border-2 hover:border-primary/50 transition-bounce"
            >
              <span className="text-2xl">🤝</span>
              <span className="text-sm">Connect</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}