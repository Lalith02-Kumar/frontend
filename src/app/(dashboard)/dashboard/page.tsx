'use client';

import { useAuth } from '@/contexts/AuthContext';
import { ProfileCompletionWidget } from '@/components/dashboard/ProfileCompletionWidget';
import { 
  PlacementScoreWidget,
  MissingSkillsWidget,
  AiSuggestionsWidget,
  UpcomingGoalsWidget,
  ResumeWidget,
  GitHubWidget,
  CodingWidget,
  JobMatchWidget,
  ActivityWidget
} from '@/components/dashboard/DashboardWidgets';

export default function DashboardPage() {
  const { appUser } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-text">Dashboard</h1>
          <p className="text-text-secondary mt-1">Welcome back, {appUser?.displayName}!</p>
        </div>
      </div>

      <ProfileCompletionWidget />

      {/* Main Command Center Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        {/* Core Scores */}
        <div className="flex flex-col gap-6 h-full">
          <PlacementScoreWidget />
          <ResumeWidget />
        </div>

        {/* Technical Scores */}
        <div className="flex flex-col gap-6 h-full">
          <GitHubWidget />
          <CodingWidget />
        </div>

        {/* Job Matching & Analytics */}
        <div className="flex flex-col gap-6 h-full xl:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <JobMatchWidget />
            <MissingSkillsWidget />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <UpcomingGoalsWidget />
            <AiSuggestionsWidget />
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ActivityWidget />
      </div>
    </div>
  );
}
