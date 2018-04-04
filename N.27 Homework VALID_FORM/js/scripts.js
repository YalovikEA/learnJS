"use strict";

var frm = document.forms.form1;
frm.addEventListener('submit',validateSubmitForm);

var elems = frm.elements;

for(var i=0; i<elems.length; i++){
  var elem = elems[i];
  elem.addEventListener('blur',blur);
};


function showError(elem, errorMessage) {
  elem.className = 'error';
  var msgElem = document.createElement('span');
  msgElem.className = "error-message";
  msgElem.innerHTML = errorMessage;
  elem.parentNode.appendChild(msgElem);
}

function resetError(elem) {
  elem.className = '';
  if (elem.parentNode.lastChild.className == "error-message") {
    elem.parentNode.removeChild(elem.parentNode.lastChild);
  }
}

// // ***** Валидация полей формы на BLUR *****

function blur(e) {
  e = e || window.event;
  var frm = document.forms.form1;
  var elems = frm.elements;

  if(this == elems.author && !this.value) {
    resetError(this);
    showError(this,'Введите автора');
    return;
  }

  if(this == elems.title && !this.value) {
    resetError(this);
    showError(this,'Введите название сайта');
    return;
  }

  if(this == elems.url && !this.value) {
    resetError(this);
    showError(this,'Введите адрес сайта');
    return;
  }
  
  if(this == elems.startdate && !this.value) {
    resetError(this);
    showError(this,'Введите дату запуска сайта');
    return;
  }

  if(this == elems.persons && !this.value) {
    resetError(this);
    showError(this,'Введите количество посетителей в сутки ЦИФРАМИ');
    return;
  }

  if(this == elems.mail && !this.value) {
    resetError(this);
    showError(this,'Введите email для связи');
    return;
  }

  if(this == elems.rubric && this.value == 0) {
    resetError(this);
    showError(this,'Выберите рубрику каталога');
    return;
  }

  // Тут я что-то делаю не так

  // if(this == elems.publik && !this.value == '') {
  //   resetError(this);
  //   showError(this,'Введите форму размещения');
  //   return;
  // }

  if(this == elems.comments && !this.checked) {
    resetError(this);
    showError(this,'Разрешите отзывы');
    return;
  }

  if(this == elems.article && !this.value) {
    resetError(this);
    showError(this,'Опишите свой сайт');
    return;
  }

  resetError(this);
};

// ***** Валидация формы на SUBMIT *****

function validateSubmitForm(e) {
  e = e || window.event;

  try {
    var frm = document.forms.form1;
    var elems = frm.elements;

    for(var i=0; i<elems.length; i++){
      var elem = elems[i];
      resetError(elem);
    };

    if(!elems.author.value) {
      showError(elems.author,'Введите автора');
      e.preventDefault();
    }   

    if(!elems.title.value) {
      showError(elems.title,'Введите название сайта');
      e.preventDefault();
    }

    if(!elems.url.value) {
      showError(elems.url,'Введите адрес сайта');
      e.preventDefault();
    }
    
    if(!elems.startdate.value) {
      showError(elems.startdate,'Введите дату запуска сайта');
      e.preventDefault();
    }

    if(!elems.persons.value){
      showError(elems.persons,'Введите количество посетителей в сутки ЦИФРАМИ');
    }

    if(!elems.mail.value) {
      showError(elems.mail,'Введите email для связи');
      e.preventDefault();
    }

    if(elems.rubric.value == 0) {
      showError(elems.rubric,'Выберите рубрику каталога');
      e.preventDefault();
    }
    
    // Тут я что-то делаю не так

    // if(elems.publik.value =='') {
    //   showError(elems.publik,'Введите форму размещения');
    //   e.preventDefault();
    // }

    if(!elems.comments.checked) {
      showError(elems.comments,'Разрешите отзывы');
      e.preventDefault();
    }

    if(!elems.article.value) {
      showError(elems.article,'Опишите свой сайт');
      e.preventDefault();
    }

    var errorElem = document.querySelector('.error');
    if(errorElem) {
      errorElem.focus();
    }
  }

  catch ( ex ) {
    e.preventDefault(); // что-то пошло не так
  }

}  