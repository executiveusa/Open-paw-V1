import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, BookOpen, Shield, Cpu, Code } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';

export const metadata: Metadata = {
  title: 'Docs — Open Paw',
  description: 'Documentation for Open Paw animal welfare software.',
};

const docLinks = [
  {
    icon: FileText,
    title: 'Architecture',
    desc: 'System design, data model, and technology choices.',
    href: 'https://github.com/executiveusa/Open-paw-V1/blob/main/docs/ARCHITECTURE.md',
  },
  {
    icon: Code,
    title: 'Local Development',
    desc: 'How to set up a local development environment.',
    href: 'https://github.com/executiveusa/Open-paw-V1/blob/main/docs/LOCAL_DEVELOPMENT.md',
  },
  {
    icon: Cpu,
    title: 'API Reference',
    desc: 'REST API endpoints, request/response shapes, and authentication.',
    href: 'https://github.com/executiveusa/Open-paw-V1/blob/main/docs/API.md',
  },
  {
    icon: Shield,
    title: 'Security Model',
    desc: 'Role-based access, audit logs, and data handling.',
    href: 'https://github.com/executiveusa/Open-paw-V1/blob/main/docs/SECURITY.md',
  },
  {
    icon: FileText,
    title: 'Funding Radar',
    desc: 'Grant management module documentation.',
    href: 'https://github.com/executiveusa/Open-paw-V1/blob/main/docs/FUNDING_RADAR.md',
  },
  {
    icon: BookOpen,
    title: 'Deployment',
    desc: 'Self-hosting and deployment configuration.',
    href: 'https://github.com/executiveusa/Open-paw-V1/blob/main/docs/DEPLOYMENT.md',
  },
];

export default function DocsPage() {
  return (
    <PublicLayout>
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Documentation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technical documentation lives in the GitHub repository. The links below go directly to
              the relevant docs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {docLinks.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <doc.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" aria-hidden />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {doc.title}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{doc.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Contributing to docs
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Documentation improvements are some of the most valuable contributions to an
              open-source project. If you find something unclear or missing, pull requests are
              welcome.
            </p>
            <a
              href="https://github.com/executiveusa/Open-paw-V1/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline"
            >
              Contribution guide →
            </a>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
