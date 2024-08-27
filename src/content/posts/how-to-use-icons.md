---
title: Comment utiliser les icônes dans Gyoza ?
date: 2024-05-08T10:54:27.000Z
tags: [Icon]
category: Tutoriel
comments: true
draft: false
---

Gyoza choisit d'utiliser la méthode font-class pour référencer les icônes. Ces icônes proviennent principalement de [Remix Icons](https://remixicon.com/) et sont gérées et exportées sur [iconfont](https://www.iconfont.cn/).

L'image ci-dessous montre toutes les icônes du projet :

![Toutes les icônes](https://s2.loli.net/2024/05/08/mbdT5HqYMEajyRG.webp)

Lorsque vous ajoutez des comptes de réseaux sociaux à afficher sur la page d'accueil, vous voudrez peut-être utiliser ces icônes. Il suffit de remplir le nom avec le préfixe `icon-` sous l'icône correspondante dans l'élément de configuration.

Si vous utilisez des icônes dans des composants, vous pouvez procéder comme suit :

```jsx
<i className="iconfont icon-xxx"></i>
```

## Pourquoi pas des icônes SVG ?

Vous avez peut-être vu de nombreux projets utiliser [iconify](https://iconify.design/). Iconify est un ensemble d'icônes open source contenant plus de 200 000 icônes, offrant des méthodes d'importation pour plusieurs frameworks. Astro dispose également d'un plugin correspondant astro-icon qui peut être utilisé (si vous êtes intéressé par cela, vous pouvez consulter leur [documentation](https://github.com/natemoo-re/astro-icon)).

J'ai également essayé d'utiliser iconify dans le projet, mais pour les raisons suivantes, j'ai finalement opté pour la méthode font-class :

- Comme le projet utilise à la fois Astro et React, et que la façon d'utiliser les icônes iconify dans les composants Astro et React est différente, cela conduirait inévitablement à l'existence de deux méthodes d'utilisation dans le code.
- Iconify a besoin de faire une requête à son serveur lors du chargement, ~~je m'inquiéterais de l'échec de la requête~~, bien que cette inquiétude soit superflue.
- Il y a une fonctionnalité où j'injecte certaines icônes dans le markdown lors du rendu de l'article, comme l'icône à la fin des liens externes, ce qui n'est pas pratique à réaliser avec iconify.
- L'intégration directe d'icônes SVG dans le HTML n'est pas élégante, l'utilisation de font-class ne nécessite que le nom de classe correspondant, ce qui me semble réduire un peu la taille finale du HTML et accélérer le chargement de la page. Je n'ai pas encore fait de tests spécifiques, mais au moins j'essaie d'éviter l'apparition d'un grand nombre de SVG dans la page uniquement pour être utilisés comme icônes.
- Ce projet n'utilise pas beaucoup d'icônes, principalement quelques icônes courantes de réseaux sociaux, utilisées pour personnaliser les méthodes de contact. Je souhaite que toutes les icônes soient gérées de manière centralisée, ce qui est plus pratique.

Je dois admettre que la solution actuelle pour les icônes n'est pas élégante, je dois mettre à jour les fichiers de police et CSS correspondants chaque fois que l'ensemble d'icônes est modifié. De plus, il devient difficile pour les autres de gérer l'ensemble d'icônes.

Je pourrais essayer d'autres méthodes à l'avenir, comme [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind), si vous avez une meilleure solution, n'hésitez pas à me laisser un commentaire.

## Personnalisation des icônes

Si vous souhaitez remplacer les icônes iconfont, veuillez modifier les fichiers suivants :

```text
public/fonts/iconfont.ttf
public/fonts/iconfont.woff
public/fonts/iconfont.woff2
src/styles/iconfont.css
```

Notez que cela remplacera toutes les icônes utilisées dans le projet, alors assurez-vous de savoir ce que vous faites.
