var gallery = document.querySelector("#gallery");
gallery.querySelectorAll(".content").forEach(function (item) {
	item.addEventListener("click", () => {
		item.classList.toggle("full");
	});
});

console.log("Акитушки");
console.error("Пропали Акитушки");
console.warn("АКИТУШКИ ВСЁ ТАК ЖЕ ПРОПАЛИ, ИЩЕМ ИХ");
