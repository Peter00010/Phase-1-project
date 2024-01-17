// const fromText = document.querySelector(".from-text");
// toText = document.querySelector(".to-text");
// const selectTag = document.querySelectorAll("select");
// const translateBtn = document.querySelector("button");
// exchangeIcon = document.querySelector(".exchange");
// icons = document.querySelectorAll(".row i");

// selectTag.forEach((tag, id) => {
//   //selecting English by default as FROM language snd Hindi as to Language
//   for (const country_code in countries) {
//     let selected;
//     if (id == 0 && country_code == "en-GB") {
//       selected = "selected";
//     } else if (id == 1 && country_code == "hi-IN") {
//       selected = "selected";
//     }

//     let option = ` <option value = "${country_code}"${selected}>${countries[country_code]}</option> `;
//     tag.insertAdjacentHTML("beforeend", option); //adding options tag inside select tag
//   }
// });

// exchangeIcon.addEventListener("click", () => {
//   //exchanging textarea and select tag values
//   let tempText = fromText.value;
//   tempLang = selectTag[0].value;
//   fromText.value = toText.value;
//   selectTag[0].value = selectTag[1].value;
//   toText.value = tempText;
//   selectTag[1].value = tempLang;
// });

// translateBtn.addEventListener("click", () => {
//   let text = fromText.value,
//     translateFrom = selectTag[0].value, //gettting from select tag value
//     translateTo = selectTag[1].value; //getting from select tag value

//   if (!text) return;
//   toText.setAttribute("placeholder", "Translating...");

//   let apiURL = ` https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
//   //fetching API response and returning it with parsing it with parsing into javascript object and in another then method recieving that object
//   fetch(apiURL)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       toText.value = data.responseData.translatedText;
//       toText.setAttribute("placeholder", "Translation");
//     });
// });

// icons.forEach((icon) => {
//   icon.addEventListener("click", ({ target }) => {
//     if (target.classList.contains("fa-copy")) {
//       //if clicked has "from" id, copy the fromTextarea value else copy the Totextarea value
//       if (target.id == "from") {
//         navigator.clipboard.writeText(fromText.value);
//       } else {
//         navigator.clipboard.writeText(toText.value);
//       }
//     } else {
//       let utterance;
//       //if clicked icon has from id =, speak the fromTextArea value else speak the ToTextarea value
//       if (target.id == "from") {
//         utterance = new SpeechSynthesisUtterance(fromText.value);
//         utterance.lang = selectTag[0].value; //setting utterance language to fromselectTag value
//       } else {
//         utterance = new SpeechSynthesisUtterance(toText.value);
//         utterance.lang = selectTag[1].value; //setting utterance language to toselectTag value
//       }
//       speechSynthesis.speak(utterance); //speak the passed utterance
//     }
//   });
// });
