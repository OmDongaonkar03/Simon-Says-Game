//SimonSays.JS

	const randomColors= [
	"rgb(255, 87, 51)","rgb(51, 255, 87)","rgb(87, 51, 255)","rgb(255, 51, 87)", "rgb(87, 255, 51)","rgb(51, 87, 255)","rgb(231, 76, 60)","rgb(46, 204, 113)", "rgb(52, 152, 219)","rgb(241, 196, 15)","rgb(155, 89, 182)", "rgb(26, 188, 156)","rgb(255, 107, 107)","rgb(78, 205, 196)","rgb(69, 183, 209)","rgb(150, 206, 180)","rgb(255, 238, 173)","rgb(212, 165, 165)","rgb(155, 155, 155)","rgb(88, 214, 141)","rgb(245, 176, 65)","rgb(220, 118, 51)","rgb(170, 183, 184)","rgb(86, 103, 115)","rgb(205, 97, 85)","rgb(82, 190, 128)","rgb(84, 153, 199)","rgb(244, 208, 63)","rgb(142, 68, 173)","rgb(72, 201, 176)","rgb(236, 112, 99)","rgb(69, 179, 157)", "rgb(93, 173, 226)","rgb(245, 176, 65)","rgb(165, 105, 189)","rgb(22, 160, 133)","rgb(255, 140, 140)","rgb(108, 236, 196)","rgb(101, 183, 209)","rgb(166, 206, 180)","rgb(255, 237, 173)","rgb(228, 165, 165)","rgb(171, 171, 171)","rgb(104, 214, 141)","rgb(245, 192, 65)","rgb(236, 118, 51)","rgb(186, 183, 184)", "rgb(102, 101, 115)","rgb(221, 97, 85)","rgb(98, 190, 128)","rgb(100, 153, 199)", "rgb(244, 240, 63)","rgb(174, 68, 173)","rgb(104, 201, 176)","rgb(252, 128, 99)", "rgb(101, 179, 157)","rgb(125, 173, 226)","rgb(245, 192, 65)","rgb(197, 105, 189)","rgb(54, 160, 133)","rgb(255, 172, 140)","rgb(140, 236, 196)","rgb(133, 183, 209)","rgb(198, 206, 180)","rgb(255, 206, 173)","rgb(228, 181, 165)","rgb(203, 171, 171)","rgb(136, 214, 141)","rgb(245, 224, 65)","rgb(252, 134, 51)","rgb(218, 183, 184)","rgb(134, 101, 115)","rgb(253, 97, 85)","rgb(130, 190, 128)","rgb(132, 153, 199)","rgb(244, 255, 63)","rgb(190, 68, 173)","rgb(120, 201, 176)"];
	
	var FirstArr =[];
	var sequence = [];
	
	var Random1 =randomColors[Math.floor(Math.random() * randomColors.length)];
	var Random2 =randomColors[Math.floor(Math.random() * randomColors.length)];
	var Random3 =randomColors[Math.floor(Math.random() * randomColors.length)];
	
	sequence.push(Random1),FirstArr.push(Random1);
	sequence.push(Random2),FirstArr.push(Random2);
	sequence.push(Random3),FirstArr.push(Random3);
	for(var a=1;a<=3;a++){
		document.getElementById(`block${a}`).style.backgroundColor = sequence[a-1];
	}
function startgame(){
	document.getElementById('ColorContainer').style.display = "none";
	document.getElementById('start-button').style.display = "none";
	
	document.getElementById('SelectedColorContainer').style.display = "flex";
	document.getElementById('OptionBlock').style.display = "flex";
	document.getElementById('submit-button').style.display = "grid";
	
	var optioncolor1 = document.getElementById('optioncolor1');
	var optioncolor2 = document.getElementById('optioncolor2');
	var optioncolor3 = document.getElementById('optioncolor3');
	
	let indexes = [0, 1, 2];
	indexes.sort(() => Math.random() - 0.5);
	
	optioncolor1.style.backgroundColor = sequence[indexes[0]];
	optioncolor2.style.backgroundColor = sequence[indexes[1]];
	optioncolor3.style.backgroundColor = sequence[indexes[2]];
	
}

