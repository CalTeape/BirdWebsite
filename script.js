
const arrayMaori = [];
const arrayEnglish = [];
const arrayConservation = [];

async function main() {
  const response = await fetch('./data/nzbird.json');
  const d = await response.text();
  const data = JSON.parse(d);


  for(i = 0; i < data.length; i++){
      const birdSpecies = data[i]
      const e = document.createElement('div');
      const html = `
        <div class="bird-tile" id ="${birdSpecies.english_name}">
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
              <div class ="conservation-status">
                ${birdSpecies.status};
              </div>
        </div>
      `;
      

      arrayMaori[i] = birdSpecies.primary_name;
      arrayEnglish[i] = birdSpecies.english_name;
      arrayConservation[i] = birdSpecies.status;

      //console.log(arrayMaori[i]);
      //console.log(arrayEnglish[i]);
      e.innerHTML = html;
      document.querySelector('.bird-subgrid').append(e);
  }
}



function searchFilter() {
  var input, filter, maoriName, txtValue;
  input = document.getElementById('searchFilter');
  filter = input.value.toUpperCase();

    for(i = 0; i < arrayMaori.length; i++){

      maoriName = arrayMaori[i];
      englishName = arrayEnglish[i];

      txtValueMaori = maoriName.toUpperCase();
      txtValueEnglish = englishName.toUpperCase();

      if(txtValueMaori.normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(filter) > -1 || txtValueEnglish.indexOf(filter) > -1) {
      document.getElementById(englishName).style.display = "";
      }
      else{
        document.getElementById(englishName).style.display = "none";
      }  

  }


}

function searchConservationFilter() {
  var input, filter, conservationStatus, txtValue;
  input = document.getElementById('searchConservationFilter');
  filter = input.value.toUpperCase();

    for(i = 0; i < arrayConservation.length; i++){

      conservationStatus = arrayConservation[i];
      englishName = arrayEnglish[i];

      txtValueConservation = conservationStatus.toUpperCase();

      if(txtValueConservation.indexOf(filter) > -1) {
      document.getElementById(englishName).style.display = "";
      }
      else{
        document.getElementById(englishName).style.display = "none";
      }  

  }
}




main();