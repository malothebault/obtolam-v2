import { useEffect, useState } from 'react'
import { getDiffInDays, getFormattedDate } from '@/utils/date'
import { motion, AnimatePresence } from 'framer-motion'

export function Outdate({ lastMod }: { lastMod: Date }) {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const diffDays = getDiffInDays(lastMod)
    if (diffDays > 30) {
      setIsShow(true)
    }
  }, [lastMod])

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className="flex justify-start text-sm p-4 rounded-lg bg-amber-300/10 border border-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span>
          Ce billet a été modifié pour la dernière fois le {getFormattedDate(lastMod)}. <br/>
          Certaines parties peuvent ne plus être d'actualité. Contactez moi si vous avez des questions !
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
