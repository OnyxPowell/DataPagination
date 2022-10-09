/*
showPage function will create and insert/append the 9 records of students on the given page
*/

function showPage(students, pageNo) {
  let limitPerPage = 9;
  let startIndex = pageNo * limitPerPage - limitPerPage;
  let endIndex = pageNo * limitPerPage;

  const studentsList = document.querySelector(".student-list");
  studentsList.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let li = document.createElement("li");
      li.classList.add("student-item");
      li.classList.add("cf");

      const studentItem = `
      <div class="student-details">
      <img class="avatar" src="${students[i].picture.large}" alt="Profile Picture">
      <h3>${students[i].name.first} ${students[i].name.last} </h3>
      <span class="email">${students[i].email}</span>
      </div>
      <div class="joined-details">
      <span class="date">${students[i].registered.date}</span>
      </div>
      `;
      li.innerHTML = studentItem;
      studentsList.insertAdjacentElement("beforeend", li);
    }
  }
}

/*
ddPagination function will create and insert/append the button needed for the pagination
*/

function addPagination(students) {
  const neededPaginationBtns = Math.round(students.length / 9);
  const paginationBtns = document.querySelector(".link-list");
  paginationBtns.innerHTML = "";

  for (let i = 1; i <= neededPaginationBtns; i++) {
    let btn = document.createElement("li");
    btn.innerHTML = `<button type="button">${i}</button>`;
    paginationBtns.insertAdjacentElement("beforeend", btn);
  }
  const btns = document.getElementsByTagName("button");
  btns[0].classList.add("active");

  paginationBtns.addEventListener("click", (e) => {
    if (e.target.type === "button") {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
      }
      e.target.classList.add("active");
      showPage(students, e.target.innerText);
    }
  });
}

/* 
addSearchForm function will create and insert the search on the page
*/
function addSearchForm() {
  const searchOption = document.querySelector(".search-option");
  const search = `
  <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name..." />
            <button type="button">
              <img src="img/icn-search.svg" alt="Search icon" />
            </button>
          </label>`;
  searchOption.innerHTML = search;
}

showPage(data, 1);
addPagination(data);
addSearchForm();
