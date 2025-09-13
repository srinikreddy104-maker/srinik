import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Mock data for demonstration
const moodData = [
  { date: "Mon", mood: 4, wellness: 75 },
  { date: "Tue", mood: 3, wellness: 65 },
  { date: "Wed", mood: 5, wellness: 85 },
  { date: "Thu", mood: 2, wellness: 45 },
  { date: "Fri", mood: 4, wellness: 80 },
  { date: "Sat", mood: 5, wellness: 90 },
  { date: "Sun", mood: 4, wellness: 78 }
];

const wellnessMetrics = [
  { category: "Sleep Quality", score: 78, trend: "up", color: "bg-blue-500" },
  { category: "Stress Management", score: 65, trend: "down", color: "bg-orange-500" },
  { category: "Social Connection", score: 82, trend: "up", color: "bg-green-500" },
  { category: "Physical Activity", score: 55, trend: "stable", color: "bg-purple-500" }
];

const recentInsights = [
  {
    type: "positive",
    title: "Improved Sleep Pattern",
    description: "Your sleep quality has improved by 15% this week",
    time: "2 hours ago"
  },
  {
    type: "concern",
    title: "Elevated Stress Levels",
    description: "Consider trying breathing exercises before your morning classes",
    time: "1 day ago"
  },
  {
    type: "achievement",
    title: "Consistency Streak",
    description: "7 days of regular wellness check-ins! Keep it up!",
    time: "3 days ago"
  }
];

export function WellnessDashboard() {
  const currentMood = moodData[moodData.length - 1]?.mood || 4;
  const averageWellness = Math.round(moodData.reduce((acc, day) => acc + day.wellness, 0) / moodData.length);

  const getMoodEmoji = (mood: number) => {
    const emojis = ["😢", "😟", "😐", "😊", "😄"];
    return emojis[mood - 1] || "😐";
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "positive": return "✨";
      case "concern": return "⚠️";
      case "achievement": return "🎉";
      default: return "💡";
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-gentle">
          <CardHeader className="pb-3">
            <CardDescription>Current Mood</CardDescription>
            <CardTitle className="text-3xl flex items-center gap-3">
              <span className="text-4xl">{getMoodEmoji(currentMood)}</span>
              <span className="text-primary">Good</span>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="shadow-gentle">
          <CardHeader className="pb-3">
            <CardDescription>Weekly Average</CardDescription>
            <CardTitle className="text-3xl text-primary">
              {averageWellness}%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={averageWellness} className="h-2" />
          </CardContent>
        </Card>

        <Card className="shadow-gentle">
          <CardHeader className="pb-3">
            <CardDescription>Check-in Streak</CardDescription>
            <CardTitle className="text-3xl text-accent">
              7 Days
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
              Personal Best!
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-gentle">
          <CardHeader>
            <CardTitle>Mood Trends</CardTitle>
            <CardDescription>Your mood patterns over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis domain={[1, 5]} className="text-xs" />
                <Tooltip 
                  formatter={(value) => [`${value}/5`, 'Mood']}
                  labelFormatter={(label) => `Day: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-gentle">
          <CardHeader>
            <CardTitle>Wellness Score</CardTitle>
            <CardDescription>Overall wellness index throughout the week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Wellness']}
                  labelFormatter={(label) => `Day: ${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="wellness" 
                  stroke="hsl(var(--accent))" 
                  fill="hsl(var(--accent) / 0.3)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Wellness Metrics */}
      <Card className="shadow-gentle">
        <CardHeader>
          <CardTitle>Wellness Categories</CardTitle>
          <CardDescription>Detailed breakdown of your wellness factors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wellnessMetrics.map((metric) => (
              <div key={metric.category} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30">
                <div className={`w-4 h-4 rounded-full ${metric.color}`} />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{metric.category}</span>
                    <span className="text-sm font-semibold text-primary">{metric.score}%</span>
                  </div>
                  <Progress value={metric.score} className="h-2" />
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.trend === "up" ? "↗️" : metric.trend === "down" ? "↘️" : "➡️"}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Insights */}
      <Card className="shadow-gentle">
        <CardHeader>
          <CardTitle>AI Insights & Recommendations</CardTitle>
          <CardDescription>Personalized wellness insights based on your data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInsights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 transition-smooth hover:bg-muted/50">
                <span className="text-xl">{getInsightIcon(insight.type)}</span>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                  <span className="text-xs text-muted-foreground">{insight.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}