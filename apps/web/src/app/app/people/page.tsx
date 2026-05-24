import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { EmptyState } from '@/components/app/EmptyState';

export const metadata: Metadata = { title: 'People' };

export default function PeoplePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">People</h1>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
        <EmptyState
          icon={Users}
          title="People directory"
          description="Fosters, adopters, volunteers, and staff will appear here once added."
        />
      </div>
    </div>
  );
}
