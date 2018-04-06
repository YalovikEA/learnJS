"use strict";

function validAuthor(autoFocus) {
  var errCount=0;  
  var authorField=document.forms.form1.author; 
  var authorValue=authorField.value;
  var authorErr=document.querySelector('.author-err');
  
  if ( authorValue=="" ) {
    authorErr.innerHTML = "Введите автора";
    errCount++; 
  } else {
    authorErr.innerHTML="";
  }    

  if ( errCount && autoFocus ) {
    authorField.focus();
  }
  return errCount; 
}

function validTitle(autoFocus) {
  var errCount=0;  
  var titleField=document.forms.form1.title; 
  var titleValue=titleField.value;
  var titleErr=document.querySelector('.title-err');
  
  if ( titleValue=="" ) {
    titleErr.innerHTML = "Введите название сайта";
    errCount++; 
  } else {
    titleErr.innerHTML="";
  }    

  if ( errCount && autoFocus ) {
    titleField.focus();
  }
  return errCount; 
}

function validUrl(autoFocus) {
  var errCount=0;  
  var urlField=document.forms.form1.url; 
  var urlValue=urlField.value;
  var urlErr=document.querySelector('.url-err');
  
  if ( urlValue=="" ) {
    urlErr.innerHTML = "Введите адрес сайта";
    errCount++; 
  } else {
    urlErr.innerHTML="";
  }    

  if ( errCount && autoFocus ) {
    urlField.focus();
  }
  return errCount; 
}

function validStartdate(autoFocus) {
  var errCount=0;  
  var startdateField=document.forms.form1.startdate; 
  var startdateValue=startdateField.value;
  var startdateErr=document.querySelector('.startdate-err');
  
  if ( startdateValue=="" ) {
    startdateErr.innerHTML = "Введите дату запуска сайта";
    errCount++; 
  } else {
    startdateErr.innerHTML="";
  }    

  if ( errCount && autoFocus ) {
    startdateField.focus();
  }
  return errCount; 
}

function validPersons(autoFocus) {
  var errCount=0;  
  var personsField=document.forms.form1.persons; 
  var personsValue=personsField.value;
  var personsErr=document.querySelector('.persons-err');
  
  if ( personsValue=="" ) {
    personsErr.innerHTML = "Введите количество посетителей в сутки ЦИФРАМИ";
    errCount++; 
  } else {
    personsErr.innerHTML="";
  }    

  if ( errCount && autoFocus ) {
    personsField.focus();
  }
  return errCount; 
}

function validMail(autoFocus) {
  var errCount=0;  
  var mailField=document.forms.form1.mail; 
  var mailValue=mailField.value;
  var mailErr=document.querySelector('.mail-err');
  
  if ( mailValue=="" ) {
    mailErr.innerHTML = "Выберите рубрику каталога";
    errCount++; 
  } else {
    mailErr.innerHTML="";
  }    

  if ( errCount && autoFocus ) {
    mailField.focus();
  }
  return errCount; 
}

function validRubric(autoFocus) {
  var errCount=0;  
  var rubricField=document.forms.form1.rubric; 
  var rubricValue=rubricField.value;
  var rubricErr=document.querySelector('.rubric-err');
  

  switch(rubricValue) {
    case ('0'):
      rubricErr.innerHTML = "Вы ничего не выбрали";
      errCount++;
      break;
    case ('2'):
      rubricErr.innerHTML = "Этот раздел в разработке";
      errCount++;
      break;
    default: 
      rubricErr.innerHTML="";
  }

  if ( errCount && autoFocus ) {
    rubricField.focus();
  }
  return errCount; 
}

function validPublik(autoFocus) {
  var errCount=0;  
  var publikField=document.forms.form1.publik; 
  var publikValue=publikField.value;
  var publikErr=document.querySelector('.publik-err');
 
  switch(publikValue) {
    case (''):
      publikErr.innerHTML = "Вы ничего не выбрали";
      errCount++;
      break;
    case ('1'):
      publikErr.innerHTML = "Бесплатно только сыр в мышеловке";
      errCount++;
      break;
    case ('2'):
      publikErr.innerHTML = "Остались только VIP";
      errCount++;
      break;
    default: 
      publikErr.innerHTML="";
  }

  if ( errCount && autoFocus ) {
    publikField[2].focus();
  }
  return errCount; 
}

