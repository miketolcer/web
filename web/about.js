console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', () => {
	alert('has been submitted')
});

let duck = document.querySelector('img')

duck.addEventListener('mouseover', function() {
	alert('duck time')
});
