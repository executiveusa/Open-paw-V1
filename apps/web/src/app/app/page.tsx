import type { Metadata } from 'next';
import Link from 'next/link';
import { PawPrint, Heart, AlertCircle, Home, Search, DollarSign } from 'lucide-react';
import { StatusBadge } from '@/components/ui/Badge';
import { getMockStats, mockAnimals, mockTasks } from '@/lib/api/mockClient';

export const metadata: Metadata = { title: 'Overview' };

const statCards = [
  { label: 'Animals in Care', key: 'animalsInCare', icon: PawPrint, color: 'text-paw-500', href: '/app/animals' },
  { label: 'Adoptable', key: 'adoptable', icon: Heart, color: 'text-green-500', href: '/app/animals' },
  { label: 'Medical Hold', key: 'medicalHold', icon: AlertCircle, color: 'text-red-500', href: '/app/animals' },
  { label: 'Foster Placements', key: 'fosterPlacements', icon: Home, color: 'text-brand-500', href: '/app/fosters' },
  { label: 'Open Lost/Found', key: 'openLostFound', icon: Search, color: 'text-purple-500', href: '/app/lost-found' },
  { label: 'Grant Opportunities', key: 'grantOpportunities', icon: DollarSign, color: 'text-yellow-500', href: '/app/funding' },
] as const;

export default function DashboardPage() {
  const stats = getMockStats();
  const urgentTasks = mockTasks.filter(
    (t) => t.status !== 'done' && t.status !== 'cancelled'
  ).slice(0, 3);
  const recentAnimals = mockAnimals.slice(0, 4);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Happy Paws Rescue — demo workspace
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="group p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-sm transition-shadow"
            >
              <Icon className={`w-5 h-5 ${card.color} mb-3`} aria-hidden />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats[card.key]}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {card.label}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent animals + open tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Recent Animals</h2>
            <Link
              href="/app/animals"
              className="text-xs text-paw-600 dark:text-paw-400 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {recentAnimals.map((animal) => (
              <Link
                key={animal.id}
                href={`/app/animals/${animal.id}`}
                className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:opacity-80 transition-opacity"
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {animal.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {animal.species}
                    {animal.breed ? ` — ${animal.breed}` : ''}
                  </div>
                </div>
                <StatusBadge status={animal.status} />
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Open Tasks</h2>
            <Link
              href="/app/tasks"
              className="text-xs text-paw-600 dark:text-paw-400 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {urgentTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-gray-800 last:border-0"
              >
                <div
                  className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                    task.priority === 'urgent'
                      ? 'bg-red-500'
                      : task.priority === 'high'
                      ? 'bg-paw-500'
                      : 'bg-brand-500'
                  }`}
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {task.title}
                  </div>
                  {task.due_date && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Due: {task.due_date}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {urgentTasks.length === 0 && (
              <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-6">
                All caught up!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
