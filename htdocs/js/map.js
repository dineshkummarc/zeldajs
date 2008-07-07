YAHOO.namespace('Zelda');

(function() {
	var Z = YAHOO.Zelda;
	Z.Map = function() {
		this.width = 0;
		this.height = 0;
		this.rooms_array = [];
	};
	var P = Z.Map.prototype;
	P.create = function(w, h, rw, rh) {
		this.width = w;
		this.height = h;
		var length = this.height * this.width;
		for (var r = 0; r < length; r++) {
			this.rooms_array[r] = new Z.Room();
			this.rooms_array[r].create(rw, rh);
		}
	};
	P.rooms = function(x, y) {
		return this.rooms_array[(y * this.width) + x];
	};
})();