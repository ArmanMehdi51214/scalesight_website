import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="content-shell min-h-[60vh] px-4 py-20 sm:px-6">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">This page isn’t available.</h1>
      <p className="mt-5 max-w-2xl text-lg text-[var(--text-secondary)]">
        The address may have changed, or the page may no longer be available.
      </p>
      <Link className="primary-button mt-8 inline-flex min-h-11 items-center" href="/">
        Return to ScaleSight
      </Link>
    </main>
  );
}
