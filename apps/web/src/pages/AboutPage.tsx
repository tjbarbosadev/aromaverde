import { Heading, Text } from '@aromaverde/ui'
import { siteConfig } from '../data/site'
import { Seo } from '../components/Seo'

export function AboutPage() {
  return (
    <>
      <Seo
        title="Nossa história"
        description="A Aroma Verde nasce do amor pelas ervas e pela conexão com a natureza."
        path="/sobre"
      />
      <article className="mx-auto max-w-2xl px-6 py-12 md:px-12 md:py-16">
        <Heading level={1} className="mb-8 text-4xl font-normal md:text-5xl">
          Nossa história
        </Heading>

        <div className="flex flex-col gap-6 font-body text-base leading-relaxed text-ink">
          <Text>
            A Aroma Verde nasce do amor pelas ervas, pelas plantas e pela conexão
            com a natureza. Um sentimento com raízes na história familiar — nas
            mulheres da família e no fazer artesanal também presente no trabalho
            do pai da fundadora.
          </Text>
          <Text>
            Ao longo dos anos, a conexão com incensos e rituais cresceu até o
            desejo de criar os próprios blends: mais artesanais, cuidadosos e
            ligados à essência das plantas. Buscou formação na área e segue em
            especialização — aprender e experimentar faz parte da construção.
          </Text>
          <Text>
            Os incensos são produzidos artesanalmente, um a um, à mão. Mais do
            que produzir, queremos proporcionar experiências através dos aromas:
            despertar sensações e transformar o cotidiano em momentos especiais.
          </Text>

          <Heading level={2} className="mt-4 text-3xl font-normal">
            O cuidado artesanal
          </Heading>
          <Text>
            Cada peça carrega características do trabalho manual. Pequenas
            variações de formato e acabamento fazem parte da identidade. Não
            queremos apenas mais um incenso — queremos algo com significado.
          </Text>

          <Heading level={2} className="mt-4 text-3xl font-normal">
            Nossa mensagem
          </Heading>
          <Text>
            Mais do que acender um incenso, é criar um momento. Um convite para
            respirar, sentir, desacelerar e se reconectar.
          </Text>

          <Text tone="smoke" size="sm" className="mt-4 border-t border-line pt-6">
            As propriedades descritas em nossos produtos são simbólicas,
            aromáticas e tradicionalmente associadas às plantas — não representam
            efeitos medicinais comprovados.
          </Text>

          <div className="mt-4 flex flex-col gap-2">
            <Text className="font-semibold">Contato</Text>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-ink underline underline-offset-4"
            >
              {siteConfig.contactEmail}
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-smoke underline underline-offset-4"
            >
              Instagram @aromaverde
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
