const category = document.querySelector(".summary-container");

fetch("https://sar-mko.github.io/results-summary-component//data.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((section) => {
      let div = document.createElement("div");
      category.appendChild(div);
      div.classList.add("result-cont");
      div.id = section.category.toLowerCase();

      let img = document.createElement("img");
      div.appendChild(img);
      img.src = section.icon;

      let header = document.createElement("h4");
      div.appendChild(header);
      header.innerText = section.category;

      let score = document.createElement("span");
      div.appendChild(score);
      score.innerText = section.score;
      score.id = "score-span";

      let total = document.createElement("span");
      total.innerText = " / 100";
      score.appendChild(total);
      total.style.color = "hsla(0, 0%, 70%)";
    });
    let button = document.createElement("button");
    button.innerText = "Continue";
    category.appendChild(button);
  });

