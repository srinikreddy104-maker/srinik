import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const moodOptions = [
  { emoji: "😄", label: "Excellent", value: 5, color: "bg-green-100 hover:bg-green-200 text-green-700" },
  { emoji: "😊", label: "Good", value: 4, color: "bg-blue-100 hover:bg-blue-200 text-blue-700" },
  { emoji: "😐", label: "Okay", value: 3, color: "bg-yellow-100 hover:bg-yellow-200 text-yellow-700" },
  { emoji: "😟", label: "Low", value: 2, color: "bg-orange-100 hover:bg-orange-200 text-orange-700" },
  { emoji: "😢", label: "Poor", value: 1, color: "bg-red-100 hover:bg-red-200 text-red-700" }
];

const wellnessFactors = [
  "Sleep Quality", "Stress Level", "Social Connection", "Physical Activity", 
  "Academic Pressure", "Focus & Concentration", "Emotional Stability"
];

interface MoodTrackerProps {
  onSubmit?: (data: { mood: number; factors: string[]; notes: string }) => void;
}

export function MoodTracker({ onSubmit }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const handleFactorToggle = (factor: string) => {
    setSelectedFactors(prev => 
      prev.includes(factor) 
        ? prev.filter(f => f !== factor)
        : [...prev, factor]
    );
  };

  const handleSubmit = () => {
    if (selectedMood && onSubmit) {
      onSubmit({
        mood: selectedMood,
        factors: selectedFactors,
        notes
      });
      
      // Reset form
      setSelectedMood(null);
      setSelectedFactors([]);
      setNotes("");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-gentle">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold text-foreground">
          Daily Wellness Check-in
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          How are you feeling today? Your input helps us provide better support.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Mood Selection */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-foreground">Current Mood</h3>
          <div className="grid grid-cols-5 gap-3">
            {moodOptions.map((mood) => (
              <Button
                key={mood.value}
                variant="outline"
                size="lg"
                onClick={() => setSelectedMood(mood.value)}
                className={cn(
                  "h-20 flex-col gap-2 transition-bounce border-2",
                  selectedMood === mood.value 
                    ? "border-primary bg-primary/10 shadow-wellness" 
                    : "border-border hover:border-primary/50",
                  mood.color
                )}
              >
                <span className="text-2xl">{mood.emoji}</span>
                <span className="text-xs font-medium">{mood.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Wellness Factors */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-foreground">
            What's influencing your wellness today?
          </h3>
          <div className="flex flex-wrap gap-2">
            {wellnessFactors.map((factor) => (
              <Badge
                key={factor}
                variant={selectedFactors.includes(factor) ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-smooth px-3 py-1.5 text-sm",
                  selectedFactors.includes(factor)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-secondary border-2"
                )}
                onClick={() => handleFactorToggle(factor)}
              >
                {factor}
              </Badge>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-foreground">
            Additional Notes (Optional)
          </h3>
          <Textarea
            placeholder="Share any thoughts, concerns, or highlights from your day..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-20 resize-none border-2 focus:border-primary transition-smooth"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={!selectedMood}
          size="lg"
          className={cn(
            "w-full transition-bounce text-lg font-semibold",
            selectedMood 
              ? "bg-gradient-wellness hover:shadow-glow" 
              : "bg-muted text-muted-foreground"
          )}
        >
          {selectedMood ? "Submit Check-in" : "Please select your mood"}
        </Button>
      </CardContent>
    </Card>
  );
}