import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, Calendar } from 'lucide-react';
import { mockGrants } from '../data/mock';

export function GrantDetailPage() {
  const { id } = useParams<{ id: string }>();
  const grant = mockGrants.find(g => g.id === id);

  if (!grant) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 dark:text-gray-400">Grant not found.</p>
        <Link to="/app/grants" className="mt-4 inline-block text-sm text-orange-600 dark:text-orange-400 hover:underline">Back to Grants</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/app/grants" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Back">
          <ArrowLeft className="w-4 h-4" aria-hidden />
        </Link>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">{grant.title}</h1>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 space-y-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">{grant.funder_name}</div>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{grant.description}</p>
        <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
          {(grant.award_min ?? grant.award_max) && (
            <span className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" aria-hidden />
              ${grant.award_min?.toLocaleString()} – ${grant.award_max?.toLocaleString()}
            </span>
          )}
          {grant.deadline_at && (
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden />
              Deadline: {new Date(grant.deadline_at).toLocaleDateString()}
            </span>
          )}
        </div>
        <button className="mt-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors">
          Start Application
        </button>
      </div>
    </div>
  );
}
