import type { Metadata } from 'next';
import { LoginForm } from '@/components/auth/LoginForm';
import { PawPrint } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Log in — Open Paw',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <PawPrint className="w-6 h-6 text-paw-500" aria-hidden />
            <span className="font-semibold text-gray-900 dark:text-white">Open Paw</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Sign in to your organization&apos;s workspace
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8">
          <div className="mb-6 px-3 py-2.5 rounded-lg bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-400 text-xs font-medium text-center">
            Demo mode — no real authentication
          </div>
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            ← Back to Open Paw
          </Link>
        </p>
      </div>
    </div>
  );
}
