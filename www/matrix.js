
function Matrix(containerId, rows, cols)
{
    // id контейнера
    this.containerId = containerId;
    // число строк
    this.rows = rows || 20;
    // число столбцов
    this.cols = cols || 20;
    this.matrix = document.getElementById(this.containerId);
    this.matrix.style.width = this.cols * 20 + 'px';
    this.matrix.style.height = this.rows * 20 + 'px';
    // создание сетки
    this.create = function()
    {
        var n = this.rows * this.cols;

        this.matrix.innerHTML = '';

        for (var i = 0; i < n; i++)
        {
            var div = document.createElement('div');
            div.className = 'cell';
            this.matrix.appendChild(div);
        }
    };

    // получить значение ¤чейки
    this.getCell = function(row, col)
    {

    };

    // установить значение ¤чейки
    this.setCell = function(row, col, val)
    {
        var ind = (row - 1) * this.cols + col - 1;
        var cell = this.matrix.children[ind];
        cell.className = (val ? 'cell on' : 'cell');
    }
}

