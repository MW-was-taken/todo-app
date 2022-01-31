// append task to task list
var e = document.getElementById("tasks");
append = function () {
	var today = new Date();
	var date = today.toLocaleString("en-US");
	var x = document.getElementById("task-title");
	e.innerHTML += '<h4 class="med-emphasis">' + x.value + " | " + date + "</h4>";
	x.value = null;
};

clearList = function () {
	e.innerHTML = null;
};
