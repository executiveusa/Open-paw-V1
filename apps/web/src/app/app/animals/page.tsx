import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus, PawPrint } from 'lucide-react';
import { StatusBadge } from '@/components/ui/Badge';
import { mockAnimals } from '@/lib/api/mockClient';

export const metadata: Metadata = { title: 'Animals' };

export default function AnimalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Animals</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {mockAnimals.length} animals in record
          </p>
        </div>
        <Link
          href="/app/animals/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
        >
          <Plus className="w-4 h-4" aria-hidden />
          Add Animal
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {mockAnimals.map((animal) => (
            <Link
              key={animal.id}
              href={`/app/animals/${animal.id}`}
              className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                <PawPrint className="w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{animal.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {animal.species}
                  {animal.breed ? ` · ${animal.breed}` : ''}
                  {animal.sex ? ` · ${animal.sex}` : ''}
                </div>
              </div>
              <div className="hidden sm:block text-xs text-gray-400 dark:text-gray-500 shrink-0">
                {animal.location ?? '—'}
              </div>
              <StatusBadge status={animal.status} />
            </Link>
          ))}
        </div>
        {mockAnimals.length === 0 && (
          <div className="py-16 text-center">
            <PawPrint className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" aria-hidden />
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">No animals yet</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Add your first animal to get started.
            </p>
            <Link
              href="/app/animals/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium"
            >
              <Plus className="w-4 h-4" aria-hidden />
              Add Animal
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
