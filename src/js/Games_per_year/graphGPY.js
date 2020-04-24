import data from '../../datasSets/dataGPY.json';

  const R = require('ramda');
  const annees = R.uniq(data.map(d => d.date))
  const count = annee => data.filter(d => d.date === annee).length;
  annees.map(annee => ({ annee, count: count(annee) }))
  console.log(annees)