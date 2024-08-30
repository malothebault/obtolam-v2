import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getFriendFullPath(fileName) {
  return path.join('./src/content/friends', `${fileName}.yaml`)
}

const fileName = await input({
  message: 'Veuillez entrer le nom du fichier',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return "Le nom du fichier ne peut contenir que des lettres, des chiffres et des traits d'union"
    }
    const fullPath = getFriendFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} existe déjà`
    }
    return true
  },
})

const title = await input({
  message: 'Veuillez entrer le titre',
})

const description = await input({
  message: 'Veuillez entrer la description',
})

const link = await input({
  message: "Veuillez entrer l'adresse",
})

const avatar = await input({
  message: "Veuillez entrer l'adresse de l'avatar",
})

const content = `title: ${title}
description: ${description}
link: ${link}
avatar: ${avatar}
`

const fullPath = getFriendFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} créé avec succès`)
