async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function toggle(e) {
  const titleElement = e.currentTarget;
  titleElement.classList.toggle("active");

  const iconElement = titleElement.querySelector(".fa-solid");
  if (titleElement.classList.contains("active")) {
    iconElement.classList.remove("fa-circle-plus");
    iconElement.classList.add("fa-circle-minus");
  } else {
    iconElement.classList.remove("fa-circle-minus");
    iconElement.classList.add("fa-circle-plus");
  }
}

function createAccordionItem(title, body) {
  const accordionSection = document.querySelector(".accordion");

  const titleElement = document.createElement("div");
  titleElement.classList.add("title");
  titleElement.innerHTML = `<i class="fa-solid fa-circle-plus"></i> ${title}`;
  titleElement.addEventListener("click", toggle);

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description");
  descriptionElement.innerHTML = `<p>${body}</p>`;

  accordionSection.appendChild(titleElement);
  accordionSection.appendChild(descriptionElement);
}

async function populateAccordion() {
  const data = await fetchData();

  data.forEach((post) => {
    createAccordionItem(post.title, post.body);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateAccordion();
});
