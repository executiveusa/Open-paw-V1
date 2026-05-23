import { mockTasks, mockAnimals } from '../data/mock';
import { PriorityBadge } from '../components/ui/Badge';
import { CheckCircle, Circle } from 'lucide-react';
import { useState } from 'react';
import type { Task } from '../types';

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  function toggleTask(id: string) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: t.status === 'done' ? 'todo' : 'done' } : t));
  }

  const open = tasks.filter(t => t.status !== 'done' && t.status !== 'cancelled');
  const done = tasks.filter(t => t.status === 'done');

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{open.length} open, {done.length} done</p>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-50 dark:divide-gray-800">
        {open.map(task => {
          const animal = task.animal_id ? mockAnimals.find(a => a.id === task.animal_id) : null;
          return (
            <div key={task.id} className="flex items-start gap-3 p-4">
              <button onClick={() => toggleTask(task.id)} className="mt-0.5 shrink-0 text-gray-300 dark:text-gray-600 hover:text-green-500 transition-colors" aria-label="Mark complete">
                <Circle className="w-4 h-4" aria-hidden />
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</span>
                  <PriorityBadge priority={task.priority} />
                </div>
                {task.description && <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{task.description}</p>}
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400 dark:text-gray-500">
                  {animal && <span>{animal.name}</span>}
                  {task.due_date && <span>Due: {task.due_date}</span>}
                </div>
              </div>
            </div>
          );
        })}
        {open.length === 0 && (
          <div className="p-8 text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" aria-hidden />
            <p className="text-sm text-gray-500 dark:text-gray-400">All tasks complete!</p>
          </div>
        )}
      </div>
    </div>
  );
}
