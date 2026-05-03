import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#05070c] px-4 py-20 text-center text-white">
      <section className="max-w-xl">
        <p className="font-mono text-sm uppercase text-amber-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold">This signal is not on the map.</h1>
        <p className="mt-5 leading-8 text-slate-300">
          The page you requested is not available. Return home to reconnect with the Digital Energy Media framework.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-cyan-300 px-5 font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
