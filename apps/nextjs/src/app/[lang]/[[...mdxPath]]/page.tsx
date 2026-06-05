import { generateStaticParamsFor, importPage } from 'nextra/pages';
import type { FC } from 'react';
import { useMDXComponents as getMDXComponents } from '../../../../mdx-components';
import { DocsPageFeedback } from '@/components/docs-page-feedback';
import { buildPageUrl } from '@/lib/page-url';

export const generateStaticParams = generateStaticParamsFor('mdxPath', 'lang');

type PageProps = Readonly<{
  params: Promise<{
    mdxPath?: string[];
    lang: string;
  }>;
}>;

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath, params.lang);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

const Page: FC<PageProps> = async (props) => {
  const params = await props.params;
  const result = await importPage(params.mdxPath, params.lang);
  const { default: MDXContent, toc, metadata, sourceCode } = result;
  const pageUrl = buildPageUrl(params.lang, params.mdxPath);

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
      <DocsPageFeedback
        pageUrl={pageUrl}
        pageTitle={metadata.title}
        locale={params.lang}
      />
    </Wrapper>
  );
};

export default Page;
