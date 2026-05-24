import type { Metadata } from 'next';
import { mockLostFound } from '@/lib/api/mockClient';
import { clsx } from 'clsx';

export const metadata: Metadata = { title: 'Lost & Found' };

function MatchBadge({ status }: { status: string }) {
  return (
    <span className={clsx(
      'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
      status === 'open' && 'bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400',
      status === 'potential_match' && 'bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400',
      status === 'reunited' && 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400',
      status === 'closed' && 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400',
    )}>
      {status === 'potential_match' ? 'Potential Match' : status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function LostFoundPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Lost & Found</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {mockLostFound.filter(r => r.match_status === 'open').length} open reports
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {mockLostFound.map((report) => (
            <div key={report.id} className="p-4 flex items-start gap-4">
              <div className={clsx(
                'shrink-0 mt-0.5 text-xs font-semibold px-2 py-1 rounded-lg uppercase tracking-wide',
                report.report_type === 'lost'
                  ? 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400'
                  : 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400'
              )}>
                {report.report_type}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                  {report.species}{report.breed ? ` — ${report.breed}` : ''}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{report.description}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {report.location} · {report.incident_date}
                </div>
              </div>
              <MatchBadge status={report.match_status} />
            </div>
          ))}
        </div>
        {mockLostFound.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">No reports</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Lost and found reports will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
