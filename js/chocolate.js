$(document).ready(function(){
	
	//제품 메뉴
	$("main nav a").click(function(){
		$(this).addClass('act').siblings().removeClass('act');
		const t1 = $(this).text();
		const t2 = t1.toLowerCase();//"All" => "all"
		const t3 = $("main>div").find("." + t2);
		//"all" 아닐때
		if( t2 != "all" ) {			
			$("main section").hide();
			t3.show();			
		}else {//"all" 일때
			$("main section").show();
		}	
		
	});
	
});///////////////////////all end