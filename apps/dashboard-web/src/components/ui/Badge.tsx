import { clsx } from 'clsx';
import type { AnimalStatus } from '../../types';

const statusConfig: Record<AnimalStatus, { label: string; classes: string }> = {
  intake: { label: 'Intake', classes: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400' },
  quarantine: { label: 'Quarantine', classes: 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400' },
  medical_hold: { label: 'Medical Hold', classes: 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400' },
  behavior_hold: { label: 'Behavior Hold', classes: 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400' },
  foster_needed: { label: 'Foster Needed', classes: 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400' },
  in_foster: { label: 'In Foster', classes: 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400' },
  adoptable: { label: 'Adoptable', classes: 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400' },
  adoption_pending: { label: 'Adoption Pending', classes: 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400' },
  adopted: { label: 'Adopted', classes: 'bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-300' },
  transferred: { label: 'Transferred', classes: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400' },
  returned: { label: 'Returned', classes: 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400' },
  lost: { label: 'Lost', classes: 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400' },
  found: { label: 'Found', classes: 'bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400' },
  deceased: { label: 'Deceased', classes: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400' },
};

export function StatusBadge({ status }: { status: AnimalStatus }) {
  const config = statusConfig[status] ?? { label: status, classes: 'bg-gray-100 text-gray-600' };
  return (
    <span className={clsx('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium', config.classes)}>
      {config.label}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: string }) {
  const map: Record<string, string> = {
    low: 'bg-gray-100 dark:bg-gray-800 text-gray-500',
    medium: 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
    high: 'bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400',
    urgent: 'bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400',
  };
  return (
    <span className={clsx('inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize', map[priority] ?? map.medium)}>
      {priority}
    </span>
  );
}
