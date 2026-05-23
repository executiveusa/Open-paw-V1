import { mockLostFound } from '../data/mock';
import { clsx } from 'clsx';

const matchColors: Record<string, string> = {
  open: 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400',
  potential_match: 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400',
  reunited: 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400',
  closed: 'bg-gray-100 dark:bg-gray-800 text-gray-500',
};

export function LostFoundPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Lost & Found</h1>
      <div className="space-y-3">
        {mockLostFound.map(report => (
          <div key={report.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{report.report_type}</span>
                  <span className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', matchColors[report.match_status])}>
                    {report.match_status.replace('_', ' ')}
                  </span>
                </div>
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white capitalize">{report.species}{report.breed ? ` — ${report.breed}` : ''}</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{report.description}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{report.location} &mdash; {report.incident_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
