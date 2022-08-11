
const dataArray;

async function main() {
  // const fs = require('fs');
  const response = await fetch('./data/nzbird.json');
  const d = await response.text();
  const data = JSON.parse(d);

  dataArray = newArray[data.length];
  for(i = 0; i < data.length; i++){
      const birdSpecies = data[i]
      const e = document.createElement('div');
      const html = `
        <div class="bird-tile" id ="${birdSpecies.primary_name}">
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

      dataArray[i] = html;
      e.innerHTML = html;
      document.querySelector('.bird-subgrid').append(e);
  }
}



function searchFilter() {
  var input, filter, maoriName, txtValue;
  input = document.getElementById('searchFilter');
  filter = input.value.toUpperCase();

  for(int  = 0; i < dataArray.length; i++){
    maoriName = dataArray[i].maori_name;
    txtValue = maoriName.toUpperCase();

    if(txtValue.indexOf(filter) > -1) {
    document.getElementById(maoriName).style.display = "";
    }
    else{
      document.getElementById(maoriName).style.display = "none";

    }


    
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