import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-neutral-500">This page may have been moved or renamed.</p>
      <Link href="/" className="mt-6 inline-block text-accent underline">
        Back to the docs home
      </Link>
    </main>
  );
}
