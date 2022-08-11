
async function main() {
  // const fs = require('fs');
  const response = await fetch('./data/nzbird.json');
  const d = await response.text();
  const data = JSON.parse(d);

  for(i = 0; i < data.length; i++){
      const birdSpecies = data[i]
      const e = document.createElement('div');
      const html = `
        <div class="bird-tile">
          <div class="photo-box">
              <div class="gradient"></div>
              <img src=" ${birdSpecies.photo.source}" alt="Description of the image" />
              <div class="maori-name">
                ${birdSpecies.primary_name};
              </div>
              <div class="photo-credit">
                ${birdSpecies.photo.credit};
              </div>
          </div>

          <div class="text-box">
              <div class="english-name">
                ${birdSpecies.english_name};
              </div>
              <div class="scientific-name">
                ${birdSpecies.scientific_name};
              </div>
            </div>
        </div>
      `;

      e.innerHTML = html;
      document.querySelector('.bird-subgrid').append(e);
  }


}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


main();