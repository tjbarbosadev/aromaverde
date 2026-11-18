import { Package, ShieldCheck, Sparkles } from 'lucide-react'
import { Heading, Icon, Text } from '@aromaverde/ui'
import { aboutValues } from '../data/home'

const icons = {
  envio: Package,
  qualidade: Sparkles,
  compra: ShieldCheck,
} as const

export function HomeAbout() {
  return (
    <section
      className="bg-surface px-12 py-14 md:py-20"
      aria-labelledby="about-title"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 md:gap-14">
        <div className="flex flex-col items-center gap-2 text-center">
          <Heading
            level={2}
            id="about-title"
            className="text-4xl font-normal tracking-wide md:text-5xl"
          >
            Sobre nós
          </Heading>
          <Text tone="smoke" className="max-w-sm leading-relaxed">
            Mais de 250 blends artesanais de incenso, feitos com ervas e resinas
            para acolher, purificar e prosperar.
          </Text>
        </div>

        <ul className="grid w-full gap-10 md:grid-cols-3 md:gap-12">
          {aboutValues.map((v) => (
            <li
              key={v.id}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="inline-flex size-20 items-center justify-center rounded-full border border-dashed border-ink/30">
                <Icon icon={icons[v.id as keyof typeof icons]} size={28} />
              </span>
              <Heading level={3} className="font-body text-base font-bold tracking-wide">
                {v.title}
              </Heading>
              <Text tone="smoke" size="sm" className="max-w-[14rem] leading-relaxed">
                {v.text}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
