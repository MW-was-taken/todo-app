
// append task to task list
var e = document.getElementById("tasks");
append = function () {
    var x = document.getElementById("task-title");
    e.innerHTML += '<h4 class="med-emphasis">' + x.value + '</h4>';
    x.value = null;
}

clearList = function () {
    e.innerHTML = null;
}