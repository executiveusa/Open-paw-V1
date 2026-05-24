import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { NewAnimalForm } from '@/components/app/NewAnimalForm';

export const metadata: Metadata = { title: 'Add Animal' };

export default function NewAnimalPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center gap-3">
        <Link
          href="/app/animals"
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Back to animals"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add Animal</h1>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
        <NewAnimalForm />
      </div>
    </div>
  );
}
