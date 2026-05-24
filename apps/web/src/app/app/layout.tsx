import { AppShell } from '@/components/layout/AppShell';

export const metadata = {
  title: {
    default: 'Dashboard — Open Paw',
    template: '%s | Open Paw',
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
