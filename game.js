var myImageTypes = [];
var myImages = [];
var randomType;


function Main(){

	myImageTypes = ["Nietzsche", "Heidegger", "Hegel", "Lee", "Ali", "Pacquiao", "Tesla", "Plato", "Castro", "Mozart"];	
	var rnd = Math.floor(Math.random() * myImageTypes.length);
	randomType = myImageTypes[rnd];

	 myImages = new Array();
	myImages[0] = "Images/Hegel 1.jpg";
	myImages[1] = "Images/Hegel 2.jpg";
	myImages[2] = "Images/Hegel 3.jpg";
	myImages[3] = "Images/Hegel 4.jpg";
	myImages[4] = "Images/Heidegger 1.jpg";
	myImages[5] = "Images/Heidegger 2.jpg";
	myImages[6] = "Images/Heidegger 3.jpg";
	myImages[7] = "Images/Heidegger 4.jpg";
	myImages[8] = "Images/Nietzsche 1.jpg";
	myImages[9] = "Images/Nietzsche 2.jpg";
	myImages[10] = "Images/Nietzsche 3.jpg";
	myImages[11] = "Images/Nietzsche 4.jpg";
	myImages[12] = "Images/Lee 1.jpg";
	myImages[13] = "Images/Lee 2.jpg";
	myImages[14] = "Images/Lee 3.jpg";
	myImages[15] = "Images/Lee 4.jpg";
	myImages[16] = "Images/Ali 1.jpg";
	myImages[17] = "Images/Ali 2.jpg";
	myImages[18] = "Images/Ali 3.jpg";
	myImages[19] = "Images/Ali 4.jpg";
	myImages[20] = "Images/Pacquiao 1.jpg";
	myImages[21] = "Images/Pacquiao 2.jpg";
	myImages[22] = "Images/Pacquiao 3.jpg";
	myImages[23] = "Images/Pacquiao 4.jpg";
	myImages[24] = "Images/Tesla 1.jpg";
	myImages[25] = "Images/Tesla 2.jpg";
	myImages[26] = "Images/Tesla 3.jpg";
	myImages[27] = "Images/Tesla 4.jpg";
	myImages[28] = "Images/Plato 1.jpg";
	myImages[29] = "Images/Plato 2.jpg";
	myImages[30] = "Images/Plato 3.jpg";
	myImages[31] = "Images/Plato 4.jpg";
	myImages[32] = "Images/Castro 1.jpg";
	myImages[33] = "Images/Castro 2.jpg";
	myImages[34] = "Images/Castro 3.jpg";
	myImages[35] = "Images/Castro 4.jpg";
	myImages[36] = "Images/Mozart 1.jpg";
	myImages[37] = "Images/Mozart 2.jpg";
	myImages[38] = "Images/Mozart 3.jpg";
	myImages[39] = "Images/Mozart 4.jpg";
	var myImagesLength = myImages.length;

	var rnd2 = Math.floor(Math.random() * myImages.length);

	var newArr = getArrayOfRandType(randomType,myImagesLength);
	
	showRandomImages(newArr);
}

	function showRandomImages (arr){	
		for (var i = 0; i < arr.length; i++) {		
		document.getElementById("imgPlace" + (i+1)).src = arr[i];
			
		}
	}  

	
	function getArrayOfRandType(randType, length) {
		var arr = [];
		for (var i =0; i<length; i++)
		{
			if ( myImages[i].includes(randType))
			{				
				arr.push(myImages[i]);
			}
		}
		arr = shuffle(arr);	
		return arr;		
	}

	function shuffle (arr) {
		var currentIndex = arr.length, temporaryValue, randomIndex;
  
  		while (0 !== currentIndex) {
    
	    randomIndex = Math.floor(Math.random() * currentIndex);   currentIndex -= 1; 	    
	    temporaryValue = arr[currentIndex];
	    arr[currentIndex] = arr[randomIndex];
	    arr[randomIndex] = temporaryValue;
	  }

	  	return arr;
}
	function checkIfTrue (){
		var x = document.getElementById("frm");
		var text = "";
		var i;
		for ( i = 0; i < x.length; i++) {
			text += x.elements[i].value;
		}	
		if (text == randomType)
		{
			var teis = document.getElementById("AtsakymoTeisingumas");
			teis.innerHTML= "Atsakymas teisingas";
			teis.style.color = '#006400';
			showFullFaceImage(text);
			deleteType(myImageTypes, text);	
			addToSideBar(text);
			
			loadBio(text);			
			
		}
		
		else
		{
			var nteis = document.getElementById("AtsakymoTeisingumas");
			nteis.innerHTML= "Atsakymas neteisingas";
			nteis.style.color = '#5e081b';
		}
			
	}
	function loadBio(text) {

			document.getElementById("f").src = "Bio/" + text + ".html";
			if (text == null)
			document.getElementById("f").src = "Bio/"+"instrukcija.html";
	  
	  
	}

	function deleteType (imgTypes, text)	{
		var index = imgTypes.indexOf(text);
		if (index > -1)
		imgTypes.splice(index, 1);
	
	}     
	function showFullFaceImage (txt){
		for (var i = 1; i <= 4; i++) {
			
		document.getElementById("imgPlace" + i).src = "";
		}	
		document.getElementById("FullImage2").src = "Images/" + txt + ".jpg";  
	}

	function showAnother (){
		
		document.getElementById("AtsakymoTeisingumas").innerHTML = "";
		document.getElementById("inputText").value = '';		
		var rnd = Math.floor(Math.random() * myImageTypes.length);
		 randomType = myImageTypes[rnd];
		var rnd2 = Math.floor(Math.random() * myImages.length);

		var newArr = getArrayOfRandType(randomType,myImages.length);
		
		document.getElementById("FullImage2").src = "";
		showRandomImages(newArr);
		if (myImageTypes==0)
			gameEnd();
	}

	function addToSideBar (text)	{
		var mydiv = document.getElementById("sidebar");
			var newcontent = document.createElement("p");

			if (!sidebar.innerHTML.includes(text))
			{

			newcontent.innerHTML = text + "<br>";
			
			}			
			
			
			while (newcontent.firstChild) 
				mydiv.appendChild(newcontent.firstChild);
	}

	function gameEnd ()	{
		alert ("Sveikiname! Jūs jau žinote visas asmenybes. Žaidimas yra baigtas")
		document.getElementById("inputText").src="";
		
	}

