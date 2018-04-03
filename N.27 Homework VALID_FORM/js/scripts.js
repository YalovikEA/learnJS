"use strict";

var frm = document.forms.form1;
frm.addEventListener('submit',validateSubmitForm);

var elems = frm.elements;

for(var i=0; i<elems.length; i++){
  var elem = elems[i];
  elem.addEventListener('blur',blur);
};


function showError(parent, errorMessage) {
  parent.className = 'error';
  var msgElem = document.createElement('span');
  msgElem.className = "error-message";
  msgElem.innerHTML = errorMessage;
  parent.appendChild(msgElem);
}

function resetError(parent) {
  parent.className = '';
  if (parent.lastChild.className == "error-message") {
    parent.removeChild(parent.lastChild);
  }
}

// // ***** Валидация полей формы на BLUR *****

function blur(e) {
  e = e || window.event;
  var frm = document.forms.form1;
  var elems = frm.elements;

  if(this == elems.author && !this.value) {
    resetError(this.parentNode);
    showError(this.parentNode,'Введите автора');
    return;
  }

  if(this == elems.title && !this.value) {
    resetError(this.parentNode);
    showError(this.parentNode,'Введите название сайта');
    return;
  }

  if(this == elems.url && !this.value) {
    resetError(this.parentNode);
    showError(this.parentNode,'Введите адрес сайта');
    return;
  }
  
  if(this == elems.startdate && !this.value) {
    resetError(this.parentNode);
    showError(this.parentNode,'Введите дату запуска сайта');
    return;
  }

  if(this == elems.persons && !this.value) {
    resetError(this.parentNode);
    showError(this.parentNode,'Введите количество посетителей в сутки ЦИФРАМИ');
    return;
  }

  if(this == elems.mail && !this.value) {
    resetError(this.parentNode);
    showError(this.parentNode,'Введите email для связи');
    return;
  }

  if(this == elems.rubric && this.value == 0) {
    resetError(this.parentNode);
    showError(this.parentNode,'Выберите рубрику каталога');
    return;
  }

  // if(this == elems.publik && !this.value == '') {
  //   resetError(this.parentNode);
  //   showError(this.parentNode,'Введите форму размещения');
  //   return;
  // }

  if(this == elems.comments && !this.checked) {
    resetError(this.parentNode);
    showError(this.parentNode,'Разрешите отзывы');
    return;
  }

  if(this == elems.article && !this.value) {
    resetError(this.parentNode);
    showError(this.parentNode,'Опишите свой сайт');
    return;
  }

  resetError(this.parentNode);
};

// ***** Валидация формы на SUBMIT *****

function validateSubmitForm(e) {
  e = e || window.event;

  try {
    var frm = document.forms.form1;
    var elems = frm.elements;

    for(var i=0; i<elems.length; i++){
      var elem = elems[i];
      resetError(elem.parentNode);
    };

    if(!elems.author.value) {
      showError(elems.author.parentNode,'Введите автора');
      elems.author.focus();
      e.preventDefault();
    }

    if(!elems.title.value) {
      showError(elems.title.parentNode,'Введите название сайта');
      elems.title.focus();
      e.preventDefault();
    }

    if(!elems.url.value) {
      showError(elems.url.parentNode,'Введите адрес сайта');
      elems.url.focus();
      e.preventDefault();
    }
    
    if(!elems.startdate.value) {
      showError(elems.startdate.parentNode,'Введите дату запуска сайта');
      elems.startdate.focus();
      e.preventDefault();
    }

    if(!elems.persons.value){
      showError(elems.persons.parentNode,'Введите количество посетителей в сутки ЦИФРАМИ');
      elems.persons.focus();
      e.preventDefault();
    }

    if(!elems.mail.value) {
      showError(elems.mail.parentNode,'Введите email для связи');
      elems.mail.focus();
      e.preventDefault();
    }

    if(elems.rubric.value == 0) {
      showError(elems.rubric.parentNode,'Выберите рубрику каталога');
      elems.rubric.focus();
      e.preventDefault();
    }
    
    // if(elems.publik.value =='') {
    //   showError(elems.publik.parentNode,'Введите форму размещения');
    //   e.preventDefault();
    // }

    if(!elems.comments.checked) {
      showError(elems.comments.parentNode,'Разрешите отзывы');
      elems.comments.focus();
      e.preventDefault();
    }

    if(!elems.article.value) {
      showError(elems.article.parentNode,'Опишите свой сайт');
      elems.article.focus();
      e.preventDefault();
    }

  }

  catch ( ex ) {
    e.preventDefault(); // что-то пошло не так
  }

}  