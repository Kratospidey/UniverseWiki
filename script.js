document.addEventListener("DOMContentLoaded", function () {
	const hero = document.querySelector(".hero");
	const headerHeight = 50;

	window.addEventListener("scroll", function () {
		const scrollPosition = window.scrollY;

		// Instead of using hero.offsetTop, use a fixed value corresponding to the desired trigger point
		if (scrollPosition > headerHeight) {
			hero.classList.add("blur");
		} else {
			hero.classList.remove("blur");
		}
	});
});
