document.addEventListener("DOMContentLoaded", () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll(".navbar-burger"),
		0
	);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach((el) => {
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}

	// work masonry
	const masonry = () => {
		const grid = document.querySelector(".grid"),
			gridList = document.querySelector(".grid-list"),
			gridItem = document.querySelectorAll(".grid-item");

		const setThreeCol = () => {
			const col1 = document.createElement("div");
			col1.setAttribute("class", "grid-col");
			grid.appendChild(col1);

			const col2 = document.createElement("div");
			col2.setAttribute("class", "grid-col");
			grid.appendChild(col2);

			const col3 = document.createElement("div");
			col3.setAttribute("class", "grid-col");
			grid.appendChild(col3);

			gridItem.forEach((item, index) => {
				if (index % 3 == 0) {
					col1.appendChild(item);
				} else if (index % 3 == 1) {
					col2.appendChild(item);
				} else {
					col3.appendChild(item);
				}
			});
		};

		const setTwoCol = () => {
			const col1 = document.createElement("div");
			col1.setAttribute("class", "grid-col");
			grid.appendChild(col1);

			const col2 = document.createElement("div");
			col2.setAttribute("class", "grid-col");
			grid.appendChild(col2);

			gridItem.forEach((item, index) => {
				if (index % 2 == 0) {
					col1.appendChild(item);
				} else {
					col2.appendChild(item);
				}
			});
		};

		const setOneCol = () => {
			const col1 = document.createElement("div");
			col1.setAttribute("class", "grid-col");
			grid.appendChild(col1);

			gridItem.forEach((item, index) => {
				col1.appendChild(item);
			});
		};

		const setCols = () => {
			const gridCols = document.querySelectorAll(".grid-col");
			if (gridCols) {
				gridCols.forEach((col) => {
					col.remove();
				});
			}

			if (gridList) {
				gridList.remove();
			}

			if (window.screen.width > 820) {
				setThreeCol();
			} else if (window.screen.width <= 820 && window.screen.width > 425) {
				setTwoCol();
			} else {
				setOneCol();
			}
		};

		setCols();

		let resizeTimer;
		window.addEventListener("resize", () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				setCols();
			}, 250);
		});
	};

	masonry();
});
