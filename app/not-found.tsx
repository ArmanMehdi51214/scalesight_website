import Link from 'next/link';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export default function NotFound() {
  return (
    <><SiteHeader/><main id="main-content" tabIndex={-1} className="content-page interior-page error-page"><div className="content-shell">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">This page isn’t available.</h1>
      <p className="mt-5 max-w-2xl text-lg text-[var(--text-secondary)]">
        The address may have changed, or the page may no longer be available.
      </p>
      <Link className="primary-button mt-8 inline-flex min-h-11 items-center" href="/">
        Return to ScaleSight
      </Link>
    </div></main><SiteFooter/></>
  );
}
