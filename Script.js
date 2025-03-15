// const progress = document.querySelector(".progress");
// const error = document.querySelector(".errordisplaynone");
// const checkboxs = document.querySelectorAll(".checkbox");
// const goalInputs = document.querySelectorAll(".goal-input");
// const inputIdFirst = document.querySelector("#first");
// const inputIdSecond = document.querySelector("#Second");
// const inputIdThird = document.querySelector("#Third");
// let width = 0;

// checkboxs.forEach((checkbox) => {
//   checkbox.addEventListener("click", () => {
//     const filledornot = [...goalInputs].every((i) => i.value);
//     const inputId = checkbox.nextElementSibling.id;
//     if (filledornot) {
//       checkbox.parentElement.classList.toggle("completed");
//       allGoals[inputId].completed = !allGoals[inputId].completed;
//       localStorage.setItem("allGoals", JSON.stringify(allGoals));
//     } else error.className = "error";
//     if (allGoals[inputId].completed && width < 99) {
//       progress.style.width = `${(width += 33)}%`;
//     } else if (!allGoals[inputId].completed && width <= 99) {
//       progress.style.width = `${(width -= 33)}%`;
//     }
//   });
// });
// const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};
// let index = 0;
// let inputBox = 0;
// for (let i in allGoals) {
//   if (allGoals[i].completed) {
//     checkboxs[allGoals[i].index].checked = true;
//     checkboxs[allGoals[i].index].parentElement.classList.toggle("completed");
//   }
//   if (allGoals[i].completed && width < 99)
//     progress.style.width = `${(width += 33)}%`;
//   goalInputs[inputBox].value = allGoals[i].name;
//   inputBox++;
// }

// goalInputs.forEach((input) => {
//   input.addEventListener("focus", () => {
//     error.className = "errordisplaynone";
//   });
//   input.addEventListener("change", (e) => {
//     allGoals[e.target.id] = {
//       name: e.target.value,
//       completed: false,
//       index: index++,
//     };
//     input.value = allGoals[e.target.id].name;
//     if (allGoals[e.target.id].completed) {
//       input.parentElement.classList.add("completed");
//     }
//     localStorage.setItem("allGoals", JSON.stringify(allGoals));
//     localStorage.setItem("allGoals", JSON.stringify(allGoals));
//     localStorage.setItem("allGoals", JSON.stringify(allGoals));
//   });
// });


const progress = document.querySelector(".progress");
const error = document.querySelector(".errordisplaynone");
const checkboxs = document.querySelectorAll(".checkbox");
const goalInputs = document.querySelectorAll(".goal-input");
const inputIdFirst = document.querySelector("#first");
const inputIdSecond = document.querySelector("#Second");
const inputIdThird = document.querySelector("#Third");
let width = 0;

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const filledornot = [...goalInputs].every((i) => i.value);
    const inputId = checkbox.nextElementSibling.id;
    if (filledornot) {
      checkbox.parentElement.classList.toggle("completed");
      allGoals[inputId].completed = !allGoals[inputId].completed;
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } else error.className = "error";
    if (allGoals[inputId].completed && width < 99) {
      progress.style.width = `${(width += 33)}%`;
    } else if (!allGoals[inputId].completed && width <= 99) {
      progress.style.width = `${(width -= 33)}%`;
    }
  });
});
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};
let index = 0;
let inputBox = 0;
for (let i in allGoals) {
  if (allGoals[i].completed) {
    checkboxs[allGoals[i].index].checked = true;
    checkboxs[allGoals[i].index].parentElement.classList.toggle("completed");
  }
  if (allGoals[i].completed && width < 99)
    progress.style.width = `${(width += 33)}%`;
  goalInputs[inputBox].value = allGoals[i].name;
  inputBox++;
}

goalInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    error.className = "errordisplaynone";
  });
  input.addEventListener("change", (e) => {
    allGoals[e.target.id] = {
      name: e.target.value,
      completed: false,
      index: index++,
    };
    input.value = allGoals[e.target.id].name;
    if (allGoals[e.target.id].completed) {
      input.parentElement.classList.add("completed");
    }
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});