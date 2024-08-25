import { author, site } from '@/config.json'
import { getFormattedDateTime } from '@/utils/date'
import { AnimatedSignature } from '../AnimatedSignature'
import { useEffect, useState } from 'react'
import { toast } from "react-toastify";

function getPostUrl(slug: string) {
  return new URL(slug, site.url).href
}

export function PostCopyright({
  title,
  slug,
  lastMod,
}: {
  title: string
  slug: string
  lastMod: Date
}) {
  const [lastModStr, setLastModStr] = useState('')
  const url = getPostUrl(slug)

  function handleCopyUrl() {
    navigator.clipboard.writeText(url)
    toast.success("Lien vers l'article copié !")
  }

  useEffect(() => {
    setLastModStr(getFormattedDateTime(lastMod))
  }, [lastMod])

  return (
    <section className="text-xs leading-loose text-secondary">
      <p>Titre : {title}</p>
      <p>Auteur : {author.name}</p>
      <p>
        <span>Lien URL ：{url}</span>
        <span role="button" className="cursor-pointer select-none" onClick={handleCopyUrl}>
          [Copier]
        </span>
      </p>
      <p>Dernière mise à jour : {lastModStr}</p>
      <hr className="my-3 border-primary" />
      <div>
        <div className="float-right ml-4 my-2">
          <AnimatedSignature />
        </div>
        <p>
        Pour toute reproduction commerciale, veuillez contacter le webmaster pour obtenir une autorisation. Pour toute reproduction non commerciale, veuillez indiquer la source de cet article et un lien vers l'article. Vous êtes libre de reproduire et de distribuer l'œuvre sous n'importe quelle forme et dans n'importe quel média, de la modifier et de la créer, à condition d'utiliser le même accord de licence pour la distribution d'œuvres dérivées.
          <br />
          Cet article utilise une licence&nbsp;
          <a
            className="hover:underline hover:text-accent underline-offset-2"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>
        </p>
      </div>
    </section>
  )
}
