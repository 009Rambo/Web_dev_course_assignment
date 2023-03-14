const listContainer = document.getElementById("list-container");
const addForm = document.getElementById("add-form");

function renderStudentList(students) {
  let html = "<table>";
  html += "<tr><th>Name</th><th>Info</th><th>Points</th></tr>";
  students.forEach((student) => {
    html += `<tr${student.exercise_points < 50 ? " class='low-points'" : ""}>`;
    html += `<td>${student.name || "–"}</td>`;
    html += `<td>${student.info || "–"}</td>`;
    html += `<td class="points">${student.exercise_points || "–"}</td>`;
    html += "</tr>";
  });
  html += "</table>";
  listContainer.innerHTML = html;
}

function fetchStudents() {
  fetch("http://localhost:3010/students")
    .then((response) => response.json())
    .then((students) => renderStudentList(students));
}

function addStudent(event) {
  event.preventDefault();
  const formData = new FormData(addForm);
  const student = {
    name: formData.get("name"),
    info: formData.get("info") || null,
    exercise_points: parseInt(formData.get("points")) || null,
  };

  fetch("http://localhost:3010/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then((response) => response.json())
    .then(fetchStudents);
  addForm.reset();
}

addForm.addEventListener("submit", addStudent);
fetchStudents();
