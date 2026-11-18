import type { IntentionId } from '../../domain/catalog/types'

export type Intention = {
  id: IntentionId
  label: string
  description: string
}

export const intentions: Intention[] = [
  {
    id: 'acolher',
    label: 'Acolher',
    description: 'Alegria, serenidade e abertura para o momento.',
  },
  {
    id: 'purificar',
    label: 'Purificar',
    description: 'Renovação simbólica e limpeza do ambiente.',
  },
  {
    id: 'prosperidade',
    label: 'Prosperar',
    description: 'Abundância, confiança e bons caminhos.',
  },
  {
    id: 'conectar',
    label: 'Conectar',
    description: 'Presença, natureza e intenção interior.',
  },
]
