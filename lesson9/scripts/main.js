//Menu Hamburger ------------------------------------------------------
function toggleMenu(){
    document.getElementById('navigation').classList.toggle("open");
  }
  
  const x = document.getElementById('hambBtn')
  x.onclick = toggleMenu;
  
  
  
  // set current year in footer ............................................................
  const currentDate = new Date();
  document.querySelector('#year').textContent = currentDate.getFullYear();
  
  // set current year in header
  document.querySelector('#timeHeader').textContent = currentDate.getFullYear();
  
  // last modified
  const dateHeader = document.querySelector('#timeHeader');
  
  const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(currentDate);
  
  dateHeader.innerHTML = `<em>${fulldateUK}</em>`;
  
  document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
  
  //Banner ------------------------------------------------------------------------------
  function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu

// this is the upday time
document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
