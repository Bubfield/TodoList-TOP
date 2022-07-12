let todoItem = {
  title: "Groceries",
  description: "getting what I need from the store",
  dueDate: "7/12/2022",
  priority: "Priority 1",
  notes: "guacamole, bread, hummus, maybe some chicken or steak",
};

let project = {
  todoItem,
};

const addTask = document.getElementById("add-task");
const addTaskBig = document.getElementById("add-task-bigger");

let list = document.getElementById("list");
let container = document.createElement("div");
let div = document.createElement("div");
let input = document.createElement("input");
let textarea = document.createElement("textarea");
let addSubmit = document.createElement("button");
let cancel = document.createElement("button");
container.className = "add-task-container";
input.className = "input-title";
input.setAttribute("placeholder", "title");
textarea.setAttribute("placeholder", "description");
addSubmit.className = "add-submit";
addSubmit.setAttribute("type", "submit");
cancel.className = "cancel";
addSubmit.textContent = "Add task";
cancel.textContent = "Cancel";
div.append(input);
container.append(div, textarea, addSubmit, cancel);
addTaskBig.append(container);
container.style.display = "none";

addTask.addEventListener("click", function () {
  addTask.style.display = "none";
  container.style.display = "block";

  input.focus();

  addSubmit.addEventListener("click", function () {
    const listItem = document.createElement("li");
    const titleH3 = document.createElement("h3");
    const descriptionP = document.createElement("p");
    titleH3.textContent = input.value;
    descriptionP.textContent = textarea.value;
    listItem.append(titleH3, descriptionP);
    list.append(listItem);
    input.value = "";
    textarea.value = "";
  });

  cancel.addEventListener("click", function () {
    input.value = "";
    textarea.value = "";
    container.style.display = "none";
    addTask.style.display = "inline-block";
  });
});
