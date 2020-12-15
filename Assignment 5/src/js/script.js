/* global song */

window.onload = function() {
  let allSongs = document.getElementById('show-all-items');
  let noSongs = document.getElementById('hide-all-items');
  let rock = document.getElementById('rock');
  let pop = document.getElementById('pop');
  let jazz = document.getElementById('jazz');
  let hipHop = document.getElementById('hip-hop');
  let songObject = Object.create(song);

  // ********************************** CREATE DIV ELEMENTS AND INSERT DATA DYNAMICALLY **********************************
  function loadAllSongs(songObject) {
    for (let i = 0; i < songObject.length; i++) {
      var songWrapper = document.querySelector('#wrapper');
      let containerDiv = document.createElement('div');
      let createDiv = document.createElement('div');
      let songDataDiv = document.createElement('div');
      let imgCover = document.createElement('img');
      let title = document.createElement('h2');
      let genre = document.createElement('h3');
      let price = document.createElement('h4');
      let description = document.createElement('p');
      let buyButtonDiv = document.createElement('div');
      let buyButton = document.createElement('button');
      containerDiv.classList.add('song-container');
      containerDiv.id = song[i].id.toString();
      createDiv.classList.add('song-card');
      songDataDiv.classList.add('song-data-div');
      buyButtonDiv.classList.add('buy-button-div');
      imgCover.classList.add('imgCover');
      title.classList.add('songTitle');
      genre.classList.add('songGenre');
      price.classList.add('price');
      description.classList.add('songDescription');
      buyButton.classList.add('buyButton');

      imgCover.src = song[i].image;
      title.innerHTML = song[i].name;
      genre.innerHTML = song[i].genre;
      price.innerHTML = song[i].price;
      description.innerHTML = song[i].description;
      buyButton.innerText = 'Buy & Chill';

      songDataDiv.appendChild(imgCover);
      songDataDiv.appendChild(title);
      songDataDiv.appendChild(genre);
      songDataDiv.appendChild(description);
      createDiv.appendChild(songDataDiv);
      buyButtonDiv.appendChild(price);
      buyButtonDiv.appendChild(buyButton);
      createDiv.appendChild(buyButtonDiv);
      containerDiv.appendChild(createDiv);
      songWrapper.insertBefore(containerDiv, songWrapper.childNodes[0]);
    }
  }
  loadAllSongs(songObject);
  // ********************************** CREATE DIV ELEMENTS AND INSERT DATA DYNAMICALLY **********************************

  // Display All Songs
  allSongs.onclick = function() {
    for (let i = 0; i < songObject.length; i++) {
      document.getElementById(songObject[i].id).classList.remove('hidden');
    }
  };

  // Hide All Songs
  noSongs.onclick = function() {
    for (let i = 0; i < songObject.length; i++) {
      document.getElementById(songObject[i].id).classList.add('hidden');
    }
  };

  // Display Rock Songs
  rock.onclick = function() {
    for (let i = 0; i < songObject.length; i++) {
      document.getElementById(songObject[i].id).classList.remove('hidden');
      if (!songObject[i].genre.includes('Rock')) {
        document.getElementById(songObject[i].id).classList.add('hidden');
      }
    }
  };

  // Display Pop Songs
  pop.onclick = function() {
    for (let i = 0; i < songObject.length; i++) {
      document.getElementById(songObject[i].id).classList.remove('hidden');
      if (!songObject[i].genre.includes('Pop')) {
        document.getElementById(songObject[i].id).classList.add('hidden');
      }
    }
  };

  // Display Jazz Songs
  jazz.onclick = function() {
    for (let i = 0; i < songObject.length; i++) {
      document.getElementById(songObject[i].id).classList.remove('hidden');
      if (!songObject[i].genre.includes('Jazz')) {
        document.getElementById(songObject[i].id).classList.add('hidden');
      }
    }
  };

  // Display Hip Hop Songs
  hipHop.onclick = function() {
    for (let i = 0; i < songObject.length; i++) {
      document.getElementById(songObject[i].id).classList.remove('hidden');
      if (!songObject[i].genre.includes('Hip Hop')) {
        document.getElementById(songObject[i].id).classList.add('hidden');
      }
    }
  };

  // About US (open in new window)
  let aboutUs = document.getElementById('about');
  aboutUs.onclick = function() {
    var myWindow = window.open('', '', 'width=500, height=300');
    myWindow.document
      .write(`<p style="font-family: 'Poppins', sans-serif; font-weight: bold; font-size: 20px;">
              We are a young company with a passion for music. We believe in our good taste of
              music. Scientific researches indicate that people can cross life's barriers way
              easier when they are listening to music. So why not combine our great taste and the
              facts that scientists have given and make people and ourselves happier, eh?
              </p>`);
    myWindow.blur();
  };
};
