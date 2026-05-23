import { mockStats } from '../data/mock';

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(mockStats).map(([key, value]) => (
          <div key={key} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
