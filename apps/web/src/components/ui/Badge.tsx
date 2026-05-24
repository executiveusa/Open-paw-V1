import { clsx } from 'clsx';
import type { AnimalStatus } from '@/lib/api/types';

const statusStyles: Record<AnimalStatus, string> = {
  intake: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
  quarantine: 'bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400',
  medical_hold: 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400',
  behavior_hold: 'bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400',
  foster_needed: 'bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400',
  in_foster: 'bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400',
  adoptable: 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400',
  adoption_pending: 'bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400',
  adopted: 'bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-300',
  transferred: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
  returned: 'bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400',
  lost: 'bg-red-200 dark:bg-red-900/50 text-red-800 dark:text-red-300',
  found: 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400',
  deceased: 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-500',
};

const statusLabels: Record<AnimalStatus, string> = {
  intake: 'Intake',
  quarantine: 'Quarantine',
  medical_hold: 'Medical Hold',
  behavior_hold: 'Behavior Hold',
  foster_needed: 'Foster Needed',
  in_foster: 'In Foster',
  adoptable: 'Adoptable',
  adoption_pending: 'Adoption Pending',
  adopted: 'Adopted',
  transferred: 'Transferred',
  returned: 'Returned',
  lost: 'Lost',
  found: 'Found',
  deceased: 'Deceased',
};

export function StatusBadge({ status }: { status: AnimalStatus }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap',
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}

export function GrantStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    identified: 'bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400',
    researching: 'bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400',
    drafting: 'bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400',
    submitted: 'bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400',
    awarded: 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400',
    declined: 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400',
    withdrawn: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
  };
  const labels: Record<string, string> = {
    identified: 'Identified',
    researching: 'Researching',
    drafting: 'Drafting',
    submitted: 'Submitted',
    awarded: 'Awarded',
    declined: 'Declined',
    withdrawn: 'Withdrawn',
  };
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap',
        styles[status] ?? styles.identified
      )}
    >
      {labels[status] ?? status}
    </span>
  );
}
