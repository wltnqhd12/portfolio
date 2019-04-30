/**
 * 
 */


$(function(){
	$(window).scroll(function(){
		var docSc = $(document).scrollTop();
		var list1 = $(".contentsBox1").offset().top - 100;
		var list2 = $(".contentsBox5").offset().top - 100;
		var list3 = $(".contentsBox4").offset().top - 100;
		var list4 = $(".contentsBox3").offset().top - 100;
		var list5 = $(".contentsBox2").offset().top - 100;
		var Title = $(".BodyTop");
		
		if(docSc < list2){
			Title.html("1.자기소개");
		}else if( docSc >= list2 && docSc <= list3){
			Title.html("2.스도쿠");
		}else if( docSc >= list3 && docSc <= list4){
			Title.html("3.엔시큐어");
		}else if( docSc >= list4 && docSc <= list5){
			Title.html("4.FINAL프로젝트");
		}else if(docSc >= list5){
			Title.html("5.SEMI프로젝트");
		}
		
	})
})

function move(seq){
		var offset = $(seq).offset();
		$('html,body').animate({scrollTop : offset.top - 50},400);
	}