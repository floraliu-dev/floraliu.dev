/* When a page last changed, for the sitemap's <lastmod>.

   Taken from git rather than the build clock: every build would otherwise
   claim every page changed today, and search engines learn to ignore a
   lastmod that is always "now". The deploy workflow checks out full history
   (fetch-depth: 0) so this sees real commit dates; without history, or
   outside a repository, it returns undefined and the sitemap omits the tag. */
import { execFileSync } from 'node:child_process';

/* Sitemaps take a plain date, but Google's structured-data validator rejects a
   bare date in schema.org dateCreated/dateModified/datePublished and asks for
   a full datetime with a timezone. `withTime` returns strict ISO 8601
   (2026-11-02T21:04:10+08:00) for JSON-LD; the default stays YYYY-MM-DD. */
const fmt = (withTime: boolean) => (withTime ? '--format=%cI' : '--format=%cs');

/** ISO date (YYYY-MM-DD, or full datetime with `withTime`) of the newest commit touching any of `files`. */
export function lastModified(files: string[], withTime = false): string | undefined {
  try {
    const out = execFileSync('git', ['log', '-1', fmt(withTime), '--', ...files], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}

/** ISO date (YYYY-MM-DD, or full datetime with `withTime`) of the oldest commit touching any of `files`. */
export function firstCommitted(files: string[], withTime = false): string | undefined {
  try {
    const out = execFileSync('git', ['log', '--reverse', fmt(withTime), '--', ...files], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    return out.split('\n')[0].trim() || undefined;
  } catch {
    return undefined;
  }
}
