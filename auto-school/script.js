const documentOne = document.querySelector('#doc1');
const documentTwo = document.querySelector('#doc2');
const documentThree = document.querySelector('#doc3');
const popup = document.querySelector('.popup');
const popupDocs = document.querySelector('.popup__docs');
const info = document.querySelector('.header__link_button')
const popupNav = document.querySelector('.nav__popup')
const headerArrow = document.querySelector('.header__arrow')
const iframeButton = document.querySelectorAll('.docs__block')
const iframe = document.querySelector('.docs__block_iframe')


const openPopup = function (item) {
  item.classList.toggle('popup__opened');
  document.addEventListener('keydown', closeByEscape);
};

const closePopup = function (item) {
  item.classList.remove('popup__opened');
  popupDocs.src = '';
  popupDocs.alt = '';
  document.removeEventListener('keydown', closeByEscape);
};

function arrowRotate() {
  headerArrow.classList.toggle('header__arrow_up')
}

function openPopupNav() {
  openPopup(popupNav)
}

function openDocOne() {
  openPopup(popup);
  popupDocs.src = documentOne.src;
  popupDocs.alt = documentOne.alt;
}

function openDocTwo() {
  openPopup(popup);
  popupDocs.src = documentTwo.src;
  popupDocs.alt = documentTwo.alt;
}

function openDocThree() {
  openPopup(popup);
  popupDocs.src = documentThree.src;
  popupDocs.alt = documentThree.alt;
}

iframeButton.forEach(item => {
  item.addEventListener('click', function (evt) {
    let checkId = evt.target.firstElementChild.getAttribute('id');

    if (evt.target.classList.contains('docs__block')) {
      document.querySelector(`[frameid="${checkId}"]`).classList.toggle('docs__block_iframe_visible');
    }
  })
})


info.addEventListener('click', openPopupNav)
info.addEventListener('click', arrowRotate)
documentOne.addEventListener('click', openDocOne);
documentTwo.addEventListener('click', openDocTwo);
documentThree.addEventListener('click', openDocThree);

const popupAll = document.querySelectorAll('.popup');

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup__opened');
    closePopup(openedPopup);
  }
}

popupAll.forEach(popup => {
  popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
});

