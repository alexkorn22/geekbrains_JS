
Matrix = function (containerId, rows, cols)
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

    var self = this;

    this.create = function()
    {
        var n = self.rows * self.cols;

        this.matrix.innerHTML = '';


        for (var i = 1; i <= self.rows; i++)
        {
            for (var j = 1; j <= self.cols; j++) {
                var div = document.createElement('div');
                div.id = 'cell_' + j + '_' + i;
                this.matrix.appendChild(div);
            }

        }
    };

    this.getCell = function(position)
    {
        return $('#cell_' + position.x + '_' + position.y);
    };

    // установить значение ¤чейки
    this.setCell = function(position, valClass)
    {

        var cell = self.getCell(position);

    }


};

