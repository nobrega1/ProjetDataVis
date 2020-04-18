### Initialisation sur PC

A la racine (/projet)

#### Initialisation 

```
npm init -y
```

#### Webpack
```
npm install webpack webpack-cli --save-dev
```

```
 npm install style-loader css-loader --save-dev
```

#### Babel

```
npm install babel-loader @babel/core @babel/preset-env webpack --save-dev
```

```
npm install babel-polyfill --save-dev
```

#### JQuery

```
npm install jquery --save
```

#### Configuration webpack - babel - css loader (déjà ok)

Créer un fichier webpack.config.js à la racine du projet

Copier-coller le code ci-dessous:
```const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
```
Ajouter à la section rules

```
{ 
  test:/\.css$/,
  use: [ 'style-loader', {
    loader: 'css-loader',
    options: {url: false} 
  }],        
}     
```

#### .browserlisttrc (déjà ok)

```
>0.25%
not dead
```

#### NPM scripts
Modifier le fichier package.json en ajoutant les lignes ci-dessous à la place de la section scripts existante

```
"scripts": {
    "preview": "live-server dist/",
    "build": "webpack",
    "watch": "webpack --mode=development --watch"
},
```

### Install D3

```
npm install d3
```


### Install Handlebars

```
npm install handlebars --save
npm install handlebars-loader --save-dev
```

Puis modifiez la configuration webpack pour que tous les fichiers avec l'extension *.handlebars* soient *packagés* correctement par *webpack*. Ajouter la règle suivante dans la partie *rules* du fichier *webpack.config.js* :

```
{
  test: /\.handlebars$/,
  use: 'handlebars-loader'
}
```