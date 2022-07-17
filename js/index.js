document.addEventListener("DOMContentLoaded", () => {
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

			if (window.screen.width > 900) {
				setThreeCol();
			} else if (window.screen.width <= 900 && window.screen.width > 600) {
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
