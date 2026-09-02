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
const eighteenFootLink = document.getElementById("eighteenFootLink");
const twentyfourFootlink = document.getElementById("twentyfourFootLink")
const fiveFootLink = document.getElementById("fiveFootLink");
const fourFootLink = document.getElementById("fourFootLink");
const sevenFootLink = document.getElementById("sevenFootLink");
const nineFootLink = document.getElementById("nineFootLink");
const eightFootLinkAlt = document.getElementById("eightFootLinkAlt");
const twoFootLink = document.getElementById("twoFootLink");
const threeFootLink = document.getElementById("threeFootLink");
const twentyFootLink = document.getElementById("twentyFootLink");
const sixFootLink = document.getElementById("sixFootLink");
const seventeenFootLink = document.getElementById("seventeenFootLink");
const nineteenFootLink = document.getElementById("nineteenFootLink");
const twentyfiveFootLink = document.getElementById("twentyfiveFootLink");
const twentytwoFootLink = document.getElementById("twentytwoFootLink");const twentysevenFootLink = document.getElementById("twentysevenFootLink");
const eightFootLinkAlt2 = document.getElementById("eightFootLinkAlt2");
const fiveFootLinkAlt = document.getElementById("fiveFootLinkAlt");
const linkElements = [
  { element: nineFootLink, defaultLabel: "9ft" },
  { element: fiveFootLink, defaultLabel: "5ft" },
  { element: twentyoneFootLink, defaultLabel: "21ft" },
  { element: eighteenFootLink, defaultLabel: "18ft" },
  { element: twentyfourFootLink, defaultLabel: "24ft" },
  { element: sevenFootLink, defaultLabel: "7ft"},
  { element: fourFootLink, defaultLabel: "4ft"},
  { element: elevenFootLink, defaultLabel: "11ft" },
  { element: eightFootLink, defaultLabel: "8ft" },
  { element: eightFootLinkAlt, defaultLabel: "8ft" },
  { element: twoFootLink, defaultLabel: "2ft" },
  { element: threeFootLink, defaultLabel: "3ft" },
  { element: twentyFootLink, defaultLabel: "20ft" },
  { element: sixFootLink, defaultLabel: "6ft" },
  { element: seventeenFootLink, defaultLabel: "17ft" },
  { element: nineteenFootLink, defaultLabel: "19ft" },
  { element: twentyfiveFootLink, defaultLabel: "25ft" },
  { element: twentytwoFootLink, defaultLabel: "22ft" },
  { element: eightFootLinkAlt2, defaultLabel: "8ft" },
  { element: twentysevenFootLink, defaultLabel: "27ft" },
  { element: fiveFootLinkAlt, defaultLabel: "5ft" }
];

