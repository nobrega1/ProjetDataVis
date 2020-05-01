//css 
import 'css/main.css';
import "nes.css/css/nes.min.css";
import '../node_modules/billboard.js/dist/billboard.min.css'

//js
import performanceEditeurs from './js/performanceEditeurs'
import typesDeJeux from './js/typesDeJeux'
import jeuxParAn from './js/jeuxParAn'
import ventesGlobales from './js/ventesGlobales'

// utiliser les fonctions importées
performanceEditeurs('perf-editeurs')
jeuxParAn('jeux-par-an-graph')
typesDeJeux('types-jeux-graph')
ventesGlobales('ventes-globales')
