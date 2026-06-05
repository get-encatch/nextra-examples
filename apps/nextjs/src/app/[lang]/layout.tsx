import type { Metadata } from 'next';
import { Footer, LastUpdated, Layout, LocaleSwitch, Navbar } from 'nextra-theme-docs';
import { Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import type { ReactNode } from 'react';
import { EncatchInit } from '@/lib/encatch';
import { appName, gitConfig } from '@/lib/shared';
import { getLayoutTranslations } from '@/lib/translations';
import 'nextra-theme-docs/style.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: appName,
  },
  description:
    'Sample Nextra docs site with Encatch page feedback in the footer.',
};

type LayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>;

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const t = getLayoutTranslations(lang);
  const pageMap = await getPageMap(`/${lang}`);

  const navbar = (
    <Navbar
      logo={<b>{appName}</b>}
      projectLink={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
    >
      <LocaleSwitch lite />
    </Navbar>
  );

  const footer = <Footer>{t.footer}</Footer>;

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <EncatchInit locale={lang} />
        <Layout
          navbar={navbar}
          footer={footer}
          docsRepositoryBase={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/apps/nextjs/src/content`}
          editLink="Edit this page on GitHub"
          lastUpdated={<LastUpdated locale={lang}>Last updated on</LastUpdated>}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'es', name: 'Español' },
          ]}
          search={<Search placeholder={t.searchPlaceholder} />}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
