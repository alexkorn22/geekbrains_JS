//
// —оздание матрицы.
//
var activeCell = {x:0,y:0};

function createMatrix()
{
    var matrix = document.getElementById('matrix');
    var n = 20 * 20;

    for (var i = 0; i < n; i++)
    {
        var div = document.createElement('div');
        div.className = 'cell';
        div.id = 'cell_' + i;
        matrix.appendChild(div);
    }
}

//
// „тение ¤чейки матрицы.
//
function getCell(row, col)
{
    // ‘ункци¤ принимает координаты ¤чейки
    // должна вернуть true, если она закрашена,
    // false, если не закрашена.
    var idCell = row + col * 20;
    var div = document.getElementById('cell_' + idCell);
    var res =div.classList.contains('target');
    return res;
}

//
// ”становка ¤чейки матрицы.
//
function setCell(row, col, val)
{

    // ‘ункци¤ принимает координаты ¤чейки
    // если val == true, закрашивает ¤чейку,
    // иначе убирает закраску.
    var idCell = row + col * 20;
    var div = document.getElementById('cell_' + idCell);
    if (val == true) {
        div.classList.add('active');
    } else {
        div.classList.remove('active');
    }

}

function setCellTarget(row, col, val)
{

    // ‘ункци¤ принимает координаты ¤чейки
    // если val == true, закрашивает ¤чейку,
    // иначе убирает закраску.
    var idCell = row + col * 20;
    var div = document.getElementById('cell_' + idCell);
    if (val == true) {
        div.classList.add('target');
    } else {
        div.classList.remove('target');
    }

}
//Функции перемещения

function moveRight() {
    if (activeCell.x == 19 && activeCell.y == 19){
        return;
    }
    setCell(activeCell.x, activeCell.y, false);
    if (activeCell.x == 19) {
        activeCell.x = 0;
        activeCell.y = activeCell.y + 1;
    } else {
        activeCell.x = activeCell.x + 1;
    }
    setCell(activeCell.x, activeCell.y, true);
}

function moveLeft() {
    if (activeCell.x == 0 && activeCell.y == 0){
        return;
    }
    setCell(activeCell.x, activeCell.y, false);
    if (activeCell.x == 0) {
        activeCell.x = 19;
        activeCell.y = activeCell.y - 1;
    } else {
        activeCell.x = activeCell.x - 1;
    }
    setCell(activeCell.x, activeCell.y, true);
}
function moveTop() {
    if (activeCell.y == 0){
        return;
    }
    setCell(activeCell.x, activeCell.y, false);
    activeCell.y = activeCell.y - 1;
    setCell(activeCell.x, activeCell.y, true);
}
function moveBottom() {
    if (activeCell.y == 19){
        return;
    }
    setCell(activeCell.x, activeCell.y, false);
    activeCell.y = activeCell.y + 1;
    setCell(activeCell.x, activeCell.y, true);

}

//
// “очка входа.
//
window.onload = function()
{
    createMatrix();
    setCell(0, 0, true);
    setCellTarget(15, 6, true);

};

window.document.onkeydown = function (event) {
    var pressedKey = event.keyCode;
    switch (pressedKey) {
        case 39: {
            moveRight();
            break;
        }
        case 37: {
            moveLeft();
            break;
        }
        case 38: {
            moveTop();
            break;
        }
        case 40: {
            moveBottom();
            break;
        }
        default: {
            break;
        }
    }
    if (getCell(activeCell.x,activeCell.y)){
        alert('Вы выиграли');
    }
};