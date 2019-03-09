'use strict'; //Табы
var formTap = document.querySelectorAll(".tab-item");
var headerTab = document.querySelectorAll('.form-feedback__tab')[0];
var formInfo = document.querySelectorAll('.form-feedback__info');
var formImg = document.querySelectorAll('.form-feedback__img');

function hideTapContent(a) {
  for (var i = a; i < formInfo.length; i++) {
    formInfo[i].classList.remove('show');
    formInfo[i].classList.add('hide');
    formImg[i].classList.remove('show');
    formImg[i].classList.add('hide');
    formTap[i].classList.remove('active');
  }
}

hideTapContent(1);

function showTapContent(b) {
  if (formInfo[b].classList.contains('hide')) {
    hideTapContent(0);
    formInfo[b].classList.remove('hide');
    formInfo[b].classList.add('show');
    formImg[b].classList.remove('hide');
    formImg[b].classList.add('show');
    formTap[b].classList.add('active');
  }
}

headerTab.addEventListener("click", function (e) {
  var target = e.target;

  if (e.target.classList.contains("tab-item")) {
    for (var i = 0; i < 1; i++) {
      if (target == formTap[i]) {
        showTapContent(i);
      }
    }
  }
});