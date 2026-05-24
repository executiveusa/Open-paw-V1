import type { Metadata } from 'next';
import Link from 'next/link';
import { Users } from 'lucide-react';
import { mockAnimals } from '@/lib/api/mockClient';
import { StatusBadge } from '@/components/ui/Badge';

export const metadata: Metadata = { title: 'Adoptions' };

export default function AdoptionsPage() {
  const adoptable = mockAnimals.filter((a) => a.status === 'adoptable' || a.status === 'adoption_pending');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Adoptions</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {adoptable.length} animals available for adoption
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {adoptable.length > 0 ? (
          <div className="divide-y divide-gray-50 dark:divide-gray-800">
            {adoptable.map((animal) => (
              <Link
                key={animal.id}
                href={`/app/animals/${animal.id}`}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <Users className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" aria-hidden />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{animal.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {animal.species}{animal.breed ? ` · ${animal.breed}` : ''}
                  </div>
                </div>
                <StatusBadge status={animal.status} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <Users className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" aria-hidden />
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">No adoptable animals</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Animals cleared for adoption will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
