import { Button, Heading, Input, Text } from '@aromaverde/ui'

export function HomeNewsletter() {
  return (
    <section
      className="bg-blush px-12 py-14 md:py-20"
      aria-labelledby="newsletter-title"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <Heading
            level={2}
            id="newsletter-title"
            className="text-4xl font-normal md:text-5xl"
          >
            Receba novidades
          </Heading>
          <Text tone="smoke" size="lg" className="max-w-xl leading-relaxed">
            Lançamentos, rituais e cuidados com o incenso — sem spam.
          </Text>
        </div>

        <form
          className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-end sm:gap-2 sm:bg-white sm:p-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-1 sm:[&_label]:sr-only">
            <Input
              id="newsletter-email"
              label="Seu e-mail"
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="min-h-[56px] rounded-none border-0 bg-white px-4 text-lg sm:bg-transparent"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="min-h-[56px] rounded-none px-8"
          >
            Inscrever
          </Button>
        </form>
      </div>
    </section>
  )
}
