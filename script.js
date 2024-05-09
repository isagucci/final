document.addEventListener("DOMContentLoaded", function() {
  let pickOne = document.querySelector(".random");
  
  pickOne.addEventListener("click", function() {
    let pages = [
      "entry/index.html",
      "entry1/index.html",
      "entry2/index.html",
      "entry3/index.html",
      "entry4/index.html",
      "entry5/index.html",
      "entry6/index.html",
      "entry7/index.html",
      "entry8/index.html",
      "entry9/index.html",
      "entry10/index.html",
      "entry11/index.html",
      "entry12/index.html",
    ];

    let randomIndex = Math.floor(Math.random() * pages.length);
    let randomPage = pages[randomIndex];
    window.location.href = randomPage;
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item, index) => {
      const img = item.querySelector('img');
      let filterValue = '';

      filterValue += `grayscale(${(index + 1) * 8}%) `;
      filterValue += `contrast(${100 + ((index + 1) * 5)}%) `;
      filterValue += `brightness(${100 - ((index + 1) * 3)}%) `;
      filterValue += `saturate(${100 + ((index + 1) * 3)}%)`;

      img.style.filter = filterValue;
  });
});