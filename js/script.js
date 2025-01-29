
document.getElementById("add-div").addEventListener("click", function() {
  let container = document.querySelector(".table-responsive");

  if (container.children.length < 11) { // Əgər 11-dən azdırsa, əlavə et
      let newDiv = document.createElement("div");
      newDiv.classList.add("new-div");
      container.appendChild(newDiv);
  } else {
      alert("Maksimum 11 Zər əlavə edə bilərsiniz!"); // Xəbərdarlıq
  }
});

document.getElementById("remove-div").addEventListener("click", function() {
  let container = document.querySelector(".table-responsive");
  let lastDiv = container.lastElementChild; // Sonuncu div-i tapır

  if (lastDiv) {
      lastDiv.remove(); // Sonuncu div-i silir
  }
});
function demo() {
    const imageLinks = [
      "https://cdn.pixabay.com/photo/2014/04/03/10/24/one-310338_640.png",
      "https://cdn.pixabay.com/photo/2014/04/03/10/24/two-310337_640.png",
      "https://cdn.pixabay.com/photo/2014/04/03/10/24/three-310336_640.png",
      "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623_1280.png",
      "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312622_640.png",
      "https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621_640.png",


    ];
  
    const divs = document.querySelectorAll(".table-responsive div");
  
    divs.forEach(div => {
      div.innerHTML = ""; // Mövcud şəkilləri təmizləyirik
      const randomIndex = Math.floor(Math.random() * imageLinks.length);
      const img = document.createElement("img");
      img.src = imageLinks[randomIndex];
      div.appendChild(img);
    });
  }

