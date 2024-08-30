import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getProjectFullPath(fileName) {
  return path.join('./src/content/projects', `${fileName}.yaml`)
}

const fileName = await input({
  message: 'Veuillez entrer le nom du fichier',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return "Le nom du fichier ne peut contenir que des lettres, des chiffres et des traits d'union"
    }
    const fullPath = getProjectFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} existe déjà`
    }
    return true
  },
})

const title = await input({
  message: 'Veuillez entrer le nom du projet',
})

const description = await input({
  message: 'Veuillez entrer la description du projet',
})

const link = await input({
  message: "Veuillez entrer l'adresse du projet",
})

const image = await input({
  message: "Veuillez entrer l'adresse de l'image de prévisualisation",
})

const content = `title: ${title}
description: ${description}
link: ${link}
image: ${image}
`

const fullPath = getProjectFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} créé avec succès`)
