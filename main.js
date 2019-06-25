console.log('siema');
const name = 'Maciek';
const age = 27;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);

const about = document.querySelector(`.about__paragraph--js`);
console.log(about);
about.innerHTML = `Nazywam się ${name} i mam ${age} lat`;