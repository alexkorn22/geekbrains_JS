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
		},
		{
			x: 2,
			y: 1
		},
		{
			x: 3,
			y: 1
		}
	];
	this.head = {
		x: 3,
		y: 1
	};

	this.direction = {
		x: 1,
		y: 0
	};

	this.constructor = function () {
		for (var i=0; i < self.body.length; ++i) {
			self.matrix.setCell(self.body[i],self.nameClass);
		}
		$(window).keydown(self.setDirection);
		self.interval = setInterval(self.move,self.speed);
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
				self.direction.y = -1;
				break;
		}
	};
	
	this.move = function () {

		var lastPosition = self.body[self.body.length - 1];
		var head = {
			x: lastPosition.x + self.direction.x,
			y: lastPosition.y + self.direction.y
		};
		self.head = head;
		if (self.matrix.checkInBorder(head,self.nameClass)) {
			clearInterval(self.interval);
			self.matrix.gameOver();
		} else {
			if (self.matrix.isCellFoot(head)) {
				self.eat();
			} else {
				var tail = self.body.shift();
				self.matrix.clearCell(tail);
			}
			self.body.push(head);
			self.matrix.setCell(head,self.nameClass);
		}
	};

	this.eat = function () {
		self.matrix.clearCell(self.head);
		self.matrix.setFoot();
	};

	this.constructor();
};