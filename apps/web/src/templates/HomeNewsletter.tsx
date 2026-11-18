export function HomeNewsletter() {
  return (
    <section className="bg-cream px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-display text-4xl font-normal text-ink md:text-6xl">
            Receba novidades
          </h2>
          <p className="max-w-xl font-body text-base leading-relaxed text-smoke md:text-xl">
            Lançamentos, rituais e cuidados com o incenso — sem spam.
          </p>
        </div>

        <form
          className="flex w-full max-w-xl flex-col gap-2 sm:flex-row sm:bg-white sm:p-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Seu e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="Seu e-mail"
            className="min-h-[56px] flex-1 border-0 bg-white px-4 font-body text-lg text-ink outline-none placeholder:text-smoke sm:bg-transparent"
          />
          <button
            type="submit"
            className="min-h-[56px] bg-ink px-8 font-body text-base font-semibold text-white"
          >
            Inscrever
          </button>
        </form>
      </div>
    </section>
  )
}
