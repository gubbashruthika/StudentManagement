
function addStudent() {
    var name = document.getElementById("name").value;

    if (name == "") {
        alert("Enter student name");
    } else {
        var li = document.createElement("li");
        li.innerText = name;
        document.getElementById("list").appendChild(li);
    }
}
