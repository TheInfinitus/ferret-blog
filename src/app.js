function ferretMoka() {
  let pUpdate = document.querySelector("p");
  pUpdate.innerHTML =
    "She is a ferret with polecat colours and our <strong>first girl</strong>. She's been 3 and half years with us and is our most gentle and caring ferret. She is like a mum to all the other ferrets and take care of all of them but at same time she is a bit clumsy, the perfect hufflepuff specimen. A interesting thing only she does is that when we do cry noises she comes running to check on us and to give us kisses until she feels we are okay. Like I said, she is the Momma of our team. <br /> Thank you for reading about these furry jills.";
  let h3Update = document.querySelector("h3");
  h3Update.innerHTML = "Moka, The Lovely Ferret";
}

let ferretMokaInfo = document.querySelector(".ferret-1");
ferretMokaInfo.addEventListener("mousedown", ferretMoka);

function changeImage(source) {
  var image = document.querySelector("#opening-photo");
  image.src = source;
}

function ferretLatte() {
  let pUpdate = document.querySelector("p");
  pUpdate.innerHTML =
    "This girl sadly is not longer with us and left us when she was only 7 months. She was blood sister to Moka and her attitude was more adventurous than her and probably was the most clever girl we got. An a proof of this was a couple of puzzle games she did in record time. I really really wish we could have share more time together. <br /> Thank you for reading about these furry jills.";
  let h3Update = document.querySelector("h3");
  h3Update.innerHTML = "Latte, The Rainbow Ferret";
}

let ferretLatteInfo = document.querySelector(".ferret-2");
ferretLatteInfo.addEventListener("mousedown", ferretLatte);

function ferretSugar() {
  let pUpdate = document.querySelector("p");
  pUpdate.innerHTML =
    "The first months she was really mischief, jumpy and playful but as adult ferret with now 2 years old, she honor her name everyday being our <strong>sweetest girl</strong>. She loves hugs, kisses, treats of course, her bonding with Moka is amazing and she's the only ferret that tries to snatch us by grabbing our fingers to then hide us inside her cuddling place where she will start to give you kisses and share her bed with you, in this ocassions don't try to run because she will find you and drag you again to keep you right next to her. Thank you for reading about these furry jills.";
  let h3Update = document.querySelector("h3");
  h3Update.innerHTML = "Sugar, The Mischief Ferret";
}

let ferretSugarInfo = document.querySelector(".ferret-3");
ferretSugarInfo.addEventListener("mousedown", ferretSugar);

function ferretLunga() {
  let pUpdate = document.querySelector("p");
  pUpdate.innerHTML =
    "Well... this girl is <strong>Pure Fire!</strong> It has been a challenge to train her with such a strong attitude. She's our 1 years old angora girl and the tiniest one in our business but that doesn't stop her. She gives the biggest jumps, climb higher than anyone and perform tricks as any other, her determination is strong as her and she will constantly stay still watching all that is happening inside the playing room, watching... learning... planning who knows what! So be careful, don't touch. Thank you for reading about these furry jills.";
  let h3Update = document.querySelector("h3");
  h3Update.innerHTML = "Lunga, The Bold Ferret";
}

let ferretLungaInfo = document.querySelector(".ferret-4");
ferretLungaInfo.addEventListener("mousedown", ferretLunga);

function ferretKhalua() {
  let pUpdate = document.querySelector("p");
  pUpdate.innerHTML =
    "Khalua, the joyful ferret, she <strong>overflows happiness</strong>. We haven't take a proper photoshoot and currently is on bonding steps with her sister but she already proof she's the happier and is really lovely that from all the toys they have she prefer to play with us. Interesting info, shes is only 4 months old and she's is already bigger than any others! We are guessing she will still grow a bit more. <br >Thank you for reading about these furry jills.";
}

let ferretKhaluaInfo = document.querySelector(".ferret-5");
ferretKhaluaInfo.addEventListener("mousedown", ferretKhalua);

function GetinTouch() {
  let touch = prompt("What is your Name?");
  let ferretQuestion = prompt(
    "Would you like to know more about our Coffee Business? ☕☕☕ Please use YES or NO"
  );

  if (
    ferretQuestion === "YES" ||
    ferretQuestion === "yes" ||
    ferretQuestion === "Yes" ||
    ferretQuestion === "Yeah"
  ) {
    alert(
      "Thank you " +
        touch +
        " That's Great! Please visit my instagram @sabacreative"
    );
  } else {
    alert(
      "&#%@ " + touch + "! Really?💀*Annoyed Ferret Noises in the Background*💀"
    );
  }
}

let getinTouchButton = document.querySelector("button");
getinTouchButton.addEventListener("click", GetinTouch);

document.querySelector("h1").addEventListener("click", function () {
  location.reload();
});
