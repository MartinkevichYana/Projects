var point = {
  x: 0,
  y: 0
}

Object.defineProperty(point, "ptx", {
  get: function() {
    console.log(this.x);
  },

  set: function(value) {      
      if(typeof(value) == "number")
      	this.x = value;
    }
});

Object.defineProperty(point, "pty", {
  get: function() {
    console.log(this.y);
  },

  set: function(value) {      
      if(typeof(value) == "number")
      	this.y = value;
    }
});
point.ptx = 5;
point.ptx = "sdfvbsd";
point.pty = 10;
point.pty = "sdd";
point.ptx;
point.pty;