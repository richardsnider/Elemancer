var car = {
	owner: 'richard',
	model: 'cavalier',
	make: 'chevy',
	year: 2003,
	used: true,
	color: 'yellow'
};

var Strings = {
	owner: "Owner: ",
	model: "Model: ",
	make: "Make: ",
	year: "Year: ",
	used: "Used: ",
	color: "Color: "
}

var background = createElement({name: 'e-background'});
document.body.appendChild(background);

var backpanel = createElement({name: 'glass-panel', draggable: true});
document.body.appendChild(backpanel);

var carDetails = {
	ownerLabel: createElement({name:'data-label', text: Strings.owner}),
	owner: createElement({name: 'data-label'}),
	yearLabel: createElement({name:'data-label', text: Strings.year}),
	year: createElement({name:'data-label'}),
	makeLabel: createElement({name:'data-label', text: Strings.make}),
	make: createElement({name:'data-label'}),
	modelLabel: createElement({name:'data-label', text: Strings.model}),
	model: createElement({name:'data-label'}),
	colorLabel: createElement({name:'data-label', text: Strings.color}),
	color: createElement({name:'data-label'})
}

for(var element in carDetails) {
	backpanel.appendChild(carDetails[element]);
}

//UI.background.setAttribute("id", "blurtarget");
//UI.year.innerHTML = car.year;

//UI.year.addEventListener('click', function(e) {
//	car.year += 1;
//});

Object.observe(car, function(changes) {
	changes.forEach(function(change) {
		if(change.name === 'year')
			carDetails.year.innerHTML = car.year;
	});
});