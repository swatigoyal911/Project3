window.onscroll=function(){
	if (window.pageYOffset >= sticky) {
    	document.getElementsByTagName("header")[0].classList.add("sticky")
  	} 
  	else {
    	document.getElementsByTagName("header")[0].classList.remove("sticky");
  	}
}

document.getElementById("top-left").onmouseover=function(){
	this.style.color="white";
}
document.getElementsByTagName("header")[0].style.position="fixed";
document.getElementsByTagName("header")[0].style.top=0;
document.getElementById("top-left").onmouseout=function(){
	this.style.color="#9d9d9d";
}

var x=document.getElementById("top-right").querySelectorAll("a");
for(var i=0;i<x.length;i++){
	x[i].onmouseover=function(){
		this.style.color="white";
	}
	x[i].onmouseout=function(){
		this.style.color="#9d9d9d";
	}
}

var x=document.getElementsByTagName("footer")[0].querySelectorAll("a");
for(var i=0;i<x.length;i++){
	x[i].onmouseover=function(){
		this.style.color="white";
	}
	x[i].onmouseout=function(){
		this.style.color="#9d9d9d";
	}
}
var imgSrc=["../img/quote1.jpg","../img/quote2.jpg","../img/quote3.jpg","../img/quote4.jpg","../img/quote5.jpg"];
var imgCount=0;
$("#img").click(function(){
	imgCount=(imgCount+1)%5;
	$(this).attr("src",imgSrc[imgCount]);
});