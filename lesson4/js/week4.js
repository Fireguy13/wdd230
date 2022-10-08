document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("primanryNav").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu