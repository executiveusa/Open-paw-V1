import type { Metadata } from 'next';
import { ArrowLeftRight } from 'lucide-react';
import { EmptyState } from '@/components/app/EmptyState';

export const metadata: Metadata = { title: 'Intake' };

export default function IntakePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Intake</h1>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
        <EmptyState
          icon={ArrowLeftRight}
          title="Intake queue"
          description="Animals in the intake process will appear here. Use Add Animal to start a new intake record."
        />
      </div>
    </div>
  );
}
