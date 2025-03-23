const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.querySelectorAll(".like-glyph");
const errorModal = document.getElementById("modal");

errorModal.classList.add("hidden");

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    if (heart.textContent === "♡") {
      mimicServerCall()
        .then(() => {
          heart.textContent = "♥";
          heart.classList.add("activated-heart");
        })
        .catch(error => {
          errorModal.classList.remove("hidden");
          errorModal.textContent = error;
          
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    } else {
      heart.textContent = "♡";
      heart.classList.remove("activated-heart");
    }
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
