import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, DollarSign, Calendar, FileText, Calculator, BarChart2, Users, BookOpen } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';

export const metadata: Metadata = {
  title: 'Funding Radar — Find Grants for Animal Welfare',
  description: 'Find grants, check eligibility, draft applications, build budgets, track deadlines, and generate impact reports for your animal welfare organization.',
};

const sections = [
  {
    icon: DollarSign,
    title: 'Grant Finder',
    desc: 'Search a curated database of foundations and funders focused on animal welfare. Filter by geographic area, award size, focus areas, and application deadlines. Add private funders you\'ve discovered to your organization\'s database.',
  },
  {
    icon: CheckCircle,
    title: 'Eligibility Checker',
    desc: 'Before spending hours on an application, confirm your organization qualifies. Check 501(c)(3) status requirements, service area restrictions, program type matches, and annual budget thresholds against your org profile.',
  },
  {
    icon: Calendar,
    title: 'Grant Calendar',
    desc: 'Track application deadlines in one view. Get reminders at 30 days, 14 days, and 7 days before each deadline. Never miss a grant because it snuck up on you.',
  },
  {
    icon: FileText,
    title: 'AI Draft Assistant',
    desc: 'Generate a first-draft narrative based on your org profile, program data, and the funder\'s focus areas. Every draft requires human review and approval before use. The AI gives you a starting point, not a finished product.',
  },
  {
    icon: Calculator,
    title: 'Budget Builder',
    desc: 'Build program budgets for grant applications using your actual cost data. Personnel, supplies, veterinary costs, administrative overhead — structured by the categories most funders request.',
  },
  {
    icon: BarChart2,
    title: 'Impact Reports',
    desc: 'Generate outcome reports from your program data: animals served, adoption rates, average length of stay, medical procedures completed, reunifications achieved. Give funders the numbers they need.',
  },
  {
    icon: Users,
    title: 'Funder CRM',
    desc: 'Track your relationships with funders — contacts, communication history, past applications, and outcomes. Build the kind of long-term funder relationships that generate repeat awards.',
  },
  {
    icon: BookOpen,
    title: 'Resource Directory',
    desc: 'A curated collection of grant-writing guides, sample budgets, impact measurement frameworks, and funder research resources for animal welfare organizations.',
  },
];

export default function FundingPage() {
  return (
    <PublicLayout>
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 text-xs font-medium mb-6">
              First-class feature
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Funding Radar
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Find grants, check eligibility, draft applications, build budgets, track deadlines, and
              generate impact reports. Animal welfare organizations leave money on the table because
              grant management is disorganized. Funding Radar fixes that.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {sections.map((s) => (
              <div key={s.title} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {s.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guardrails */}
          <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8 mb-16">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              What Funding Radar doesn&apos;t do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Auto-submit', desc: 'Applications are never submitted automatically. Every submission is a deliberate human action.' },
                { title: 'Guarantee awards', desc: 'Funding Radar improves your process. It cannot guarantee grant outcomes.' },
                { title: 'Generate without data', desc: 'AI drafts require your real program data. Thin data produces thin drafts.' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-base hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
            >
              Download Open Paw — Free
            </Link>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Funding Radar is included in the base product. No extra cost.
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
