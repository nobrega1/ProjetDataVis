console.log("test");

// récupération de l'élément slider
const input = document.getElementById('year-input')

const onYearChange = year => {
  console.log(year)
}
//écoute des changements du slider
input.addEventListener('input', e => onYearChange(Number(e.target.value)))