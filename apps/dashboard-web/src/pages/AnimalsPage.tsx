import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import { mockAnimals } from '../data/mock';
import { StatusBadge } from '../components/ui/Badge';
import type { AnimalStatus } from '../types';

const ALL_STATUSES: AnimalStatus[] = ['intake','quarantine','medical_hold','behavior_hold','foster_needed','in_foster','adoptable','adoption_pending','adopted','transferred','returned','lost','found','deceased'];

export function AnimalsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');

  const filtered = mockAnimals.filter(a => {
    const matchesSearch = !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.species.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = !statusFilter || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Animals</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{filtered.length} animals</p>
        </div>
        <Link
          to="/app/animals/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
        >
          <Plus className="w-4 h-4" aria-hidden />
          Add Animal
        </Link>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden />
          <input
            type="search"
            placeholder="Search animals..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Search animals"
          />
        </div>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Filter by status"
        >
          <option value="">All statuses</option>
          {ALL_STATUSES.map(s => (
            <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
          ))}
        </select>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-3xl mb-3" aria-hidden>🐾</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">No animals found</p>
          </div>
        ) : (
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="text-left px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Name</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Species</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Location</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500 dark:text-gray-400">Intake</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(animal => (
                <tr key={animal.id} className="border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-4 py-3">
                    <Link to={`/app/animals/${animal.id}`} className="font-medium text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                      {animal.name}
                    </Link>
                    {animal.breed && <div className="text-xs text-gray-400 dark:text-gray-500">{animal.breed}</div>}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 capitalize">{animal.species}</td>
                  <td className="px-4 py-3"><StatusBadge status={animal.status} /></td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{animal.location ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{new Date(animal.intake_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
