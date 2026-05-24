import type { Metadata } from 'next';
import { Monitor, Server, Github, Terminal } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';

export const metadata: Metadata = {
  title: 'Download Open Paw — Free Animal Welfare Software',
  description: 'Download Open Paw for free. Desktop app, self-hosted, or build from source.',
};

export default function DownloadPage() {
  return (
    <PublicLayout>
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Download Open Paw
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Free, open-source, and built for real rescue teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Desktop app */}
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <Monitor className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-4" aria-hidden />
              <div className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400 mb-4">
                Coming Soon
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Desktop App</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                One-click installer for Mac, Windows, and Linux. Local encrypted database. No internet
                required to run.
              </p>
              <button
                disabled
                className="w-full py-2.5 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>

            {/* Self-host */}
            <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <Server className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-4" aria-hidden />
              <div className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400 mb-4">
                Coming Soon
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Self-Hosted Server
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                Docker Compose deployment for your shelter server or cloud instance. Multiple staff
                members, one installation.
              </p>
              <button
                disabled
                className="w-full py-2.5 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>

          {/* GitHub source */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 mb-16">
            <div className="flex items-start gap-5">
              <Github className="w-8 h-8 text-gray-700 dark:text-gray-300 shrink-0 mt-1" aria-hidden />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  GitHub Source
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  The full source code is available now. Clone the repo, follow the developer setup
                  instructions, and run Open Paw locally.
                </p>
                <a
                  href="https://github.com/executiveusa/Open-paw-V1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-4 h-4" aria-hidden />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Developer setup */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Developer Setup</h2>
            <div className="space-y-4">
              {[
                { label: 'Clone the repository', command: 'git clone https://github.com/executiveusa/Open-paw-V1.git' },
                { label: 'Install dependencies', command: 'pnpm install' },
                { label: 'Start the web app', command: 'cd apps/web && pnpm dev' },
              ].map((step, i) => (
                <div key={step.label} className="flex gap-4 items-start">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      {step.label}
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 dark:bg-gray-800 font-mono text-xs text-gray-100">
                      <Terminal className="w-3.5 h-3.5 text-gray-500 shrink-0" aria-hidden />
                      {step.command}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Requires Node.js 20+, pnpm, and Rust (for the backend API).{' '}
              <a
                href="https://github.com/executiveusa/Open-paw-V1/blob/main/docs/LOCAL_DEVELOPMENT.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:underline"
              >
                Full setup guide →
              </a>
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
