import type { Metadata } from 'next';
import { mockGrants } from '@/lib/api/mockClient';
import { GrantStatusBadge } from '@/components/ui/Badge';

export const metadata: Metadata = { title: 'Funding Radar' };

function formatCurrency(n: number | null) {
  if (n == null) return '—';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

export default function FundingDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Funding Radar</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {mockGrants.length} grant opportunities tracked
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {mockGrants.map((grant) => (
            <div key={grant.id} className="p-5 flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{grant.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{grant.funder_name}</div>
                {grant.description && (
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{grant.description}</div>
                )}
                <div className="flex items-center gap-4 mt-2">
                  {(grant.award_min || grant.award_max) && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatCurrency(grant.award_min)} – {formatCurrency(grant.award_max)}
                    </span>
                  )}
                  {grant.deadline_at && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Deadline: {grant.deadline_at}
                    </span>
                  )}
                </div>
              </div>
              <GrantStatusBadge status={grant.status} />
            </div>
          ))}
        </div>
        {mockGrants.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">No grants tracked</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Add your first grant opportunity to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
