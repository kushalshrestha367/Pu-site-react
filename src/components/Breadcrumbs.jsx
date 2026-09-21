import { Link, useMatches } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Breadcrumbs() {
  const matches = useMatches();

  const matchedWithHandle = matches.filter((match) => Boolean(match.handle?.breadcrumb));
  const lastIndex = matchedWithHandle.length - 1;

  const crumbs = matchedWithHandle
    .filter((match, index) => index === lastIndex || !match.handle.skipInTrail)
    .map((match) => {
      const { breadcrumb, noLink } = match.handle;
      const label = typeof breadcrumb === 'function' ? breadcrumb(match.params) : breadcrumb;
      return { pathname: match.pathname, label, noLink: Boolean(noLink) };
    });

  // Nothing to show on the homepage
  if (crumbs.length <= 1) return null;

  return (
    <div className="-ml-5 mb-8 bg-slate-200 pl-5">
      <nav aria-label="Breadcrumb" className="overflow-x-auto px-5 py-3 md:px-8">
        <ol className="flex flex-nowrap items-center whitespace-nowrap text-[15px] text-pu-dark">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            const isFirst = index === 0;
            return (
              <li key={crumb.pathname} className="flex items-center">
                {index > 0 && (
                  <span aria-hidden className="mx-2.5 text-pu-dark/40">
                    /
                  </span>
                )}
                {isLast || crumb.noLink ? (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    className="flex items-center gap-1.5"
                  >
                    {isFirst && <Home size={17} aria-hidden />}
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.pathname}
                    className="flex items-center gap-1.5 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pu-red"
                  >
                    {isFirst && <Home size={17} aria-hidden />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}