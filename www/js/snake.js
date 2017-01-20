"use strict";
var Snake = function (matrix, speed) {
	var self = this;
	this.speed = speed || 500;
	this.matrix = matrix;
	this.nameClass = 'snake';
	this.body = [
		{
			x: 1,
			y: 1
		}
	];

	this.direction = {
		x: 1,
		y: 0
	};

	this.constructor = function () {
		self.matrix.setCell(this.body[0],this.nameClass);
		$(window).keydown(self.setDirection);
		self.interval = setInterval(self.move,self.speed);
	};

	this.move = function () {
		var lastPosition = self.body[0];
		self.matrix.clearCell(lastPosition);
		self.body[0].x =  lastPosition.x + self.direction.x;
		self.body[0].y =  lastPosition.y + self.direction.y;
		self.matrix.setCell(self.body[0],self.nameClass);
	};

	this.setDirection = function (e) {
		self.direction = {
			x: 0,
			y: 0
		};
		switch (e.keyCode) {
			case 39: // вправо
				self.direction.x = 1;
				break;
			case 37: // влево
				self.direction.x = -1;
				break;
			case 40: // вниз
				self.direction.y = 1;
				break;
			case 38: // вверх
				self.direction.y = -1
				break;
		}
	};

	this.constructor();
};