"use strict";

var Matrix = function (element, rows, cols) {
    var self = this;
    this.element = element;
    this.cellSize = 20;
    this.rows = rows || 20;
    this.cols = cols || 20;
    this.snake = null;
    this.nameClassFoot = 'foot';

    this.constructor = function() {
        self.element.css({
            width: this.cols * this.cellSize,
            height: this.rows * this.cellSize
        });
        self.create();
        self.snake = new Snake(self);
        self.setFoot();
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

    this.clearCell = function (position) {
        var cell = self.getCell(position);
        cell.removeClass();
    };

    this.setFoot = function () {
        var coordinates = self.getRandomCoordinates();
        while ((coordinates.x == self.snake.head.x && coordinates.y == self.snake.head.y)
            || (self.isCellSnake(coordinates))) {
            coordinates = self.getRandomCoordinates();
        }
        self.setCell(coordinates,self.nameClassFoot);
    };

    this.gameOver = function () {
        alert('GAME OVER');
    };

    this.getRandomCoordinates = function() {
        var position = {
            x : 0,
            y : 0
        };
        position.x = getRandom(1,this.cols);
        position.y = getRandom(1,this.rows);
        return position;
    };

    this.checkInBorder = function (position, exludeClass) {
        var cell = self.getCell(position);
        return !cell.length || cell.hasClass(exludeClass);
    };

    this.isCellFoot = function (position) {
        var cell = self.getCell(position);
        return cell.hasClass(self.nameClassFoot);
    };
    this.isCellSnake = function (position) {
        var cell = self.getCell(position);
        return cell.hasClass(self.snake.nameClass);
    };

    this.constructor();
};

