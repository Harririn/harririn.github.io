document.querySelector('#menu').a.addEventListener("click",showA);
document.querySelector('#menu').b.addEventListener("click",showB);
document.querySelector('#menu').c.addEventListener("click",showC);
document.querySelector('#menu').d.addEventListener("click",showD);
document.querySelector('#menu').e.addEventListener("click",showE);

function showA(){
	document.getElementById('words').innerHTML = "An Octopus has three hearts <img src='images/octopus.jpg' alt='Photo of an octopus' id='image'>";
}
function showB(){
	document.getElementById('words').innerHTML = "The different colors of Froot Loops cereal all taste the same <img src='images/cereal.jpg' alt='Photo of a bowl of cereal' id='image'>";
}
function showC(){
	document.getElementById('words').innerHTML = "On May 22, 2010 Laszlo Hanyecz, purchased two Papa Johns pizza using 10,000 bitcoins <img src='images/pizza.jpg' alt='Photo of a pizza' id='image'>";
}
function showD(){
	document.getElementById('words').innerHTML = "The world's driest desert, the Atacama Desert, is right next to the ocean <img src='images/desert.jpg' alt='Photo of the Atacama desert' id='image'>";
}
function showE(){
	document.getElementById('words').innerHTML = "The inventor of cotton candy, WIlliam Morrison, was a dentist <img src='images/cottoncandy.jpg' alt='Photo of cotton candy' id='image'>";
}

document.querySelector('#theme').x.addEventListener("click",showDefault);

function showDefault(){
	document.querySelector('body').style.backgroundColor = "#7CC6FE";
	document.querySelector('section').style.backgroundColor = "#D3FAD6";
	document.querySelector('section').style.color = "#FBB8B1";
	document.querySelector('section').style.borderColor = "#EDEBA0";
	document.querySelector('section').style.fontFamily = "Helvetica";
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++){
		inputs[i].style.color = "#FBB8B0";
		inputs[i].style.backgroundColor = "#D1EFB5";
		inputs[i].style.borderColor = "#EDEBA0";
		inputs[i].style.fontFamily = "Helvetica";
	}
}

document.querySelector('#theme').y.addEventListener("click",showForest);

function showForest(){
	document.querySelector('body').style.backgroundColor = "#CADF9E";
	document.querySelector('section').style.backgroundColor = "#A4AC96";
	document.querySelector('section').style.color = "#313628";
	document.querySelector('section').style.borderColor = "#a4ac96";
	document.querySelector('section').style.fontFamily = "Papyrus";
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++){
		inputs[i].style.color = "#313628";
		inputs[i].style.backgroundColor = "#A4AC96";
		inputs[i].style.borderColor = "#a4ac96";
		inputs[i].style.fontFamily = "Papyrus";
	}
}

document.querySelector('#theme').z.addEventListener("click",showNight);

function showNight(){
	document.querySelector('body').style.backgroundColor = "#0A2463";
	document.querySelector('section').style.backgroundColor = "#7073FF";
	document.querySelector('section').style.color = "#EAFFFD";
	document.querySelector('section').style.borderColor = "#DAB6FC";
	document.querySelector('section').style.fontFamily = "Lucida Handwriting";
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++){
		inputs[i].style.color = "#EAFFFD";
		inputs[i].style.backgroundColor = "#7073FF";
		inputs[i].style.borderColor = "#DAB6FC";
		inputs[i].style.fontFamily = "Lucida Handwriting";
	}
}
