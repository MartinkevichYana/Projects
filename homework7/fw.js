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