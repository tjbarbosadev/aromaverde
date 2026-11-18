/** Placeholder de imagem (placehold.it → placehold.co). */
export function placeholder(
  width: number,
  height: number,
  label = '',
): string {
  const text = label ? `?text=${encodeURIComponent(label)}` : ''
  return `https://placehold.it/${width}x${height}${text}`
}
