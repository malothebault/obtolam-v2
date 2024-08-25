import { useLayoutEffect, useState } from 'react'
import { footer } from '@/config.json'
import { getDiffInDays } from '@/utils/date'

export function RunningDays() {
  const [days, setDays] = useState(0)

  useLayoutEffect(() => {
    const diffDays = getDiffInDays(new Date(footer.startTime))
    setDays(diffDays)
  }, [])

  if (days < 0) {
    return <span>Oups! Le site web n'est pas encore publié</span>
  }

  return <span>Le site fonctionne depuis {days} jours 🥳</span>
}