function validComments(autoFocus) {
  var errCount=0;  
  var commentsField=document.forms.form1.comments; 
  var commentsValue=commentsField.value;
  var commentsErr=document.querySelector('.comments-err');
  
  if ( !commentsField.checked ) {
    commentsErr.innerHTML = "Разрешите отзывы";
    errCount++; 
  } else {
    commentsErr.innerHTML="";
  }    

  if ( errCount && autoFocus ) {
    commentsField.focus();
  }
  return errCount; 
}

function validArticle(autoFocus) {
  var errCount=0;  
  var articleField=document.forms.form1.article; 
  var articleValue=articleField.value;
  var articleErr=document.querySelector('.article-err');
  
  if ( articleValue=="" ) {
    articleErr.innerHTML = "Опишите свой сайт";
    errCount++; 
  } else {
    articleErr.innerHTML="";
  }    

  if ( errCount && autoFocus ) {
    articleField.focus();
  }
  return errCount; 
}

document.forms.form1.author.onblur=function() { validAuthor(false); }
document.forms.form1.title.onblur=function() { validTitle(false); }
document.forms.form1.url.onblur=function() { validUrl(false); }
document.forms.form1.startdate.onblur=function() { validStartdate(false); }
document.forms.form1.persons.onblur=function() { validPersons(false); }
document.forms.form1.mail.onblur=function() { validMail(false); }
document.forms.form1.rubric.onchange=function() { validRubric(false); }
document.forms.form1.publik[0].onchange=function() { validPublik(false); }
document.forms.form1.publik[1].onchange=function() { validPublik(false); }
document.forms.form1.publik[2].onchange=function() { validPublik(false); }
document.forms.form1.comments.onchange=function() { validComments(false); }
document.forms.form1.article.onblur=function() { validArticle(false); }

function validAll(EO) {
  EO=EO||window.event;

  try {
      var totalErrCount=0;
      totalErrCount+=validAuthor( !totalErrCount );
      totalErrCount+=validTitle( !totalErrCount );
      totalErrCount+=validUrl( !totalErrCount );
      totalErrCount+=validStartdate( !totalErrCount );
      totalErrCount+=validPersons( !totalErrCount );
      totalErrCount+=validMail( !totalErrCount );
      totalErrCount+=validRubric( !totalErrCount );
      totalErrCount+=validPublik( !totalErrCount );
      totalErrCount+=validComments( !totalErrCount );
      totalErrCount+=validArticle( !totalErrCount );

      if ( totalErrCount )
          EO.preventDefault(); // если ошибки были - отменяем отправку формы на сервер
  }
  catch ( err ) {
      EO.preventDefault(); // что-то пошло не так - отменяем отправку формы на сервер
  }
}


document.forms.form1.addEventListener('submit',validAll,false);






















// var frm = document.forms.form1;
// frm.addEventListener('submit',validateSubmitForm);

// var elems = frm.elements;

// for(var i=0; i<elems.length; i++){
//   var elem = elems[i];
//   if(elem == elems.rubric) {
//     elem.addEventListener('change', validateField);
//   } else if(elem == elems.publik[0]) {
//     elem.addEventListener('change', validateField);      
//   } else if(elem == elems.publik[1]) {
//     elem.addEventListener('change', validateField);      
//   } else if(elem == elems.publik[2]) {
//     elem.addEventListener('change', validateField);      
//   } else if(elem == elems.comments) {
//     elem.addEventListener('change', validateField);      
//   } else {
//     elem.addEventListener('blur',validateField);
//   }
  
// };

// function showError(elem, errorMessage) {
//   elem.className = 'error';
//   var msgElem = document.createElement('span');
//   msgElem.className = "error-message";
//   msgElem.innerHTML = errorMessage;
//   elem.parentNode.appendChild(msgElem);
// }
// function showErrorRadio(elem, errorMessage) {
//   elem.parentElement.className = 'error';
//   var msgElem = document.createElement('span');
//   msgElem.className = "error-message";
//   msgElem.innerHTML = errorMessage;
//   elem.parentElement.appendChild(msgElem);
// }
// function resetErrorRadio(elem) {
//   elem.parentElement.className = '';
//   if (elem.parentElement.lastChild.className == "error-message") {
//     elem.parentElement.removeChild(elem.parentElement.lastChild);
//   }
// }

// function resetError(elem) {
//   elem.className = '';
//   if (elem.parentNode.lastChild.className == "error-message") {
//     elem.parentNode.removeChild(elem.parentNode.lastChild);
//   }
// }

// // // ***** Валидация полей формы на BLUR и CHANGE *****

