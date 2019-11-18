$(document).ready(function(){
		var slide = $("#slide_box").find("ul");

		var slideCount = slide.length;
		var slideWidth = $("#slide_box ul li").width();
		var slideHeight = $("#slide_box ul li").height();
		var sliderUlWidth = slideCount * slideWidth;
		var rollingId;

		rollingId = setInterval(function() {rollingStart();}, 3000);

		slide.mouseover(function(){
			clearInterval(rollingId);
			$(this).css("cursor", "pointer");
		});

		slide.mouseout(function(){
			rollingId = setInterval(function() {rollingStart();},3000);
			$(this).css("cursor", "default");
		});

		function rollingStart() {
			slide.animate({left: - slideWidth},1500, function(){
				$("#slide_box ul li:first-child").appendTo("#slide_box ul");
				$(this).css("left","");
		});
	};
});

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 1500){
            $("div #txt5").animate({"margin-left":"5%", "opacity":"0.5"},1400);
        }
        if($(window).scrollTop() > 1800) {
            $("#contact").animate({"margin-top":"30%", "opacity":"1"},1500);
        }
    });
});


$(function(){
    $("#Btn").on("click", function(){
        $("#modal3").slideToggle();
        $(this).html("<p>thank you!</p>");
    });
});


function goTab(Name, elmnt) {
    var tabcontent, tabtn, i;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(Name).style.display ="block";
    }
    document.getElementById("defaultOpen").click();