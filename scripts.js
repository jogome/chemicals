var genesys = true;
var carbonato;


 $("input#genesys").on("click", function() {
	 console.log("You clicked me so I'm checked and carbonato is uncheked");
	 genesys = true;
	 carbonato = false;
	 $("h3.produto").text("Genesys ou Cloro");
 });
  
 $("input#carbonato").on("click", function() {
	 console.log("You clicked me so I'm checked and genesys is unchecked");
	 genesys = false;
	 carbonato = true;
	 $("h3.produto").text("Carbonato de Cálcio");
 });
  
  console.log ("genesys = "+ genesys);
  console.log ("carbonato = "+ carbonato);


function Produtos(tipo, perimetro) {
    //this.unidade = unidade;
    this.tipo = tipo;
    this.perimetro = perimetro / 100;
    //this.nivel = nivel;
    this.getRadius = function() {
        var raio = (this.perimetro / Math.PI) / 2;
        //return "O raio do depósito é: " + raio;
        return raio;
    };
    this.volume = function(nivel) {
        // In meters
        var altura = nivel / 100;
        // Cubical meters
        var vol = Math.PI * Math.pow(this.getRadius(), 2) * altura;
        var vol_liters = vol.toFixed(3) * 1000;
        // In Liters
        return "O recipiente contém <span class='litros'>" + vol_liters + "</span> litros de " + this.tipo;
    };
    
}

// Genesys and Sodium hypochlorite tank of RO1, RO2, RO3 and RO4
var genesysTank = new Produtos("Genesys", 202);

// Genesys and Sodium hypochlorite tank of RO5 and RO6 
var genesysAndCloroTankRight = new  Produtos("Genesys", 217);

// calcium carbonate tank of RO1, RO2, RO3 and RO4
var carbonateTank = new Produtos("Carbonato de Calcio", 239);


var unitsSelected = "left";

function selectProduct() {
	//var unitsChoosed = document.getElementsByClassName("units").value;
	console.log("This is the velue for test: " + unitsSelected);
	if (unitsSelected === 'left') {
		// RO 1, RO2, RO3
		if(genesys == true) {
			// display the Genesys level
			var display = function(nivel_prod) {
				// tanks height of Genesys and Cloro of RO
				// 1, 2 e 3  é de 94cm.
				var alturaTanqueCloro = 94;  // centimeters
			  
				// get the value of the inputed text
				nivel_prod = document.getElementById("niv").value;
				nivel_prod = alturaTanqueCloro - Number(nivel_prod);
			  
				// get the div by its id (div to display result)
				var resultado = document.getElementById("show");
				// display the result in liters in the tank
				resultado.innerHTML = genesysTank.volume(nivel_prod);
			};
			
			display();
			
		} else if(carbonato == true) {
			// display the Carbonate level
			var nivelCarbonato = function(nivel_prod) {
				//Nivel carbonato de calcio;
				// altura dos tanques de carbonato dos RO
				// 1, 2, 3 e 4 é de 1515mm
				var alturaTanqueCarbonato = 151.5;
				nivel_carbonato = alturaTanqueCarbonato - document.getElementById("niv").value;
				// display the result in liters in the tank
				var resulCarbonato = document.getElementById("show");
				resulCarbonato.innerHTML = carbonateTank.volume(nivel_carbonato);
			};
			
			nivelCarbonato();
		}
	}else if (unitsSelected === 'left_ro4') {
			// RO 4
			if(genesys == true) {
				// display the Genesys level
				var display = function(nivel_prod) {
					// tanks height of Genesys and Cloro of RO
					// 4 é de 95cm and perimeter = 202cm
					var alturaTanqueCloro = 95;  // centimeters
				  
					// get the value of the inputed text
					nivel_prod = document.getElementById("niv").value;
					nivel_prod = alturaTanqueCloro - Number(nivel_prod);
				  
					// get the div by its id (div to display result)
					var resultado = document.getElementById("show");
					// display the result in liters in the tank
					resultado.innerHTML = genesysTank.volume(nivel_prod);
				};
				
			display();
			
			} else if(carbonato == true) {
				// display the Carbonate level
				var nivelCarbonato = function(nivel_prod) {
					//Nivel carbonato de calcio;
					// altura dos tanques de carbonato dos RO
					// 1, 2, 3 e 4 é de 1515mm
					var alturaTanqueCarbonato = 151.5;
					nivel_carbonato = alturaTanqueCarbonato - document.getElementById("niv").value;
					// display the result in liters in the tank
					var resulCarbonato = document.getElementById("show");
					resulCarbonato.innerHTML = carbonateTank.volume(nivel_carbonato);
				};
				
				nivelCarbonato();
			}
	
	}else if (unitsSelected === 'right') {
			// ROs 5 e 6
			if(genesys == true) {
				// display the Genesys level
				var display = function(nivel_prod) {
					// tanks height of Genesys and Cloro of RO
					// 5 e 6 é de 95cm
					var alturaTanqueCloro = 95;  // centimeters
				  
					// get the value of the inputed text
					nivel_prod = document.getElementById("niv").value;
					nivel_prod = alturaTanqueCloro - Number(nivel_prod);
				  
					// get the div by its id (div to display result)
					var resultado = document.getElementById("show");
					// display the result in liters in the tank
					resultado.innerHTML = genesysAndCloroTankRight.volume(nivel_prod);
				};
				
			display();
			
			} else if(carbonato == true) {
				// display the Carbonate level
				var nivelCarbonato = function(nivel_prod) {
					//Nivel carbonato de calcio;
					// altura dos tanques de carbonato dos RO
					// 1, 2, 3 e 4 é de 1515mm
					var alturaTanqueCarbonato = 151.5;
					nivel_carbonato = alturaTanqueCarbonato - document.getElementById("niv").value;
					// display the result in liters in the tank
					var resulCarbonato = document.getElementById("show");
					resulCarbonato.innerHTML = carbonateTank.volume(nivel_carbonato);
				};
				
				nivelCarbonato();
			}
	
	}
}


/* Detect the selected option in the select and return its value,
   we choose whether is the ROs 1,2,3,4 or ROs 5,6 */
function chooseUnits(el) {
	var value = el.options[el.selectedIndex].value;
	console.log(value);
	if (value === 'left') {
		console.log("left value");
		unitsSelected = "left";
		return unitsSelected;
	}
	else if(value === 'right') {
		console.log("right value");
		unitsSelected = "right";
		return unitsSelected;	
	}
	else if(value === "left_ro4") {
		console.log("Ro4 choosed!");
		unitsSelected = "left_ro4";
		return unitsSelected;
	}
}

/* Setting focus in the numbr box */

function setFocusNumberBox() {
	document.getElementById("niv").focus();
}

 setFocusNumberBox();
