"use strict";

var Matrix = function (element, rows, cols) {
    this.element = element;
    this.cellSize = 20;
    this.rows = rows || 20;
    this.cols = cols || 20;
    this.snake = null;
    var self = this;

    this.constructor = function() {
        this.element.css({
            width: this.cols * this.cellSize,
            height: this.rows * this.cellSize
        });
        this.create();
        this.snake = new Snake();
    };

    this.create = function() {
        for (var i = 1; i <= self.rows; i++)
        {
            for (var j = 1; j <= self.cols; j++) {
                self.element.append($("<div>").attr('id','cell_' + j + '_' + i));
            }

        }
    };

    this.getCell = function(position)
    {
        return $('#cell_' + position.x + '_' + position.y);
    };

    this.setCell = function(position, valClass)
    {
        var cell = self.getCell(position);
        cell.addClass(valClass);
    };

    this.setFoot = function () {

    };

    this.constructor();
};

