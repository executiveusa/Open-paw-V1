import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-4"
            >
              <PawPrint className="w-5 h-5 text-paw-500" aria-hidden />
              <span>Open Paw</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Free, open-source, local-first software for animal rescues,
              shelters, and welfare teams.
            </p>
            <p className="mt-4 text-xs text-gray-400 dark:text-gray-600">
              License: AGPL-3.0 — Built for the people doing the work.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="/download"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="/funding"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Funding Radar
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Community
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://github.com/executiveusa/Open-paw-V1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Field Notes
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/executiveusa/Open-paw-V1/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Report a Bug
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/executiveusa/Open-paw-V1/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
