// Obtenir le temps relatif entre deux dates
export function getRelativeTime(startDate: Date, endDate = new Date()) {
  const diffSeconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000)
  if (diffSeconds < 0) {
    return null
  }
  const diffMinutes = Math.floor(diffSeconds / 60)
  if (diffMinutes < 10) {
    return "à l'instant"
  }
  if (diffMinutes < 60) {
    return `Il y a ${diffMinutes} minutes`
  }
  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) {
    return `Il y a ${diffHours} heures`
  }
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 10) {
    return `Il y a ${diffDays} jours`
  }
  return null
}

// Ajouter 0 avant un chiffre
function padZero(number: number, len = 2) {
  return number.toString().padStart(len, '0')
}

// Obtenir une date formatée, format : 1er janvier 2024, lundi
export function getFormattedDate(date: Date) {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  const week = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'][
    date.getDay()
  ]

  return `${week} ${day}/${month}/${year}`
}

// Obtenir une date et heure formatées, format : 1er janvier 2024 12:00
export function getFormattedDateTime(date: Date) {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  const hours = padZero(date.getHours())
  const minutes = padZero(date.getMinutes())

  return `${hours}:${minutes} le ${day}/${month}/${year}`
}

// Obtenir le nombre de jours entre deux dates
export function getDiffInDays(startDate: Date, endDate = new Date()) {
  return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 86400))
}

// Obtenir une date courte, format : 04-20
export function getShortDate(date: Date) {
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())

  return `${day}/${month}`
}

// Obtenir le nombre total de jours dans l'année de la date donnée
export function getDaysInYear(date: Date) {
  const year = date.getFullYear()
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366
  }
  return 365
}

// Obtenir la date de début de l'année de la date donnée
export function getStartOfYear(date: Date) {
  const year = date.getFullYear()
  return new Date(year, 0, 1)
}

/// Obtenir la date de début de la journée de la date donnée
export function getStartOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
