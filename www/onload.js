
window.onload = function()
{
	NewGame();
};

function NewGame() {

	var keys = {
		39:'right',
		37:'left',
		38:'top',
		40:'bottom'
	};

	var m1 = new Matrix('matrix1', 20, 20);
	m1.create();
	var square = new Square(m1, 1, 2, 'right');
	square.create();
	window.curInterval = setInterval(square.move, 300);
	window.document.onkeyup = function (event) {
		if (!keys[event.keyCode]){
			return;
		}
		square.course = keys[event.keyCode];
	};

}
