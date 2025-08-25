export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300">
      <div className="container mx-auto px-4 text-center py-14 sm:py-20">
        {/* Eyebrow label */}
        <p className="text-sm uppercase tracking-widest text-sky-700/80 font-semibold">
          Polyglot App
        </p>

        {/* Main headline */}
        <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-extrabold text-sky-900">
          Create and edit passages fast
        </h1>

        {/* Subcopy */}
        <p className="mt-4 text-base sm:text-lg text-sky-800/80 max-w-2xl mx-auto leading-relaxed">
          Learn and practice languages with ease. Focus on writing, refining,
          and managing your passages — all in one place.
        </p>
      </div>
    </section>
  );
}
