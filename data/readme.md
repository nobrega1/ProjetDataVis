# Préparation de données

## Sources

### Ventes globales

#### Commande pour télécharger les donnée

```
?
```

#### Commande pour préparer les données

```
node sources/globalSales/prepare > sources/globalSales/data.json
```

#### Description des données

Qu'est ce qu'elles représentent?

#### Structure de [`sources/globalSales/data.json`](sources/globalSales/data.json)

Un tableau d'objets avec les clés:

* `publisher`
* `year`
* `sales`

### Scores par jeu

#### Commande pour télécharger les donnée

```
?
```

#### Commande pour préparer les données

```
node sources/scoresPerGame/prepare > sources/scoresPerGame/data.json
```

#### Description des données

Qu'est ce qu'elles représentent?

#### Structure de [`sources/scoresPerGame/data.json`](sources/scoresPerGame/data.json)

Un tableau d'objets avec les clés:

* `metascore`
* `name`
* `console`
* `userscore`
* `date`
* `year`

## Données par graphique


### Jeux par années (Filipe)

[`gamesPerYear/data.json`](gamesPerYear/data.json)

Est basé sur le jeux de données [`sources/scoresPerGame/data.json`](sources/scoresPerGame/data.json).

```
node gamesPerYear/prepare > gamesPerYear/data.json
```

### Ventes par éditeur et par année (Jean)

[`salesPerYearAndPublisher/data.json`](salesPerYearAndPublisher/data.json)

Est basé sur le jeux de données [`sources/globalSales/data.json`](sources/globalSales/data.json)

```
node salesPerYearAndPublisher/prepare > salesPerYearAndPublisher/data.json
```