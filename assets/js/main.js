/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);


function goToSlide(index) {
	const slidesContainer = document.querySelector('.slides');
	const slide = slidesContainer.children[index];
	if (slide) {
		slide.scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
			block: 'nearest'  // ← prevents vertical scrolling
		});
	}
}





function copyEmail() {
	const email = "adrien.houge@sund.ku.dk";
	navigator.clipboard.writeText(email).then(() => {
	  const badge = document.getElementById("copied-badge");
	  if (badge) {
		badge.classList.add("show");
		// Hide after 2.5 seconds with transition
		setTimeout(() => {
		  badge.classList.remove("show");
		}, 2500);
	  }
	}).catch(err => {
	  console.error("Failed to copy email:", err);
	  alert("Could not copy email. Please try manually.");
	});
  }
  











  // Hover motion effect on project boxes
document.querySelectorAll('.project-box').forEach(box => {
	box.addEventListener('mousemove', (e) => {
		const rect = box.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		box.style.transform = `scale(1.05) rotateX(${-y * 0.05}deg) rotateY(${x * 0.05}deg)`;
	});

	box.addEventListener('mouseleave', () => {
		box.style.transform = 'scale(1)';
	});
});

// Blur non-hovered project boxes
const boxes = document.querySelectorAll('.project-box');
boxes.forEach(box => {
	box.addEventListener('mouseenter', () => {
		boxes.forEach(otherBox => {
			if (otherBox !== box) {
				otherBox.style.filter = 'blur(1.35px) brightness(0.8)';
				otherBox.style.transform = 'scale(0.97)';
			}
		});
		box.style.filter = 'blur(0) brightness(1)';
		box.style.zIndex = 2;
	});

	box.addEventListener('mouseleave', () => {
		boxes.forEach(otherBox => {
			otherBox.style.filter = 'none';
			otherBox.style.transform = 'scale(1)';
			otherBox.style.zIndex = '';
		});
		box.style.zIndex = '';
	});
});
