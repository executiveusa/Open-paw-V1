import type { Metadata } from 'next';
import { BarChart2 } from 'lucide-react';
import { EmptyState } from '@/components/app/EmptyState';

export const metadata: Metadata = { title: 'Reports' };

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
        <EmptyState
          icon={BarChart2}
          title="Reports"
          description="Adoption rates, intake summaries, grant impact reports, and outcome data will appear here."
        />
      </div>
    </div>
  );
}
