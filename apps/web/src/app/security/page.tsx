import type { Metadata } from 'next';
import { HardDrive, Key, FileText, Shield, AlertTriangle, Ban } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';

export const metadata: Metadata = {
  title: 'Security & Trust — Open Paw',
  description: 'How Open Paw protects your animal records, medical data, and organizational information.',
};

const principles = [
  {
    icon: HardDrive,
    title: 'Local-first by default',
    desc: 'Your data starts on your device. SQLite database, local filesystem. No cloud account required to run Open Paw. Cloud sync is an opt-in feature, not a requirement.',
  },
  {
    icon: Shield,
    title: 'No mandatory cloud',
    desc: 'You can run Open Paw indefinitely without creating an account with any cloud provider. Your data stays under your control, on hardware you own or control.',
  },
  {
    icon: Key,
    title: 'Role-based access control',
    desc: 'Volunteers, coordinators, veterinarians, and administrators each have distinct permission levels. Sensitive medical records and financial data are only visible to appropriate roles.',
  },
  {
    icon: FileText,
    title: 'Audit logs',
    desc: 'Every write operation is logged with the user, timestamp, and record affected. You can see who changed an animal\'s status, who updated a medical record, and when.',
  },
  {
    icon: AlertTriangle,
    title: 'AI approval gates',
    desc: 'AI-assisted features (grant drafts, adoption bios) require explicit human approval before the output is used. No AI action is automatic or irreversible.',
  },
  {
    icon: Ban,
    title: 'No automated medical diagnosis',
    desc: 'Open Paw does not diagnose medical conditions. Medical records are logged, not interpreted by AI. Diagnosis remains with licensed veterinary professionals.',
  },
];

export default function SecurityPage() {
  return (
    <PublicLayout>
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Security &amp; Trust
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Animal welfare data is sensitive. Adoption applicant information, medical records, donor
              details, and organizational finances deserve proper protection. Here is how Open Paw
              handles that responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {principles.map((p) => (
              <div key={p.title} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" aria-hidden />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {p.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8 mb-16">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              What is not in V1
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Open Paw V1 is honest about what it does not yet include:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {[
                'Encrypted at-rest storage (planned for V2)',
                'End-to-end encrypted cloud sync (planned)',
                'Plugin marketplace (not in scope for V1)',
                'Public-input privileged actions (blocked by design)',
                'Automated submission of any external request (blocked by design)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gray-400 dark:text-gray-600 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Open source means auditable
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              The source code for Open Paw is publicly available. Any developer, security researcher,
              or organization can read the code, verify the security claims, and audit the data
              handling. There is no "trust us" — there is only the code.
            </p>
            <a
              href="https://github.com/executiveusa/Open-paw-V1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 dark:text-white hover:underline"
            >
              Read the source code on GitHub →
            </a>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
