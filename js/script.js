document.addEventListener('DOMContentLoaded', () => {
	getPersons(1);
});

function getPersons(page){
	let xml = new XMLHttpRequest();
	let url = `https://swapi.dev/api/people/?page=${page}`;
	xml.open('GET', url);
	xml.responseType = 'json';
	xml.send();
	xml.onload = () => {
		showAllPerson(xml.response.results);
	}
}

function showAllPerson(data){
	let content = document.querySelector('.content');
	content.innerHTML = '';
	data.forEach(element => {
		let str = `<div class="card mb-3">
			<h3 class="card-header">${element.name}</h3>
			<img src="https://starwars-visualguide.com/assets/img/characters/${element.url.match(/\/([0-9]*)\/$/)[1]}.jpg" class="d-block user-select-none"></div>`;
			content.insertAdjacentHTML('beforeend', str);
	});
}