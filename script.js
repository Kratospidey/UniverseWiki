document.addEventListener("DOMContentLoaded", function () {
	const container = document.querySelector(".dotted-background");
	const containerWidth = container.offsetWidth;
	const containerHeight = container.offsetHeight;

	for (let i = 0; i < containerHeight / 8; i++) {
		// Change 100 to however many dots you want
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dot.style.width = dot.style.height = `${Math.random() * 5 + 1}px`; // Random size between 1px and 5px
		dot.style.left = `${Math.random() * containerWidth}px`;
		dot.style.top = `${Math.random() * containerHeight}px`;

		container.appendChild(dot);
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const hero = document.querySelector(".hero");
	const heroOffsetTop = hero.offsetTop;

	window.addEventListener("scroll", function () {
		if (window.pageYOffset > heroOffsetTop) {
			hero.classList.add("sticky-blur");
		} else {
			hero.classList.remove("sticky-blur");
		}
	});
});
