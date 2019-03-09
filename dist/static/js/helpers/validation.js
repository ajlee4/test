'use strict';

(function () {
  var btn = document.querySelector('.btn-primary');
  var btnGold = document.querySelector('.btn__gold');
  var forms = document.forms[0];
  var randomCode = document.querySelector('.js-code');

  function showError(container, errorMessage) {
    container.classList.add('error');
    var msgElem = document.createElement('div');
    msgElem.className = "tooltip-error";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

  function resetError(container) {
    container.classList.remove('error');

    if (container.lastChild.className == "tooltip-error") {
      container.removeChild(container.lastChild);
    }
  }

  function reg(form) {
    var elems = form.elements;
    var name = elems.name;
    var birthday = elems.birthday;

    var _loop = function _loop(i) {
      var value = name[i].value;
      name[i].addEventListener('input', onName);
      birthday.addEventListener('input', onBirthday);

      function onName(e) {
        var newValue = e.target.value;

        if (newValue.match(/[^а-яА-Яa-zA-Z\s]/g)) {
          name[i].value = value;
          return;
        }

        value = newValue;
      }

      function onBirthday(e) {
        var newValue = e.target.value;

        if (newValue.match(/[^0-9]/g)) {
          birthday.value = value;
          return;
        }

        value = newValue;
      }
    };

    for (var i = 0; i < name.length; i++) {
      _loop(i);
    }
  }

  reg(forms);

  function validate(form) {
    var elems = form.elements;
    var name = elems.name;
    var radio = elems.radio;
    var checkbox = elems.checkbox;
    var birthday = elems.birthday;
    var phone = elems.phone;
    var password = elems.password;
    var password2 = elems.password2;
    var email = elems.email;
    var error = document.querySelector('.tooltip-error');

    if (form == forms) {
      for (var i = 0; i < name.length; i++) {
        var value = name[i].value;
        resetError(name[i].parentNode);

        if (value.length < 2) {
          showError(name[i].parentNode, 'Минимальное кол-во символов:2');
        }
      }

      for (var _i = 0; _i < radio.length; _i++) {
        resetError(radio[_i].parentNode);

        if (!radio[_i].checked) {}
      }

      resetError(birthday.parentNode);

      if (birthday.value == 0) {
        showError(birthday.parentNode, 'Введите дату своего рождения');
      }

      resetError(checkbox.parentNode);

      if (!checkbox.checked) {
        showError(checkbox.parentNode, 'Согласитесь с условиями');
      }
    } else {
      resetError(password.parentNode);

      if (password.value.length < 6) {
        showError(password.parentNode, 'Укажите пароль.Минимальное кол-во символов:6');
      } else if (password.value != password2.value) {
        showError(password.parentNode, ' Пароли не совпадают.');
      }

      resetError(phone.parentNode);

      if (phone.value == 0) {
        showError(phone.parentNode, 'Введите телефон');
      }

      resetError(email.parentNode);

      if (email.value == 0) {
        showError(email.parentNode, 'Введите email');
      }
    }

    if (error) {
      return false;
    }

    return true;
  }

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    validate(forms);

    if (validate(forms)) {
      showTapContent(1);
    }
  });
  btnGold.addEventListener('click', function (e) {
    e.preventDefault();
    validate(this.form);
    console.log();

    if (validate(this.form)) {
      showTapContent(2);
    }
  });
  randomCode.addEventListener('click', function () {
    alert(Math.round(Math.random() * 10000));
  });
})(); //Маски


$(document).ready(function () {
  $("#date").mask("99/99/9999");
  $("#phone").mask("+999 99-9999999");
});