// SEARCH PAGE FUNCTION
function normalizeStoreNumber(value) {
  return value.toString().trim().replace(/^0+/, "");
}

function handleStoreInput(value) {
  const input = document.getElementById("storeInput");
  const numericValue = value.replace(/\D/g, "");
  input.value = numericValue;
}

function goToStore() {
  const input = document.getElementById("storeInput");
  const storeNumber = normalizeStoreNumber(input.value);
  input.value = storeNumber;
  window.location.href = `store.html?store=${storeNumber}`;
}

function loadImageWithFallback(element, fileName, onLoaded) {
  const candidates = [
    `./Images/${fileName}`,
    `./images/${fileName}`,
    `Images/${fileName}`,
    `images/${fileName}`,
    `./${fileName}`,
    `${fileName}`
  ];

  let currentIndex = 0;

  const tryNext = () => {
    if (currentIndex >= candidates.length) {
      return;
    }

    element.onerror = () => {
      currentIndex += 1;
      if (currentIndex < candidates.length) {
        element.src = candidates[currentIndex];
      }
    };

    element.onload = () => {
      if (typeof onLoaded === "function") {
        onLoaded(element.src);
      }
    };

    element.src = candidates[currentIndex];
  };

  tryNext();
}

// STORE PAGE LOGIC
const params = new URLSearchParams(window.location.search);
const store = params.get("store");
const title = document.getElementById("storeTitle");
const image = document.getElementById("storeImage");
const imageLink = document.getElementById("storeImageLink");
const eightFootLink = document.getElementById("eightFootLink");
const elevenFootLink = document.getElementById("elevenFootLink");
const twentyoneFootLink = document.getElementById("twentyoneFootLink");
const fiveFootLink = document.getElementById("fiveFootLink");
const nineFootLink = document.getElementById("nineFootLink");
const twoFootLink = document.getElementById("twoFootLink");

const message = document.getElementById("storeMessage");
const bottomImage = document.querySelector("img.bottom");

if (bottomImage) {
  loadImageWithFallback(bottomImage, "updatedFLGraphicPNG.png");
}

if (store) {
  const imageCode = storeMap[store];

  if (imageCode) {
    title.textContent = `Store ${store}`;
    loadImageWithFallback(image, `${imageCode}.png`, (src) => {
      imageLink.href = src;
      imageLink.style.display = "inline-block";
    });
    image.style.display = "block";
    message.style.display = "none";

    if (store === "10") {
      eightFootLink.style.display = "inline";
      elevenFootLink.style.display = "inline";
      twentyoneFootLink.style.display = "inline";
      fiveFootLink.style.display = "inline";
      nineFootLink.style.display = "inline";
      twoFootLink.style.display = "inline";

    } else {
      eightFootLink.style.display = "none";
      elevenFootLink.style.display = "none";
      twentyoneFootLink.style.display ="none";
      fiveFootLink.style.display ="none";
      nineFootLink.style.display ="none";
      twoFootLink.style.display ="none";
    }
  } else {
    title.textContent = "Store Not Found";
    image.style.display = "none";
    message.textContent = `We couldn't find store ${store}. Please try another store number.`;
    message.style.display = "block";
  }
} else {
  title.textContent = "Store Finder";
  image.style.display = "none";
  message.textContent = "Please enter a store number to view details.";
  message.style.display = "block";
}

function goBack() {
 window.location.href = "index.html";
}
