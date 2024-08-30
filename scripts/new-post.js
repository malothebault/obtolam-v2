import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getPostFullPath(fileName) {
  return path.join('./src/content/posts', `${fileName}.md`)
}

const fileName = await input({
  message: 'Veuillez entrer le nom du fichier',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return "Le nom du fichier ne peut contenir que des lettres, des chiffres et des traits d'union"
    }
    const fullPath = getPostFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} existe déjà`
    }
    return true
  },
})

const title = await input({
  message: "Veuillez entrer le titre de l'article",
})

const content = `---
title: ${title}
date: ${new Date().toISOString()}
tags: []
comments: true
draft: false
---
`

const fullPath = getPostFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} créé avec succès`)
