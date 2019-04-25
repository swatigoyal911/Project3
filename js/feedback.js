$("#submit").click(function(){
	if($("#name").val()==""){
		$("#name").val("Name");
	}
	$("#bod").append("<tr>"+
		"<td>"+$("#name").val()+"</td>"+
		"<td>"+$("#comments").val()+"</td>"+
		"</tr>");
});

var count=0;
if(localStorage.getItem("like")) {
    count=localStorage.getItem("like");
} 
else{
    localStorage.setItem("like",count);
}
$("span").html(count);

$("#button").click(function(){
    count=Number(localStorage.getItem("like"))+1; 
    localStorage.setItem("like",count);
	$("span").html(count);
});

$(window).bind("resize",function(){
	if($(window).width()>820){
		$(".top-right-section").show();
	}else{
		$(".top-right-section").hide();
	}
})

$("#icon").click(function(){
	$(".top-right-section").toggle();
});