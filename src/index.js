//css 
import 'css/main.css';
import "nes.css/css/nes.min.css";
import '../node_modules/billboard.js/dist/billboard.min.css'
 
//js
import performanceEditeurs from './js/performanceEditeurs'
import typesDeJeux from './js/typesDeJeux'
import jeuxParAn from './js/jeuxParAn'
import ventesGlobales from './js/ventesGlobales'
import consolesparan from './js/ConsolesParAn'
import guerre20002010 from './js/GuerreConsole2000-2010'
import guerre20102018 from './js/GuerreConsole2010-2018'

// utiliser les fonctions importées
performanceEditeurs('perf-editeurs')
jeuxParAn('jeux-par-an-graph')
typesDeJeux('types-jeux-graph')
ventesGlobales('ventes-globales')
consolesparan('Consoles-par-an-graph')
guerre20002010('Rival-2000-2010-graph')
guerre20102018('Rival-2010-2018-graph')
