---
title: Exemple de Markdown
date: 2024-09-01
lastMod: 2024-09-02T23:29:49.820Z
summary: Ceci est un exemple d'article Markdown. Il montre la syntaxe Markdown et le résultat du rendu.
category: Exemples
tags: [Markdown]
---

Voici quelques exemples de syntaxe Markdown de base que vous pouvez utiliser lors de la rédaction de contenu Markdown dans Astro.

## Titres

Vous devriez éviter de recréer le titre de l'article dans le corps du Markdown, car le titre de l'article sera automatiquement généré à partir du `title` dans le `frontmatter`.

> Évitez une hiérarchie de titres trop profonde, généralement trois niveaux suffisent.

# Niveau 1

## Niveau 2

### Niveau 3 `code en ligne`

#### Niveau 4

##### Niveau 5

###### Niveau 6

## Paragraphes

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Utilisez deux espaces à la fin de la ligne pour un saut de ligne dans le paragraphe

All work and no play makes Jack a dull boy.  
All work and no play makes Jack a dull boy.

## Images

Image de petite taille

![Description de l'image](https://picsum.photos/seed/picsum/250/400)

Image de grande taille

![Description de l'image](https://picsum.photos/seed/picsum/1200/900)

Image avec titre

![Description de l'image](https://picsum.photos/seed/picsum/400/300 "Titre de l'image")

## Emphase

Ceci est un **contenu important**, ceci est un _contenu secondaire_

## Barré

~~Ceci est un texte barré.~~

## Citations

L'élément blockquote représente un contenu cité d'une autre source, optionnellement avec une citation qui doit être dans un élément `footer` ou `cite`, et optionnellement avec des modifications en ligne telles que des annotations et des abréviations.

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Notez** que vous pouvez utiliser la _syntaxe Markdown_ dans une citation.

Citation imbriquée

> Citation
>
> > Citation imbriquée

Citation avec note de bas de page

> Don't communicate by sharing memory, share memory by communicating.<br>
> — Rob Pike[^1]

[^1]: La citation ci-dessus est extraite de la [conférence](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike lors du Gopherfest, le 18 novembre 2015.

## Ligne horizontale

---

## Liens

Ceci est un lien interne [Guide d'utilisation de Gyoza](/posts/guide)

Ceci est un lien externe [Documentation React **en français**](https://fr.react.dev/)

Rendu automatique en lien <https://github.com>

Adresse e-mail <mail@example.com>

## Tableaux

Définir l'alignement des cellules

| Nom   | Âge |  Fruit |
| :---- | :-: | -----: |
| Bob   | 27  |  Pomme |
| Alice | 23  | Banane |
| John  | 28  | Orange |

Supporte le Markdown en ligne

| Italique   | Gras     | Code   |
| ---------- | -------- | ------ |
| _italique_ | **gras** | `code` |

Débordement de tableau

| A                                                        | B                                                                                                             | C                                                                                                                                    | D                                                 | E                                                          | F                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| Lorem ipsum dolor sit amet, consectetur adipiscing elit. | Phasellus ultricies, sapien non euismod aliquam, dui ligula tincidunt odio, at accumsan nulla sapien eget ex. | Proin eleifend dictum ipsum, non euismod ipsum pulvinar et. Vivamus sollicitudin, quam in pulvinar aliquam, metus elit pretium purus | Proin sit amet velit nec enim imperdiet vehicula. | Ut bibendum vestibulum quam, eu egestas turpis gravida nec | Sed scelerisque nec turpis vel viverra. Vivamus vitae pretium sapien |

## Blocs de code

### Syntaxe

Nous pouvons utiliser 3 backticks ``` sur une nouvelle ligne et écrire le snippet, puis fermer avec 3 backticks sur une nouvelle ligne. Pour mettre en évidence la syntaxe spécifique à un langage, écrivez un mot du nom du langage après les 3 premiers backticks, par exemple html, javascript, css, markdown, typescript, txt, bash

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

```
const var text = "hello world"
```

## Formules KaTeX

Utilisez le symbole `$` pour encadrer une formule et générer une formule en ligne, par exemple : $E = mc^2$.

Utilisez le symbole `$$` pour encadrer une formule et générer une formule indépendante. Par exemple :

$$
e^{i\pi} + 1 = 0
$$

Vous pouvez également utiliser la méthode du bloc de code (` ```math `) :

```math
\oint_{\partial V} \mathbf{E} \cdot d\mathbf{A} = \frac{Q}{\epsilon_0}
```

## Types de listes

### Liste ordonnée

#### Syntaxe

```markdown
1. Premier élément
2. Deuxième élément
3. Troisième élément
```

#### Résultat

1. Premier élément
2. Deuxième élément
3. Troisième élément

### Liste non ordonnée

#### Syntaxe

```markdown
- Élément de liste
- Un autre élément
- Et encore un autre élément
```

#### Résultat

- Élément de liste
- Un autre élément
- Et encore un autre élément

### Liste imbriquée

#### Syntaxe

```markdown
- Fruit
  - Pomme
  - Orange
  - Banane
- Produits laitiers
  - Lait
  - Fromage
```

#### Résultat

- Fruit
  - Pomme
  - Orange
  - Banane
- Produits laitiers
  - Lait
  - Fromage

## Autres éléments — abbr, sub, sup, kbd, mark

### Syntaxe

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> est un format d'image bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Appuyez sur <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Suppr</kbd></kbd> pour terminer la session.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent les insectes, les vers et d'autres petites créatures.
```

#### Résultat

<abbr title="Graphics Interchange Format">GIF</abbr> est un format d'image bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Appuyez sur <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Suppr</kbd></kbd> pour terminer la session.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent les insectes, les vers et d'autres petites créatures.

## Spoiler

```md
||cacher le contenu||
```

En temps normal, ce contenu sera caché ||cacher le contenu||, et ne s'affichera que lorsque la souris passera dessus.

## Intégrations

Pour intéger du contenu Codepen ou Youtube, on peut utiliser la syntaxe suivante

### Codepen

```md
::codepen{#dPbmrj author="ricardospalves"}
```

::codepen{#dPbmrj author="ricardospalves"}

### YouTube

```md
::youtube{#jNQXAC9IVRw}
```

::youtube{#jNQXAC9IVRw}
