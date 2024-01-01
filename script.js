document.addEventListener("DOMContentLoaded", function () {
	const hero = document.querySelector(".hero");
	const heroOffsetTop = hero.offsetTop;

	window.addEventListener("scroll", function () {
		if (window.pageYOffset > heroOffsetTop) {
			hero.classList.add("blur");
		} else {
			hero.classList.remove("blur");
		}
	});
});
