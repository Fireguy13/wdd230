
const requestURL = "./json/data.json";
const spotlight = document.querySelector(".sect5");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["companies"];
    for (let j = 0; j < 30; j++) {
      displaySpotlight(companies[randomIntFromInterval(0, companies.length - 1)]);
    }
  });

  var i = 0;

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let complist = [];

function displaySpotlight(company) {

  if (complist.includes(company.name)) {

  } else {

    if ((`${company.membership}` == "Gold" || `${company.membership}` == "Silver") && i < 3) {

      complist.push(company.name);

      i = i + 1;

      let card = document.createElement("div");
      let h2 = document.createElement("h2");
      let logo = document.createElement("img");
      let phone = document.createElement("p");
      let url = document.createElement("a");
  
      h2.textContent = `${company.name}`;
      phone.textContent = `${company.phone}`;
      url.textContent = `${company.url}`;
      url.setAttribute("href", `${company.url}`);
  
      logo.setAttribute("src", company.img);
      logo.setAttribute("alt", `${company.name} logo`);
    
      card.appendChild(h2);
      card.appendChild(logo);
      card.appendChild(document.createElement("hr"));
      card.appendChild(url);
      card.appendChild(phone);
  
      document.querySelector(".sect5").appendChild(card);

      if (i == 3) {
          card.setAttribute("class", "div1");
      }

  }

  }





  }