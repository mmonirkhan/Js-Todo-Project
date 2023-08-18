const inputText = document.querySelector(".form-control");
const submitBtn = document.querySelector(".btn");
const historyDom = document.querySelector(".history");
const modalInput = document.getElementById("floatingTextarea");
const close = document.querySelector(".close-btn");
const del = document.querySelector(".delete-btn");
let selectTodoId;
let todoListItem;
let input = "",
  history = [
    {
      id: 1,
      todo: "hellow 1",
    },
    {
      id: 2,
      todo: "hellow 2",
    },
    {
      id: 3,
      todo: "hellow 3",
    },
    {
      id: 4,
      todo: "hellow 4",
    },
    {
      id: 5,
      todo: "hellow 5",
    },
  ];

inputText.addEventListener("change", (e) => {
  let value = e.target.value;
  input = value
    .split(" ")
    .filter((e) => e)
    .join(" ");
});

submitBtn.addEventListener("click", showResult);
function showResult() {
  if (input == "") {
    alert("input field is not define");
    inputText.value = "";
  } else {
    inputText.value = "";

    //   console.log("monir khan");
    todoHistoryShow(input);
    input = "";
  }
}

function todoHistoryShow(input) {
  const todo = {
    id: history.length + 1,
    todo: input,
  };
  // console.log(todo);
  history.push(todo);
  console.log(history);
  const liElm = document.createElement("li");
  const resultStr = `${input}`;
  liElm.innerHTML = resultStr;
  liElm.addEventListener("click", function () {
    showId(todo.id);
  });
  historyDom.prepend(liElm, del);
  const eidtBtn = document.createElement("span");
  eidtBtn.innerHTML = "Edit";
  liElm.append(eidtBtn);
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "Delete";
  liElm.append(deleteBtn);
}
function pageHistory(id) {
  historyDom.innerHTML = "";
  history.forEach(function (todo) {
    const liElm = document.createElement("li");
    const resultStr = `${todo.todo}`;
    liElm.innerHTML = resultStr;

    historyDom.prepend(liElm);
    const eidtBtn = document.createElement("span");
    eidtBtn.innerHTML = "Edit";
    liElm.append(eidtBtn);
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "Delete";
    liElm.append(deleteBtn);
    eidtBtn.addEventListener("click", function () {
      showId(todo.id);
    });
    deleteBtn.addEventListener("click", function () {
      liElm.remove();
      // console.log(history);
      history.splice(id, 1);
    });
  });
}
const modal = document.querySelector(".modal-1");
const overlay = document.getElementById("overlay");
pageHistory();
function showId(id) {
  modal.classList.add("active");
  overlay.classList.add("active");

  mondalView(id);
  selectTodoId = id;
  pageHistory(id);
  console.log(id);
}

close.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  const inputValue = modalInput.value;
  const todoIndex = history.findIndex(
    (todoItem) => todoItem.id == selectTodoId
  );
  // console.log(todoIndex);
  history[todoIndex].todo = inputValue;
  pageHistory();
});

const mondalView = (id) => {
  const i = history.find((x) => x.id == id);
  todoListItem = i;
  if (todoListItem) {
    const m = document.getElementById("floatingTextarea");
    let value = i.todo;
    m.innerHTML = value;

    console.log(todoListItem);
  } else {
    console.log("item not found");
  }
};
