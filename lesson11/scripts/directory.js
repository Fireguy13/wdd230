const requestURL = "data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["companies"];
    companies.forEach(displayCompanies);
  });


function displayCompanies(company) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let logo = document.createElement("img");
    let address = document.createElement("div");
    let phone = document.createElement("div");
    let url = document.createElement("a");
    let membership = document.createElement("div");

    h2.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    url.textContent = `${company.url}`;
    url.setAttribute("href", `${company.url}`);

    membership.textContent = `Membership Level: ${company.membership}`;
    membership.classList.add("membership");

    logo.setAttribute("src", company.img);
    logo.setAttribute("alt", `${company.name} logo`);
    logo.setAttribute("loading", "lazy");
  
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(membership);

    document.querySelector("div.cards").appendChild(card);
  }

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector(".cards");
    
  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList); // example using defined function
  
  function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
  }
  