'use client';

import { useState } from 'react';
import { CircleAlert, Pencil, ThumbsDown, ThumbsUp } from 'lucide-react';
import {
  openHelpfulFeedbackForm,
  openRaiseIssueForm,
  openSuggestEditForm,
} from '@/lib/encatch';
import { getDocsFeedbackTranslations } from '@/lib/translations';

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const pillClass = (active = false) =>
  cn(
    'x:inline-flex x:cursor-pointer x:items-center x:gap-1.5 x:whitespace-nowrap x:rounded-full x:border x:px-3 x:py-1.5 x:text-sm x:font-normal x:leading-none x:shadow-none x:transition-colors',
    'nextra-border',
    'x:bg-white x:text-gray-900',
    'x:dark:bg-neutral-900 x:dark:text-gray-100',
    'x:hover:bg-gray-100 x:dark:hover:bg-neutral-800',
    'x:focus-visible:nextra-focus',
    active &&
      'x:bg-gray-100 x:border-gray-300 x:dark:bg-neutral-800 x:dark:border-neutral-600',
  );

const iconClass = 'x:size-4 x:shrink-0';

export interface DocsPageFeedbackProps {
  pageUrl: string;
  pageTitle: string;
  locale: string;
}

export function DocsPageFeedback({
  pageUrl,
  pageTitle: _pageTitle,
  locale,
}: DocsPageFeedbackProps) {
  const t = getDocsFeedbackTranslations(locale);
  const [vote, setVote] = useState<'yes' | 'no' | null>(null);

  const handleVote = (next: 'yes' | 'no') => {
    const newVote = vote === next ? null : next;
    setVote(newVote);
    if (newVote) {
      openHelpfulFeedbackForm(pageUrl, newVote, locale);
    }
  };

  return (
    <div className="x:mt-8 x:border-t x:border-gray-200 x:pt-6 x:not-prose x:dark:border-neutral-800">
      <div className="x:flex x:flex-wrap x:items-center x:justify-between x:gap-3">
        <div className="x:flex x:flex-wrap x:items-center x:gap-3">
          <p className="x:text-sm x:text-gray-600 x:dark:text-gray-400">
            {t.helpfulQuestion}
          </p>
          <div className="x:flex x:flex-wrap x:items-center x:gap-2">
            <button
              type="button"
              onClick={() => handleVote('yes')}
              aria-pressed={vote === 'yes'}
              className={pillClass(vote === 'yes')}
            >
              <ThumbsUp className={iconClass} strokeWidth={1.5} />
              <span>{t.yes}</span>
            </button>
            <button
              type="button"
              onClick={() => handleVote('no')}
              aria-pressed={vote === 'no'}
              className={pillClass(vote === 'no')}
            >
              <ThumbsDown className={iconClass} strokeWidth={1.5} />
              <span>{t.no}</span>
            </button>
          </div>
        </div>
        <div className="x:flex x:flex-wrap x:items-center x:gap-2">
          <button
            type="button"
            onClick={() => openSuggestEditForm(pageUrl, locale)}
            className={pillClass()}
          >
            <Pencil className={iconClass} strokeWidth={1.5} />
            <span>{t.suggestEdits}</span>
          </button>
          <button
            type="button"
            onClick={() => openRaiseIssueForm(pageUrl, locale)}
            className={pillClass()}
          >
            <CircleAlert className={iconClass} strokeWidth={1.5} />
            <span>{t.raiseIssue}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
