import type { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function EmptyState({ icon: Icon, title, description }: Props) {
  return (
    <div className="py-20 text-center">
      <Icon className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" aria-hidden />
      <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">{title}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs mx-auto">{description}</p>
    </div>
  );
}
