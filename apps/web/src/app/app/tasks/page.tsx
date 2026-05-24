import type { Metadata } from 'next';
import { CheckSquare } from 'lucide-react';
import { mockTasks } from '@/lib/api/mockClient';
import { clsx } from 'clsx';

export const metadata: Metadata = { title: 'Tasks' };

const priorityDot: Record<string, string> = {
  urgent: 'bg-red-500',
  high: 'bg-paw-500',
  medium: 'bg-brand-500',
  low: 'bg-gray-300 dark:bg-gray-600',
};

const statusLabel: Record<string, string> = {
  todo: 'To Do',
  in_progress: 'In Progress',
  done: 'Done',
  cancelled: 'Cancelled',
};

export default function TasksPage() {
  const open = mockTasks.filter((t) => t.status !== 'done' && t.status !== 'cancelled');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{open.length} open tasks</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {mockTasks.length > 0 ? (
          <div className="divide-y divide-gray-50 dark:divide-gray-800">
            {mockTasks.map((task) => (
              <div key={task.id} className="flex items-start gap-4 p-4">
                <CheckSquare className="w-4 h-4 text-gray-300 dark:text-gray-600 mt-0.5 shrink-0" aria-hidden />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className={clsx('w-2 h-2 rounded-full shrink-0', priorityDot[task.priority])} aria-hidden />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</div>
                  </div>
                  {task.description && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">{task.description}</div>
                  )}
                  {task.due_date && (
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Due: {task.due_date}</div>
                  )}
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{statusLabel[task.status]}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <CheckSquare className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" aria-hidden />
            <p className="text-sm font-medium text-gray-900 dark:text-white">All caught up</p>
          </div>
        )}
      </div>
    </div>
  );
}
