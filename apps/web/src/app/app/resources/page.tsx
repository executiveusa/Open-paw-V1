import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { EmptyState } from '@/components/app/EmptyState';

export const metadata: Metadata = { title: 'Resources' };

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resources</h1>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
        <EmptyState
          icon={BookOpen}
          title="Resource directory"
          description="Grant-writing guides, funder research, and program templates will appear here."
        />
      </div>
    </div>
  );
}
