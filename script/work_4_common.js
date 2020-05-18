$(document).ready(function () {
	// ==========================Fullscreen Works==============================
	let button=$(".work-fscrn__content__img_fbutton"),
		viewport=$(".work-fscrn__content__img, .work-fscrn__content_wrapper");

	$(button).click(function(){
		$(viewport).toggleClass("active");
	})
	//==========================scroll in menu click============================
		$(".main-page__header__menu a, .work-fscrn__header_menu a, .work-fscrn__header_arrowUP, .work-fscrn__content_back, .work-page__tiles-block_tile").click(function(event){
			event.preventDefault();
			let id=$(this).attr("href");
			let scroll=$(id).offset().top-60;
			$("body, html").animate({scrollTop: scroll},1000);
		})

		let w38=$(".work-page__tiles-block").offset().top;
		$(window).scroll(function(){
			let scroll=$(window).scrollTop();
			if (scroll<w38-60) {
				$(".work-fscrn__header").hide("slow");
			} else {
				$(".work-fscrn__header").show("slow");
			}
		})
	// ===========================works Fullscreen===============================

		let	index_small;
		let index_large=$(".work-fscrn__content__img>div");
		$(".work-page__tiles-block_tile").click(function(){
			index_small=$(this).index();
			console.log(index_small);
			$(index_large).css("display", "none");
			$(index_large[index_small]).css("display", "block");
			$(viewport).removeClass("active");
		})
})