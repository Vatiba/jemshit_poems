function drawPoemsWindow(){

	var container = $(".container").empty();

	container.append("<div class='text-center pt-2'><h1 class='font-family-title font-size-50'>Şygyrlar</h1></div>");
	
	container.append("<div class='p-2 pb-5 mb-5 select-list-poem'></div>");

	for(var x = 0; x < poems.length; x++){
		$(".select-list-poem").append("<h4 class='pt-2'>" + poems[x]["title"] + "</h4>");
	}
	container.append("<div class='d-flex justify-content-around font-size-55 fixed-bottom pb-3 pt-3 " + setColorWindow() + " change-color border-top'><i id='align-justify' class='fas fa-align-justify icon-select icon-yellow'></i><i id='heart' class='fas fa-heart icon-select'></i><i id='tools' class='fas fa-tools icon-select'></i><i id='lightbulb' class='fas fa-lightbulb icon-select'></i></div>");
	poemSelect(1);
	iconsSelect();
}

function drawFavoritesWindow(){
	var container = $(".container").empty();
	container.append("<div class='text-center pt-2'><h1 class='font-family-title' style='font-size: 50px'>Halanlarym</h1></div>");

	container.append("<div class='p-2 pb-5 mb-5 select-list-poem'></div>");

	for(var x = 0; x < poems.length; x++){
		if(localStorage.getItem(poems[x]["title"]) === null){
			continue
		}
		else{
			$(".select-list-poem").append("<h4 class='pt-2'>" + poems[x]["title"] + "</h4>");
		}
	}

	container.append("<div class='d-flex justify-content-around font-size-55 fixed-bottom pb-3 pt-3 " + setColorWindow() + " change-color border-top'><i id='align-justify' class='fas fa-align-justify icon-select'></i><i id='heart' class='fas fa-heart icon-select icon-yellow'></i><i id='tools' class='fas fa-tools icon-select'></i><i id='lightbulb' class='fas fa-lightbulb icon-select'></i></div>");
	poemSelect(2);
	iconsSelect();
};

function drawSettingsWindow(){
	container = $(".container").empty();
	$("body").addClass("font-size-24");
	container.append("<div class='font-family-title font-size-50 pt-3 text-center'>Sazlamalar</div>")

	container.append("<div class='font-size-24 pt-2 pb-3 text-center'>Arka reňkini üýtgetmek:</div")

	container.append("<div class='pl-4 pt-2 select-option'></div>")

	$(".select-option").append("<div class='custom-control custom-radio mb-4'><input type='radio' class='custom-control-input' id='customControlValidation1' name='radio-stacked' required " + checkColorWindow("bg-white") + "><label class='custom-control-label' for='customControlValidation1'>Ak (esasy reňk)</label></div><div class='custom-control custom-radio mb-4'><input type='radio' class='custom-control-input' id='customControlValidation2' name='radio-stacked' required " + checkColorWindow("bg-black") + "><label class='custom-control-label' for='customControlValidation2'>Gara</label></div><div class='custom-control custom-radio mb-4'><input type='radio' class='custom-control-input' id='customControlValidation3' name='radio-stacked' required " + checkColorWindow("bg-blue") + "><label class='custom-control-label' for='customControlValidation3'>Gök</label></div><div class='custom-control custom-radio mb-4'><input type='radio' class='custom-control-input' id='customControlValidation4' name='radio-stacked' required " + checkColorWindow("bg-brown") + "><label class='custom-control-label' for='customControlValidation4'>Goňur</label></div>");

	container.append("<div class='font-size-24 pb-4 text-center'>Goşgularyň tekstiniň ölçegi:</div>")
	container.append("<div class='pl-4 pb-5 mb-5'><div class='custom-control custom-radio mb-4'><input type='radio' class='custom-control-input' id='customControl1' name='stacked' required " + checkFontSize("font-size-20") + "><label class='custom-control-label' for='customControl1'>20</label></div><div class='custom-control custom-radio mb-4'><input type='radio' class='custom-control-input' id='customControl2' name='stacked' required " + checkFontSize("font-size-24") + "><label class='custom-control-label' for='customControl2'>22</label></div><div class='custom-control custom-radio mb-4'><input type='radio' class='custom-control-input' id='customControl3' name='stacked' required " + checkFontSize("font-size-28") + "><label class='custom-control-label' for='customControl3'>24</label></div></div>");
	
	container.append("<div class='d-flex justify-content-around font-size-55 fixed-bottom pb-3 pt-3 " + setColorWindow() + " change-color border-top'><i id='align-justify' class='fas fa-align-justify icon-select'></i><i id='heart' class='fas fa-heart icon-select'></i><i id='tools' class='fas fa-tools icon-select icon-yellow'></i><i id='lightbulb' class='fas fa-lightbulb icon-select'></i></div>");
	iconsSelect();
	changeColor();
	changeFontSize();
};
	
