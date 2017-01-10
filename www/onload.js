
window.onload = function()
{
	var m1 = new Matrix('matrix1', 20, 20);
	m1.create();
	var square = new Square(m1, 1, 2, 'right');
	square.create();

	setInterval(square.move, 300);

	this.document.onkeyup = function (event) {

	};

};

