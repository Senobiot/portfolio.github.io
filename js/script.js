	let preloader=$('.preloader-wrapper'),
		logo=$('.logo');
		for (i = 0; i < 100; i++) {
		$(logo).fadeToggle(500);
		};

		$(window).on('load', function () {

		preloader.delay(500).fadeOut('slow');
		$(".preloadall").css("display", "none");

	let blink={'animation-name': 'blink',
				'animation-duration': '1.2s',
				'animation-iteration-count': 'infinite',
				'animation-timing-function': 'linear'
				},

		lenta_top={'background-position': '300% 0',
				transition: '2s ease-in-out'
				},

		lenta_bottom={'background-position': '-300% 0',
				transition: '2s ease-in-out'
			},
		lenta_zero={'background-position': '0 0',
					transition: '0s'
				},
		about_out={	perspective: '100vw',
				rotate3d: '1,1,0, 180deg',
				rotate:0,
				duration: 500},

		contacts_out={transform: 'perspective(100vw) rotateX(180deg) rotateY(180deg)'};


			$('.photo_1').css(lenta_top);
			$('.photo_2').css(lenta_bottom);


			setTimeout(function () {
				$('.photo_1, .photo_2').css(lenta_zero);
				}, 2000);

			$('.arrow').click(function(){
				$('.wrapper').transition({
				perspective: '100vw',
				rotate3d: '1,0,0, 90deg',
				duration: 1800});
				setTimeout(function () {
					$('.portfolio').addClass('active').animate({opacity: 1}, 1000);
					// $('.work').animate({opacity: 0.5}, 2000);
				}, 1000);
			});

			$('.go_home').click(function(){
				$('.text:first-child').removeClass('active').css({
						'animation': 'none'
						});
				$('.portfolio').removeClass('active');
				$('.portfolio').css({opacity:0});
				$('.wrapper').transition({
				perspective: '100vw',
				rotate3d: '1,0,0, 0deg',
				duration: 500});
				setTimeout(function () {
				$('.portfolio_description').transition({
					perspective: '100vw',
					rotate3d: '0,1,0, 180deg',
					duration: 500
					});}, 500);
				setTimeout(function(){
					$('.portfolio_description').css("display", "none");
				}, 501);
				setTimeout(function () {
						$('.photo_1').css(lenta_top);
						$('.photo_2').css(lenta_bottom);}, 800);
				setTimeout(function () {
				$('.portfolio_description').removeClass('active').transition({
						perspective: '100vw',
						rotate3d: '0,1,0, 0deg',
						rotate: '5deg',
						duration: 0
						});
				$('.perspective').transition({
					perspective: '100vw',
					rotateY: '-360deg',
					duration: 2000
					});
				setTimeout(function () {
					$('.perspective').css({
						'background-image': "url('img/camera1.jpg')",
						'transition': '0.5s linear',
						'-webkit-transition': '0.5s linear',
						'-o-transition': '0.5s linear',
						'-ms-transition': '0.5s linear'
						})
				}, 800);
				}, 1050);
				setTimeout(function () {$('.photo_1, .photo_2').css(lenta_zero);}, 2800);
			});

// ==========================Clicking menu=====================================================

		$('.text').click(function(){
			if ($(this).hasClass('active')) {
				// do nothing
			}

// ======================================Contacts Page ==========================================

			 else if ($(this).is($('.text:last-child'))) {


			$('.about').transition(about_out);

				$(this).addClass('active');

				$('.text').not($(this)).removeClass('active');

				$('.text').not($(this)).css({
						'animation': 'none'
						});

				$(this).css(blink);

				$('.perspective').transition({
					perspective: '100vw',
					rotateY: '360deg',
					duration: 2000
					});

				$('.perspective').transition({
					rotateY: '0',
					duration: 0
					});

			$('.photo_1').css(lenta_top);
			$('.photo_2').css(lenta_bottom);

			$('.portfolio_description').transition({
				perspective: '100vw',
				rotate3d: '0,1,0, 180deg',
				duration: 750
				});
			setTimeout(function(){
					$('.portfolio_description').css("display", "none");
				}, 751);
			setTimeout(function () {$('.photo_1, .photo_2').css(lenta_zero);}, 2000);

				setTimeout(function () {
					$('.perspective').css({
						'background-image': "url('img/camera6.jpg')",
						'transition': '0.5s linear',
						'-webkit-transition': '0.5s linear',
						'-o-transition': '0.5s linear',
						'-ms-transition': '0.5s linear'
						});
					$('.portfolio_description').removeClass('active').transition({
						perspective: '100vw',
						rotate3d: '0,1,0, 0deg',
						rotate: '5deg',
						duration: 0
						});
				}, 800);

				setTimeout(function () {
					$('.contact').css({transform: 'perspective(100vw) rotateX(0deg) rotateY(0deg) rotateZ(-12deg)'});
						}, 1000);
				
			} 

// ============================Portfolio page =========================================

			else if ($(this).is($('.text:first-child'))) {
				$(this).addClass('active');

				$('.text').not($(this)).removeClass('active');

				$('.text').not($(this)).css({
						'animation': 'none'
						});

				$(this).css(blink);

				$('.about').transition(about_out);
				$('.contact').css(contacts_out);

				$('.perspective').transition({
					perspective: '100vw',
					rotateY: '360deg',
					duration: 2000
					});

				$('.perspective').transition({
					rotateY: '0',
					duration: 0
					});

			$('.photo_1').css(lenta_top);
			$('.photo_2').css(lenta_bottom);


			setTimeout(function () {$('.photo_1, .photo_2').css(lenta_zero);}, 2000);


				setTimeout(function () {
					$('.perspective').css({
						'background-image': "url('img/camera4.jpg')",
						'transition': '0.5s linear',
						'-webkit-transition': '0.5s linear',
						'-o-transition': '0.5s linear',
						'-ms-transition': '0.5s linear'
						})
				}, 800);
				setTimeout(function () {$('.portfolio_description').css("display", "block").addClass('active');}, 2000);
			} 

// ===========================================About Page=========================================

			else if ($(this).is($('.text:nth-child(2)'))) {
				$(this).addClass('active');

				$('.text').not($(this)).removeClass('active');

				$('.text').not($(this)).css({
						'animation': 'none'
						});

				$(this).css(blink);

				$('.contact').css(contacts_out);

				$('.perspective').transition({
					perspective: '100vw',
					rotateY: '360deg',
					duration: 2000
					});

					$('.perspective').transition({
					rotateY: '0',
					duration: 0
					});

			$('.photo_1').css(lenta_top);
			$('.photo_2').css(lenta_bottom);


			$('.portfolio_description').transition({
					perspective: '100vw',
					rotate3d: '0,1,0, 180deg',
					duration: 750
					});
			setTimeout(function(){
					$('.portfolio_description').css("display", "none");
				}, 751);
			setTimeout(function () {$('.photo_1, .photo_2').css(lenta_zero);}, 2000);

				setTimeout(function () {
					$('.perspective').css({
						'background-image': "url('img/camera3.jpg')",
						'transition': '0.5s linear',
						'-webkit-transition': '0.5s linear',
						'-o-transition': '0.5s linear',
						'-ms-transition': '0.5s linear'
						});
					$('.portfolio_description').removeClass('active').transition({
						perspective: '100vw',
						rotate3d: '0,1,0, 0deg',
						rotate: '5deg',
						duration: 0
						});

				}, 800);

				setTimeout(function () {
			$('.about').transition({
					perspective: '100vw',
					rotate3d: '1,1,0, 0deg',
					rotate: '12deg',
					duration: 1000
					});
				}, 1000);

			}
		});
});