function drawAboutUsWindow(){
	container = $(".container").empty();
	container.append("<div class='container'><div class='font-size-50 font-family-title pt-1 text-center'>Biz barada</div><div class='text-center font-size-20 font-family-title'>Goşgy bir sungatdyr, sözleň çeşmesi<br>Goşgy bir gudratdyr, Taňryň peşgeşi<br>Goşgy bir ylhamdyr kalbyň keşdesi<br>Goşgy her ynsanyň soňlanmaz sesi</div><div class='text-center p-4'><img class='img-fluid' src='img/121.png'></div><div class='text-center font-size-24 pb-5 mb-5'>Programmany döreden:<br>Bezirgen Ýaýlymow<br>Şygyrlaryň awtory:<br>Jemşit Hajymämmedow</div></div>")

	container.append("<div class='d-flex justify-content-around font-size-55 fixed-bottom pb-3 pt-3 " + setColorWindow() + " change-color border-top'><i id='align-justify' class='fas fa-align-justify icon-select'></i><i id='heart' class='fas fa-heart icon-select'></i><i id='tools' class='fas fa-tools icon-select'></i><i id='lightbulb' class='fas fa-lightbulb icon-select icon-yellow'></i></div>");
	iconsSelect();
};

function changeFontSize(){
	$("#customControl1").click(function(){
		localStorage.setItem("font-size", "20");
		$("p").addClass("font-size-20");
		$("p").removeClass("font-size-24");
		$("p").removeClass("font-size-28");
	});
	$("#customControl2").click(function(){
		localStorage.setItem("font-size", "24");
		$("p").addClass("font-size-24");
		$("p").removeClass("font-size-20");
		$("p").removeClass("font-size-28");
	});
	$("#customControl3").click(function(){
		localStorage.setItem("font-size", "28");
		$("p").addClass("font-size-28");
		$("p").removeClass("font-size-20");
		$("p").removeClass("font-size-24");
	});
}

function setFontSize(){
	var size = localStorage.getItem("font-size");
	switch(size){
		case null:
			return "font-size-20";
			break;
		case "20":
			return "font-size-20";
			break;
		case "24":
			return "font-size-24";
			break;
		case "28":
			return "font-size-28";
			break;
	}
}

function checkFontSize(size){
	var setFont = setFontSize()
	if(setFont == size)
		return "checked=''";
	else
		return "";
}





function changeColor(){
	$("#customControlValidation1").click(function(){
		localStorage.setItem("change-color", "bg-white");
		$(".change-color").addClass("bg-white");
		$(".change-color").removeClass("bg-black");
		$(".change-color").removeClass("bg-blue");
		$(".change-color").removeClass("bg-brown");
	});
	$("#customControlValidation2").click(function(){
		localStorage.setItem("change-color", "bg-black");
		$(".change-color").removeClass("bg-white");
		$(".change-color").addClass("bg-black");
		$(".change-color").removeClass("bg-blue");
		$(".change-color").removeClass("bg-brown");
	});
	$("#customControlValidation3").click(function(){
		localStorage.setItem("change-color", "bg-blue");
		$(".change-color").removeClass("bg-white");
		$(".change-color").removeClass("bg-black");
		$(".change-color").addClass("bg-blue");
		$(".change-color").removeClass("bg-brown");
	});
	$("#customControlValidation4").click(function(){
		localStorage.setItem("change-color", "bg-brown");
		$(".change-color").removeClass("bg-white");
		$(".change-color").removeClass("bg-black");
		$(".change-color").removeClass("bg-blue");
		$(".change-color").addClass("bg-brown");
	});
}

