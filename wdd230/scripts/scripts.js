// const options = {weeday: 'long', day: 'mumeric', month: 'long', year: 'numeric'};
// document.getElementById('date').textContent = new Date().toLocaleDateString('es-Us', options);

// document.getElementById('last-updated').textContent = document.lastModified;
const lastVisit = parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*=\s*([^;]*).*$)|^.*$/, "$1"));
const lastModif = Date.parse(document.lastModified);

if (isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;

  if (isFinite(lastVisit)) {
    alert("This page has been changed!");
  }
}
