/**
 * Склонение слов по числам (русский язык)
 * plural(1, ['год', 'года', 'лет']) → 'год'
 * plural(2, ['год', 'года', 'лет']) → 'года'
 * plural(5, ['год', 'года', 'лет']) → 'лет'
 */
export function plural(n: number, forms: [string, string, string]): string {
  const abs = Math.abs(n)
  const mod10 = abs % 10
  const mod100 = abs % 100

  if (mod100 >= 11 && mod100 <= 19) {
    return forms[2]
  }

  if (mod10 === 1) {
    return forms[0]
  }

  if (mod10 >= 2 && mod10 <= 4) {
    return forms[1]
  }

  return forms[2]
}

export function usePlural() {
  return { plural }
}