function setColorWindow(){
	var color = localStorage.getItem("change-color");
	switch(color){
		case null:
			return "bg-white";
			break;
		case "bg-white":
			return "bg-white";
			break;
		case "bg-black":
			return "bg-black";
			break;
		case "bg-blue":
			return "bg-blue";
			break;
		case "bg-brown":
			return "bg-brown";
			break;
	}
}

function checkColorWindow(color){
	var setColor = setColorWindow()
	if(setColor == color)
		return "checked=''";
	else
		return "";
}


function poemSelect(item){
	$("h4").click(function(){

		var insideText= $(this)["0"]["innerText"];

		for(var x = 0; x < poems.length; x++){
			if(poems[x]["title"] == insideText){
				drawPoem(x, item);
			}
		}

	});
}

function drawPoem(index, boss_command){
	var container = $(".container").empty();
	var content = poems[index]["content"];

	container.append("<div class='text-center mb-5 pb-5 select-poem-div'></div>");

	$(".select-poem-div").append("<h2 class='pt-3 font-family-title font-size-45'>" + poems[index]["title"] + "</h2>");
	$(".select-poem-div").append("<div class='pt-3 font-size-20 select-poem'></div>");
	$(".select-poem-div").append("<div class='d-flex justify-content-around font-size-55 fixed-bottom pb-3 pt-3 " + setColorWindow() + " change-color border-top'>" + favoriteFindSelect(poems[index]["title"]) + "<i class='fas fa-arrow-left button-back'></i></div>")
	$(".select-poem").append(content);

	$("p").addClass(setFontSize());

	if(boss_command == 1){
		$(".button-back").click(function() {
			drawPoemsWindow()
		});
	}
	else if(boss_command == 2){
		$(".button-back").click(function() {
			drawFavoritesWindow()
		});
	}

	addToFavorite(poems[index]["title"])
}

function addToFavorite(titleOfPoem) {
	$("#heart-red").click(function() {

	if($(this).hasClass("heart-red")){
		$(this).removeClass("heart-red");

		localStorage.removeItem(titleOfPoem);
		console.log(localStorage.getItem(titleOfPoem));

	}
	else{
		$(this).addClass("heart-red");

		localStorage.setItem(titleOfPoem, titleOfPoem);
		console.log(localStorage.getItem(titleOfPoem));
	}
	});
}


function favoriteFindSelect(content){
	if(typeof localStorage.getItem(content) !== "undefined"){
		result = localStorage.getItem(content);
	}
	else{
		"<i id='heart-red' class='fas fa-heart icon-select'></i>"
	}
	if(result == content){
		return "<i id='heart-red' class='fas fa-heart heart-red icon-select'></i>";
	}
	else{
		return "<i id='heart-red' class='fas fa-heart icon-select'></i>";
	}
}



function iconsSelect() {
	$(".icon-select").click(function() {

		if($(this).hasClass("fa-align-justify")){
			drawPoemsWindow();
		}
		else if($(this).hasClass("fa-heart")){
			drawFavoritesWindow();
		}
		else if($(this).hasClass("fa-tools")){
			drawSettingsWindow();
		}
		else{
			drawAboutUsWindow();
		}

		element_i = $(this).parent().children();
		for (var x = 0; x < element_i.length; x++) {
			element_i.eq(x).removeClass("icon-yellow");
		}
		$(this).addClass("icon-yellow");

	});
}


drawPoemsWindow();
$("body").addClass(setColorWindow());