// function validateField(e) {
//   e = e || window.event;
//   var frm = document.forms.form1;
//   var elems = frm.elements;

//   var radio = document.getElementById('radio')

//   if(this == elems.author && !this.value) {
//     resetError(this);
//     showError(this,'Введите автора');
//     return;
//   }

//   if(this == elems.title && !this.value) {
//     resetError(this);
//     showError(this,'Введите название сайта');
//     return;
//   }

//   if(this == elems.url && !this.value) {
//     resetError(this);
//     showError(this,'Введите адрес сайта');
//     return;
//   }
  
//   if(this == elems.startdate && !this.value) {
//     resetError(this);
//     showError(this,'Введите дату запуска сайта');
//     return;
//   }

//   if(this == elems.persons && !this.value) {
//     resetError(this);
//     showError(this,'Введите количество посетителей в сутки ЦИФРАМИ');
//     return;
//   }

//   if(this == elems.mail && !this.value) {
//     resetError(this);
//     showError(this,'Введите email для связи');
//     return;
//   }

//   if(this == elems.rubric && this.value == 0) {
//     resetError(this);
//     showError(this,'Выберите рубрику каталога');
//     return;
//   }
//   if(this == elems.rubric && this.value == 1) {
//     resetError(this);
//     showError(this,'В этом разделе нет мест');
//     return;
//   }

//   // Тут я исправлял
 
//   if(this == elems.publik[0]) {
//     resetErrorRadio(elems.publik[0]);
//     showErrorRadio(elems.publik[0],'"Эта услуга не работает"');
//     return;
//   }
//   if(this == elems.publik[1]) {
//     resetErrorRadio(elems.publik[1]);
//     return;
//   }
//   if(this == elems.publik[2]) {
//     resetErrorRadio(elems.publik[2]);
//     showErrorRadio(elems.publik[2],'VIP мест не осталось');
//     return;
//   }

//   if(this == elems.comments && !this.checked) {
//     resetError(this);
//     showError(this,'Разрешите отзывы');
//     return;
//   }

//   if(this == elems.article && !this.value) {
//     resetError(this);
//     showError(this,'Опишите свой сайт');
//     return;
//   }

//   resetError(this);
// };

// // ***** Валидация формы на SUBMIT *****

// function validateSubmitForm(e) {
//   e = e || window.event;

//   try {
//     var frm = document.forms.form1;
//     var elems = frm.elements;

//     for(var i=0; i<elems.length; i++){
//       var elem = elems[i];
//       resetError(elem);
//     };

//     if(!elems.author.value) {
//       showError(elems.author,'Введите автора');
//       e.preventDefault();
//     }   

//     if(!elems.title.value) {
//       showError(elems.title,'Введите название сайта');
//       e.preventDefault();
//     }

//     if(!elems.url.value) {
//       showError(elems.url,'Введите адрес сайта');
//       e.preventDefault();
//     }
    
//     if(!elems.startdate.value) {
//       showError(elems.startdate,'Введите дату запуска сайта');
//       e.preventDefault();
//     }

//     if(!elems.persons.value){
//       showError(elems.persons,'Введите количество посетителей в сутки ЦИФРАМИ');
//     }

//     if(!elems.mail.value) {
//       showError(elems.mail,'Введите email для связи');
//       e.preventDefault();
//     }

//     if(elems.rubric.value == 0) {
//       showError(elems.rubric,'Выберите рубрику каталога');
//       e.preventDefault();
//     }
//     if(elems.rubric.value == 1) {
//       showError(elems.rubric,'В этом разделе нет мест');
//       e.preventDefault();
//     }

//     // Тут я исправлял

//     if(elems.publik.value == '') {
//       showError(elems.publik[0],'Вы ничего не выбрали');
//       e.preventDefault();
//     }
//     if(elems.publik.value == 3) {
//       showError(elems.publik[2],'VIP мест не осталось');
//       e.preventDefault();
//     }

//     if(!elems.comments.checked) {
//       showError(elems.comments,'Разрешите отзывы');
//       e.preventDefault();
//     }

//     if(!elems.article.value) {
//       showError(elems.article,'Опишите свой сайт');
//       e.preventDefault();
//     }

//     var errorElem = document.querySelectorAll('.error');
//     console.log(errorElem)
    
//     for(var i=0; i<errorElem.length; i++) {
//       console.log(errorElem[i])
//       elems.focus()
//     }
    
//   }

//   catch ( ex ) {
//     e.preventDefault(); // что-то пошло не так
//   }

// }  