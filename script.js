"use strict";
const box = document.getElementById('content');
const btnGravitation = document.getElementById("gravitacion");
const btnCoulomb = document.getElementById("coulomb");
const btnCampo = document.getElementById("campo");
const btnGauss = document.getElementById("gauss");
const btnVoltaje = document.getElementById("voltaje");
const btnCapacitancia = document.getElementById("capacitancia");
const btnResistencia = document.getElementById("resistencia");

document.addEventListener('DOMContentLoaded', function(){
	const menu = document.getElementById('menu');
	let elements = menu.querySelectorAll("*");

	if(elements.length > 8){
		menu.style.overflowY = 'scroll';
	}else{
		menu.style.overflowY = 'hidden';
	}
})

function open(name){
	box.setAttribute('src', ''+name+'.html')
}

btnGravitation.addEventListener("click", function(){
	open("gravitacion");
});

btnCoulomb.addEventListener('click', function(){
	open("coulomb");
})

btnCampo.addEventListener('click', function(){
	open("campoElectrico");
})

btnGauss.addEventListener('click', function(){
	open("gauss");
})

btnVoltaje.addEventListener('click', function() {
	open("voltaje");
})

btnCapacitancia.addEventListener('click', function() {
	open("capacitancia");
})

btnResistencia.addEventListener('click', function() {
	open("resistencia");
})