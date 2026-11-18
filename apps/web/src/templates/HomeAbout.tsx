import { aboutValues } from '../data/home'

export function HomeAbout() {
  return (
    <section className="bg-surface px-6 pb-16 md:px-10 md:pb-24" aria-labelledby="about-title">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 id="about-title" className="font-display text-4xl font-normal text-ink md:text-6xl">
            Sobre nós
          </h2>
          <p className="max-w-2xl font-body text-base leading-relaxed text-smoke md:text-lg">
            Mais de 250 blends artesanais de incenso, feitos com ervas e resinas
            para acolher, purificar e prosperar.
          </p>
        </div>

        <ul className="grid gap-10 md:grid-cols-3">
          {aboutValues.map((v) => (
            <li key={v.id} className="flex flex-col items-center gap-5 text-center">
              <div className="relative size-24">
                <img src={v.dot} alt="" aria-hidden className="size-full" />
                <img
                  src={v.icon}
                  alt=""
                  aria-hidden
                  className="absolute left-1/2 top-1/2 w-9 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h3 className="font-body text-xl font-bold text-ink">{v.title}</h3>
              <p className="max-w-xs font-body text-base leading-relaxed text-smoke">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
