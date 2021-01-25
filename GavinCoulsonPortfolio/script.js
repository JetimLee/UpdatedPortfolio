const myCities = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54366.17719875127!2d34.74191995265761!3d31.609581322927838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15029166b2e7a63b%3A0xcf6958d0335368fd!2sKiryat%20Gat!5e0!3m2!1sen!2sil!4v1610295295423!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.7030882205!2d35.10531865599253!3d31.796299428569423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1610295284141!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97762.13640889876!2d-105.31001753924033!3d40.029288816611576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8d4e278dafd3%3A0xc8393b7ca01b8058!2sBoulder%2C%20CO%2C%20USA!5e0!3m2!1sen!2sil!4v1610295258228!5m2!1sen!2sil"
]


const prevButton = document.querySelector('.prevBtn');
const nextButton = document.querySelector('.nextBtn');
const map = document.getElementById("myCitiesss");
let index = 0;
map.src = myCities[0];



nextButton.addEventListener('click', () => nextPrevCity('next'));
prevButton.addEventListener('click', () => nextPrevCity('prev'));

function nextPrevCity(which) {
  which == 'next' ? index++ : index--;
  map.src = myCities[index];
  checkButtons();
}

function checkButtons() {
  prevButton.disabled = false;
  nextButton.disabled = false;
  if (index === myCities.length - 1)
    nextButton.disabled = true;
  if (!index)
    prevButton.disabled = true;
}


checkButtons();
map.src = myCities[0]; 