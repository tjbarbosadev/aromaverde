/**
 * Placeholder de imagem.
 * placehold.it responde com CORP restrito e quebra no Storybook/Vite —
 * usamos placehold.co (sucessor).
 */
export function placeholder(
  width: number,
  height: number,
  label = '',
): string {
  const text = label ? `?text=${encodeURIComponent(label)}` : ''
  return `https://placehold.co/${width}x${height}/e8ebe4/2d4a3e${text}`
}
