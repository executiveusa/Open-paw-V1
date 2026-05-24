import type { Metadata } from 'next';
import { Stethoscope } from 'lucide-react';
import { EmptyState } from '@/components/app/EmptyState';

export const metadata: Metadata = { title: 'Medical' };

export default function MedicalPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Medical</h1>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
        <EmptyState
          icon={Stethoscope}
          title="Medical records"
          description="Vaccine records, medications, and procedures will appear here once added to an animal's profile."
        />
      </div>
    </div>
  );
}