var clickcounter = 3;
var selectedcolorArr =[];
function process(element){
	var identity = element.id;
	
	var colorOne =document.getElementById('optioncolor1').style.backgroundColor;
	var colortwo =document.getElementById('optioncolor2').style.backgroundColor;
	var colortrd =document.getElementById('optioncolor3').style.backgroundColor;
	
	if(identity=='optioncolor1'){
		if(clickcounter==3){
			document.getElementById('Selectedblock1').style.backgroundColor = colorOne;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}else if(clickcounter==2){
			document.getElementById('Selectedblock2').style.backgroundColor = colorOne;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}else{
			document.getElementById('Selectedblock3').style.backgroundColor = colorOne;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}
		selectedcolorArr.push(colorOne);
	}
	if(identity=='optioncolor2'){
		if(clickcounter==3){
			document.getElementById('Selectedblock1').style.backgroundColor = colortwo;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}else if(clickcounter==2){
			document.getElementById('Selectedblock2').style.backgroundColor = colortwo;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}else{
			document.getElementById('Selectedblock3').style.backgroundColor = colortwo;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}
		selectedcolorArr.push(colortwo);
	}
	if(identity=='optioncolor3'){
		if(clickcounter==3){
			document.getElementById('Selectedblock1').style.backgroundColor = colortrd;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}else if(clickcounter==2){
			document.getElementById('Selectedblock2').style.backgroundColor = colortrd;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}else{
			document.getElementById('Selectedblock3').style.backgroundColor = colortrd;
			document.getElementById(identity).style.display = "none";
			clickcounter--
		}
		selectedcolorArr.push(colortrd);
	}
}
	
function arraysAreEqual(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

function submit(){
    console.log(selectedcolorArr);
    console.log(FirstArr);
	document.getElementById('submit-button').style.display = "none";
	
    if (arraysAreEqual(selectedcolorArr, FirstArr)) {
		document.getElementById('result').style.display = "flex";
		document.getElementById('result').innerHTML = "Correct!";
		document.getElementById('next').style.display = "flex";
    } else {
        document.getElementById('result').style.display = "flex";
		document.getElementById('result').innerHTML = "Incorrect!";
    }
}
function Next(){
	selectedcolorArr = [];
    FirstArr = [];
    sequence = [];
	clickcounter = 3;
	
    document.getElementById('result').style.display = "none";
    document.getElementById('next').style.display = "none";
    
	for(var i=1;i<=3;i++){
		document.getElementById(`Selectedblock${i}`).style.backgroundColor = "";
    }
    
    random1 = randomColors[Math.floor(Math.random() * randomColors.length)];
    random2 = randomColors[Math.floor(Math.random() * randomColors.length)];
    random3 = randomColors[Math.floor(Math.random() * randomColors.length)];
    
    sequence.push(random1), FirstArr.push(random1);
    sequence.push(random2), FirstArr.push(random2);
    sequence.push(random3), FirstArr.push(random3);
	
    for(var i=1;i<=3;i++){
    document.getElementById(`block${i}`).style.backgroundColor = sequence[i-1];
    }
	document.getElementById('ColorContainer').style.display = "flex";
    document.getElementById('start-button').style.display = "grid";

    document.getElementById('SelectedColorContainer').style.display = "none";
    document.getElementById('OptionBlock').style.display = "none";
    document.getElementById('submit-button').style.display = "none";
    
    var optioncolor1 = document.getElementById('optioncolor1');
    var optioncolor2 = document.getElementById('optioncolor2');
    var optioncolor3 = document.getElementById('optioncolor3');
    
    optioncolor1.style.display = "flex";
    optioncolor2.style.display = "flex";
    optioncolor3.style.display = "flex";
    
    let indexes = [0, 1, 2];
    indexes.sort(() => Math.random() - 0.5);
    
    optioncolor1.style.backgroundColor = sequence[indexes[0]];
    optioncolor2.style.backgroundColor = sequence[indexes[1]];
    optioncolor3.style.backgroundColor = sequence[indexes[2]];
    
    clickcounter = 3;
	
}