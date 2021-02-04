document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener('click', function(event){
		if(event.target.id === "ch1"){
			popup._items.rememCheckbox.items[0].checked = document.getElementById("ch1").checked;
		}
	});
});