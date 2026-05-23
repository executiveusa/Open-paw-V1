import { PawPrint, Heart, AlertCircle, Home, Search, DollarSign } from 'lucide-react';
import { mockStats, mockAnimals, mockTasks } from '../data/mock';
import { StatusBadge } from '../components/ui/Badge';
import { Link } from 'react-router-dom';

const statCards = [
  { label: 'Animals in Care', value: mockStats.animalsInCare, icon: PawPrint, color: 'text-orange-500', href: '/app/animals' },
  { label: 'Adoptable', value: mockStats.adoptable, icon: Heart, color: 'text-green-500', href: '/app/animals?status=adoptable' },
  { label: 'Medical Hold', value: mockStats.medicalHold, icon: AlertCircle, color: 'text-red-500', href: '/app/animals?status=medical_hold' },
  { label: 'Foster Placements', value: mockStats.fosterPlacements, icon: Home, color: 'text-blue-500', href: '/app/animals?status=in_foster' },
  { label: 'Open Lost/Found', value: mockStats.openLostFound, icon: Search, color: 'text-purple-500', href: '/app/lost-found' },
  { label: 'Grant Opportunities', value: mockStats.grantOpportunities, icon: DollarSign, color: 'text-yellow-500', href: '/app/grants' },
];

export function DashboardHome() {
  const urgentTasks = mockTasks.filter(t => t.status !== 'done' && t.status !== 'cancelled').slice(0, 3);
  const recentAnimals = mockAnimals.slice(0, 4);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Happy Paws Rescue — overview</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statCards.map(card => (
          <Link
            key={card.label}
            to={card.href}
            className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-sm transition-shadow group"
          >
            <card.icon className={`w-5 h-5 ${card.color} mb-3`} aria-hidden />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{card.label}</div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Recent Animals</h2>
            <Link to="/app/animals" className="text-xs text-orange-600 dark:text-orange-400 hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {recentAnimals.map(animal => (
              <Link
                key={animal.id}
                to={`/app/animals/${animal.id}`}
                className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:opacity-80 transition-opacity"
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{animal.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{animal.species}{animal.breed ? ` — ${animal.breed}` : ''}</div>
                </div>
                <StatusBadge status={animal.status} />
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Open Tasks</h2>
            <Link to="/app/tasks" className="text-xs text-orange-600 dark:text-orange-400 hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {urgentTasks.map(task => (
              <div key={task.id} className="flex items-start gap-3 py-2 border-b border-gray-50 dark:border-gray-800 last:border-0">
                <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${task.priority === 'urgent' ? 'bg-red-500' : task.priority === 'high' ? 'bg-orange-500' : 'bg-blue-500'}`} aria-hidden />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{task.title}</div>
                  {task.due_date && <div className="text-xs text-gray-500 dark:text-gray-400">Due: {task.due_date}</div>}
                </div>
              </div>
            ))}
            {urgentTasks.length === 0 && (
              <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-4">All caught up!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
