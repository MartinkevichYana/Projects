var fw= {

	append: function(el1, el2) {
		el2.appendChild(el1);
	},
	prepend: function(parent, el) {
		parent.insertBefore(el, parent.firstChild);
	},
	remove: function(el) {
		el.remove();
	},
	create: function(el) {
		return document.createElement(el);
	},
	css: function(el, prop, value) {
		if(arguments.length == 3)
			el.style[prop] = value;
		else
			return window.getComputedStyle(el)[prop];
	},
	pageTop: function(el) {
		return (el.getBoundingClientRect().top + pageYOffset);
	},
	pageLeft: function(el) {
		return (el.getBoundingClientRect().left + pageXOffset);
	},
	width: function(el) {
		return el.getBoundingClientRect().width;
	},
	height: function(el) {
		return el.getBoundingClientRect().height;
	},
	ajax: function(m, p, f) {
		var change = function() {
			var xhr = new XMLHttpRequest();
			xhr.open(m, p, true);
			xhr.onload = function() {
				text = this.responseText;
				f(text);
			}
			xhr.send(null);
		}

		window.onhashchange = function() {
			change();
		}
	},

	get: {

		byId: function(id) {
			return document.getElementById(id);
		},
		byTName: function(name, k) {
			return document.getElementsByTagName(name)[k];
		},
		byClass: function(name, k) {
			return document.getElementsByClassName(name)[k];
		},
		bySelector: function(css) {
			return document.querySelector(css);
		},
		bySelectorAll: function(css, k) {
			return document.querySelectorAll(css)[k];
		}
	},

	event: {

		add: function(type, el, f) {
			if (typeof(el.addEventListener)=='function') {
	    		el.addEventListener(type, f);
	    	}
	        else {
	    		el.attachEvent("on"+type, f);
			}
		},
		remove: function(type, el, f) {
			if (typeof(el.removeEventListener)=='function') {
	    		el.removeEventListener(type, f);
	    	}
	        else {
	    		el.detachEvent("on"+type, f);
			}
			el.removeEventListener(type, f);
		},
		dispatch: function(type, el) {
			var event = new Event(type);
  			el.dispatchEvent(event);
		}
	}
}
