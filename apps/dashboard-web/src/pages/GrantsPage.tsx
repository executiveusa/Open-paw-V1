import { Link } from 'react-router-dom';
import { mockGrants } from '../data/mock';
import { DollarSign, Calendar } from 'lucide-react';
import { clsx } from 'clsx';

const statusColors: Record<string, string> = {
  identified: 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400',
  researching: 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400',
  drafting: 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400',
  submitted: 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400',
  awarded: 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400',
  declined: 'bg-gray-100 dark:bg-gray-800 text-gray-500',
};

export function GrantsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Funding Radar</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{mockGrants.length} grant opportunities</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {mockGrants.map(grant => (
          <Link key={grant.id} to={`/app/grants/${grant.id}`} className="group block bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug">{grant.title}</h2>
              <span className={clsx('shrink-0 text-xs font-medium px-2 py-0.5 rounded-full', statusColors[grant.status] ?? statusColors.identified)}>
                {grant.status.charAt(0).toUpperCase() + grant.status.slice(1)}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{grant.description}</p>
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-1">{grant.funder_name}</div>
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
              {(grant.award_min ?? grant.award_max) && (
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3" aria-hidden />
                  {grant.award_min ? `$${grant.award_min.toLocaleString()}` : ''}{grant.award_max ? ` – $${grant.award_max.toLocaleString()}` : ''}
                </span>
              )}
              {grant.deadline_at && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" aria-hidden />
                  {new Date(grant.deadline_at).toLocaleDateString()}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
