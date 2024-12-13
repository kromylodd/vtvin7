function profal() {
  alert("srry, your main page is not clickable rn");
}

function toggleDropdown() {
  document.getElementById("drpcont").classList.toggle("show");
  document.getElementById("dropbutton").classList.toggle("topbtnbg2");
}
//for closin' drpcont
window.onclick = function (event) {
  if (!event.target.matches(".dropbutton")) {
    let dropdowns = document.getElementsByClassName("drpcont");
    let menu = document.getElementsByClassName("dropbutton");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
    for (let i = 0; i < dropdowns.length; i++) {
      let men = menu[i];
      if (men.classList.contains("topbtnbg2")) {
        men.classList.remove("topbtnbg2");
        men.classList.add("topbtnbg1");
      }
    }
  }
};
function prevent() {
  let prev = document.getElementById("license");
  prev.addEventListener("click", function (event) {
    event.preventDefault();
  });
}
function license() {
  let license = document.getElementById("license");
  license.innerHTML = "&#128019; nuuh ur good";
}
prevent();
function dark_light() {
  let dm = document.getElementById("dm");
  let dropbutton = document.getElementById("dropbutton");
  let drpa = document.getElementsByClassName("drpa");
  let topline = document.getElementById("header");
  let pp = document.getElementById("pp");
  let cred = document.getElementById("cred");
  let pie = document.getElementById("pie");
  let footer = document.getElementById("footer");
  let body = document.getElementById("body");
  let img = document.getElementById("img");
  dropbutton.classList.toggle("dark");
  topline.classList.toggle("dark");
  cred.classList.toggle("dark");
  pie.classList.toggle("opac");
  pp.classList.toggle("darkpp");
  footer.classList.toggle("dark");
  body.classList.toggle("darkbody");
  if (img.src.includes("lab7zad1.1.jpg")) {
    img.src = "lab7zad1.2.jpg";
    dm.innerHTML = "<i class='fa-solid fa-sun'></i>";
  } else {
    img.src = "lab7zad1.1.jpg";
    dm.innerHTML = "<i class='fa-solid fa-moon'></i>";
  }
  if (
    window.getComputedStyle(drpa[0]).backgroundColor === "rgb(231, 224, 216)"
  ) {
    // RGB equivalent of #e7e0d8
    for (let i = 0; i < drpa.length; i++) {
      drpa[i].style.backgroundColor = "#4C3114";
    }
  } else {
    for (let i = 0; i < drpa.length; i++) {
      drpa[i].style.backgroundColor = "#e7e0d8";
    }
  }
}
function updateText() {
  const sumup = document.getElementById("sum-up");
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  const text3 = document.getElementById("text3");
  const text4 = document.getElementById("text4");
  if (window.innerWidth <= 768) {
    sumup.textContent =
      "Sleep is crucial for overall health, enhancing cognitive function, emotional stability, and physical well-being. It supports a healthy immune system, reduces stress, and lowers the risk of chronic diseases.";
  text1.innerHTML = "<h3>Improved Memory Consolidation</h3> <article> &nbsp; Sleep helps consolidate memories and information learned during the day, making it easier to recall and understand material later.</article>"
  text3.innerHTML = "<h3>Enhanced Cognitive Function</h3> <article> &nbsp; A well-rested brain performs better in problem-solving, critical thinking, and creativity. </article>"
  text2.innerHTML = "<h3>Better Physical Health</h3> <article> &nbsp; Sleep is essential for overall health, including immune function, metabolism, and cardiovascular health. </article>"
  text4.innerHTML = "<h3>Emotional Stability</h3> <article> &nbsp; Adequate sleep helps regulate emotions and reduces stress.</article>"
    }
    else{
      sumup.innerHTML =
      " <p> &nbsp;Sleep is crucial for overall health, enhancing cognitive function, emotional stability, and physical well-being. It supports a healthy immune system, reduces stress, and lowers the risk of chronic diseases.</p><p>&nbsp;Without adequate sleep, various health issues can arise, making it essential to prioritize good sleep for a balanced and healthy life </p>";
  text1.innerHTML = "<h3>Improved Memory Consolidation</h3> <article> &nbsp; Sleep helps consolidate memories and information learned during the day, making it easier to recall and understand material later. Without adequate sleep, your brain struggles to retain new information.</article>"
  text3.innerHTML = "<h3>Enhanced Cognitive Function</h3> <article> &nbsp; A well-rested brain performs better in problem-solving, critical thinking, and creativity. Lack of sleep can impair these cognitive functions, making studying less effective.</article>"
  text2.innerHTML = "<h3>Better Physical Health</h3> <article> &nbsp; Sleep is essential for overall health, including immune function, metabolism, and cardiovascular health. Poor sleep can lead to various health issues, which can negatively impact your ability to study effectively.</article>"
  text4.innerHTML = "<h3>Emotional Stability</h3> <article> &nbsp; Adequate sleep helps regulate emotions and reduces stress. When you’re well-rested, you’re more likely to stay calm and focused, which can improve your study sessions and overall well-being.</article>"
    }
}
window.addEventListener("resize", updateText);
updateText();
