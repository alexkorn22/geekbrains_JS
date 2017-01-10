function Square(matrix, row, col, course)
{
	this.body = [row, col];
	this.course = course;
	var self = this;


	this.create = function()
	{
		matrix.setCell(self.body[0], self.body[1], true);
	};
	
	this.move = function()
	{
		var last_body = self.body.slice();
		
		switch(self.course)
		{
			case 'right':
				self.body[1]++;
				break;
			case 'left':
				self.body[1]--;
				break;
			case 'top':
				self.body[0]--;
				break;
			case 'bottom':
				self.body[0]++;
				break;
		}

		matrix.setCell(last_body[0], last_body[1], false);
		if (self.body[1] > matrix.rows || self.body[0] > matrix.cols ||
			self.body[1] < 1 || self.body[0] < 1){
			clearInterval(window.curInterval);
			NewGame();
			return;
		}
		matrix.setCell(self.body[0], self.body[1], true);
	}
}