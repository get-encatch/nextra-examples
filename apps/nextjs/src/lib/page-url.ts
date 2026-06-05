import { docsRoute } from './shared';

export function buildPageUrl(lang: string, mdxPath?: string[]): string {
  const segments = mdxPath?.filter(Boolean) ?? [];
  const docsSegments = segments[0] === 'docs' ? segments.slice(1) : segments;
  const path =
    docsSegments.length > 0
      ? `${docsRoute}/${docsSegments.join('/')}`
      : docsRoute;
  return lang === 'en' ? path : `/${lang}${path}`;
}
