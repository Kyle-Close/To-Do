const projectsListContainer = document.querySelector(
  ".directories-list-projects"
);

export function addNewProjectDOM(projectName) {
  let li = document.createElement("li");
  let projectButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  let deleteImage = document.createElement("img");

  projectButton.textContent = projectName;
  projectButton.className = "project-list-buttons";

  deleteImage.src = "../img/trash.png";
  deleteImage.width = "25";
  deleteButton.appendChild(deleteImage);

  li.appendChild(projectButton);
  li.appendChild(deleteButton);

  projectsListContainer.appendChild(li);
}