const message = document.getElementById("storeMessage");
const bottomImage = document.querySelector("img.bottom");
const imageSection = document.querySelector(".image-section");

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

    const storeSpecificLinks = {
      "10": [
        { element: nineFootLink, label: "9ft", image: "9ftA.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftA.png" },
        { element: twentyoneFootLink, label: "21ft", image: "21ftA.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftA.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" }
      ],
      "1047": [
        { element: nineFootLink, label: "7ft", image: "7ftA.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftA.png" },
        { element: twentyoneFootLink, label: "19ft", image: "19ftA.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftA.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" }
      ],
      "2666": [
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: twentyfourFootLink, label: "24ft", image: "24ftA.png" },
        { element: fourFootLink, label: "4ft", image: "4ftA.png" },
        { element: sevenFootLink, label: "7ft", image: "7ftA.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" }
      ],
      "685": [
        { element: eightFootLink, label: "8ft", image: "8ftB.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftB.png" },
        { element: eighteenFootLink, label: "18ft", image: "18ftA.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftB.png" },
        { element: eightFootLinkAlt, label: "8ft", image: "8ftA.png" },
        { element: twoFootLink, label: "2ft", image: "2ftB.png" }
      ],
      "2808": [
        { element: nineFootLink, label: "9ft", image: "9ftB.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftB.png" },
        { element: twentyoneFootLink, label: "21ft", image: "21ftB.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftB.png" },
        { element: eightFootLinkAlt, label: "8ft", image: "8ftA.png" },
        { element: twoFootLink, label: "2ft", image: "2ftB.png" }
      ],
      "2654": [
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: twentyFootLink, label: "20ft", image: "20ftA.png" },
        { element: threeFootLink, label: "3ft", image: "3ftA.png" },
        { element: fourFootLink, label: "4ft", image: "4ftB.png" }
      ],
      "1534": [
        { element: sevenFootLink, label: "7ft", image: "7ftB.png" },
        { element: fourFootLink, label: "4ft", image: "4ftC.png" },
        { element: twoFootLink, label: "2ft", image: "2ftB.png" },
        { element: eighteenFootLink, label: "18ft", image: "18ftB.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftB.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "922": [
        { element: sixFootLink, label: "6ft", image: "6ftA.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: twentyFootLink, label: "20ft", image: "20ftB.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: sevenFootLink, label: "7ft", image: "7ftC.png" }
      ],
      "985": [
        { element: fiveFootLink, label: "5ft", image: "5ftC.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: eighteenFootLink, label: "18ft", image: "18ftC.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "89": [
        { element: sevenFootLink, label: "7ft", image: "7ftD.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: seventeenFootLink, label: "17ft", image: "17ftA.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: fourFootLink, label: "4ft", image: "4ftA.png" },
        { element: sixFootLink, label: "6ft", image: "6ftB.png" }
      ],
      "1317": [
        { element: eightFootLink, label: "8ft", image: "8ftD.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: nineteenFootLink, label: "19ft", image: "19ftB.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: eightFootLinkAlt, label: "8ft", image: "8ftE.png" }
      ],
      "2608": [
        { element: eightFootLink, label: "8ft", image: "8ftD.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: twentyfiveFootLink, label: "25ft", image: "25ftA.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: nineFootLink, label: "9ft", image: "9ftC.png" }
      ],
      "364": [
        { element: sevenFootLink, label: "7ft", image: "7ftA.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: twentytwoFootLink, label: "22ft", image: "22ftA.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "841": [
        { element: sixFootLink, label: "6ft", image: "6ftB.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: twentyfourFootLink, label: "24ft", image: "24ftB.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" }
      ],
      "552": [
        { element: sixFootLink, label: "6ft", image: "6ftB.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: seventeenFootLink, label: "17ft", image: "17ftB.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "235": [
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: twentytwoFootLink, label: "22ft", image: "22ftB.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftC.png" }
      ],
      "1057": [
        { element: nineFootLink, label: "9ft", image: "9ftA.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: twentyfiveFootLink, label: "25ft", image: "25ftB.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLinkAlt2, label: "8ft", image: "8ftF.png" }
      ],
      "2627": [
        { element: eightFootLink, label: "8ft", image: "8ftD.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: eighteenFootLink, label: "18ft", image: "18ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: threeFootLink, label: "3ft", image: "3ftA.png" },
        { element: sixFootLink, label: "6ft", image: "6ftB.png" }
      ],
      "707": [
        { element: eightFootLinkAlt2, label: "8ft", image: "8ftE.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: twentysevenFootLink, label: "27ft", image: "27ftA.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" }
      ],
      "1415": [
        { element: nineFootLink, label: "9ft", image: "9ftA.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: twentyfiveFootLink, label: "25ft", image: "25ftC.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "1262": [
        { element: eightFootLink, label: "8ft", image: "8ftD.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: nineteenFootLink, label: "19ft", image: "19ftB.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: sevenFootLink, label: "7ft", image: "7ftA.png" }
      ],
      "797": [
        { element: eightFootLink, label: "8ft", image: "8ftD.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftC.png" },
        { element: nineteenFootLink, label: "19ft", image: "19ftB.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: eightFootLinkAlt2, label: "8ft", image: "8ftE.png" }
      ],
      "518": [
        { element: fourFootLink, label: "4ft", image: "4ftB.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: eighteenFootLink, label: "18ft", image: "18ftC.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "980": [
        { element: sevenFootLink, label: "7ft", image: "7ftA.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: nineteenFootLink, label: "19ft", image: "19ftA.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "1150": [
        { element: eightFootLink, label: "8ft", image: "8ftD.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftD.png" },
        { element: twentyFootLink, label: "20ft", image: "20ftC.png" },
        { element: twoFootLink, label: "2ft", image: "2ftB.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftE.png" },
        { element: eightFootLinkAlt, label: "8ft", image: "8ftB.png" }
      ],
      "912": [
        { element: fiveFootLink, label: "5ft", image: "5ftC.png" },
        { element: fiveFootLinkAlt, label: "5ft", image: "5ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: twentyoneFootLink, label: "21ft", image: "21ftC.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "803": [
        { element: sixFootLink, label: "6ft", image: "6ftB.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: twentyoneFootLink, label: "21ft", image: "21ftD.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "2118": [
        { element: sevenFootLink, label: "7ft", image: "7ftC.png" },
        { element: fourFootLink, label: "4ft", image: "4ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: eighteenFootLink, label: "18ft", image: "18ftE.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftE.png" },
        { element: eightFootLink, label: "8ft", image: "8ftC.png" }
      ],
      "930": [
        { element: eightFootLink, label: "8ft", image: "8ftE.png" },
        { element: fiveFootLink, label: "5ft", image: "5ftD.png" },
        { element: twoFootLink, label: "2ft", image: "2ftA.png" },
        { element: twentytwoFootLink, label: "22ft", image: "22ftC.png" },
        { element: elevenFootLink, label: "11ft", image: "11ftA.png" },
        { element: eightFootLinkAlt2, label: "8ft", image: "8ftF.png" }
      ]

    };

    const activeLinkConfig = storeSpecificLinks[store] || null;

    linkElements.forEach(({ element, defaultLabel }) => {
      element.textContent = defaultLabel;
      element.style.display = "none";
      element.href = "#";
    });

    if (activeLinkConfig) {
      activeLinkConfig.forEach(({ element, label, image }, index) => {
        element.textContent = label;
        element.href = `./image-viewer.html?image=${encodeURIComponent(image)}&return=${encodeURIComponent(`store.html?store=${store}`)}`;
        element.style.display = "inline";
        element.style.order = String(index + 1);
      });

      if (imageSection) {
        const activeElementOrder = activeLinkConfig.map(({ element }) => element);
        const originalFirstLink = imageSection.querySelector(".section-link");

        if (originalFirstLink) {
          activeElementOrder.forEach((element) => {
            if (element && element !== originalFirstLink) {
              imageSection.appendChild(element);
            }
          });
        }
      }
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
