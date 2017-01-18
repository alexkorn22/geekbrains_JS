var keys = {
	39: 'right',
	37: 'left',
	38: 'top',
	40: 'bottom'
};
var matrix;

$(document).ready(function (event) {

	matrix = new Matrix('matrix1',20,20);
	matrix.create();

});