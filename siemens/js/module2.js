	//module creation
	var SIEMENS = (function(SIEMENS) {
		SIEMENS.colors = ['White','Red','Green','Blue','Yellow']
		SIEMENS.addColor = function (color) {
			this.colors.push(color);
			console.log("Color is just added!!");
		};

		return SIEMENS;		
	})(SIEMENS || {});	
