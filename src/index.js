import _ from 'lodash';
import { createName as cName } from './modules/createName';
import './styles/main.scss';
// import jsIcon from './image/js.png';
// import Data from './data/data.xml';
// import Notes from './data/data.csv';
import printMe from './print';

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	element.textContent = cName('Sass testing ');
	element.classList.add('hello');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	// const newIcon = new Image();
	// newIcon.src = jsIcon;
	// element.appendChild(newIcon);

	// console.log(Data);
	// console.log(Notes);

	return element;
}

document.body.appendChild(component());
