import { PawPrint } from 'lucide-react';

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-8">
          <PawPrint className="w-6 h-6 text-orange-500" aria-hidden />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">Open Paw</span>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Sign in</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Access your organization dashboard.</p>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); window.location.href = '/app'; }}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                id="email"
                type="email"
                defaultValue="demo@happypaws.example"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input
                id="password"
                type="password"
                defaultValue="password"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
            >
              Sign in
            </button>
          </form>
          <p className="mt-4 text-xs text-center text-gray-400 dark:text-gray-500">
            Demo mode — use any credentials
          </p>
        </div>
      </div>
    </div>
  );
}
