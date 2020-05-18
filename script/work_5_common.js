$(document).ready(function() {
	let a=$(".main-page__header_menu"),
		b=$(".main-page__header .burger"),
		c=$(".main-page__header_menu a");
		$(b).click(function(){
			$(a).toggleClass("active");
			$(b).toggleClass("active");
			$("body").toggleClass("lock");
		});
		$(c).click(function(){
			$(a).toggleClass("active");
			$(b).toggleClass("active");
			$("body").toggleClass("lock");
		});
		$(".main-page__header_menu a").click(function(event){
			event.preventDefault();
			let id=$(this).attr("href");
			let offset=$(id).offset().top;
			$("body, html").animate({scrollTop: offset}, 1000);
		});

		$(window).scroll(function(){
			let scroll=$(window).scrollTop();
			if (scroll>1200) {
				$(".arrowUP").show("slow");
			} else {
				$(".arrowUP").hide("slow");
			};
		});
		$(".arrowUP").click(function(){
			$("body, html").animate({scrollTop: 0}, 1000);
		})
});