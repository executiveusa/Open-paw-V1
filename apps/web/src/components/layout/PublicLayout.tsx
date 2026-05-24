import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
