"use strict";

var form1 = document.forms.form1;
form1.addEventListener('blur',validateSubmitForm(event),false);

var frm = form1;

var author = frm.elements['author'];
var title = frm.elements['title'];
var url = frm.elements['url'];
var startdate = frm.elements['startdate'];
var persons = frm.elements['persons'];
var email = frm.elements['email'];
var rubric = frm.elements['rubric'];
var publik = frm.elements['publik'];
var comments = frm.elements['comments'];
var article = frm.elements['article'];

function validateSubmitForm() {
  var frm = form1;

  var author = frm.elements['author'];  
  var title = frm.elements['title'];
  var url = frm.elements['url'];
  var startdate = frm.elements['startdate'];
  var persons = frm.elements['persons'];
  var email = frm.elements['email'];
  var rubric = frm.elements['rubric'];
  var publik = frm.elements['publik'];
  var comments = frm.elements['comments'];
  var article = frm.elements['article'];

  if(!(author.value)) {
    author.style.border = '1px solid red';
    return;
  }

  if(!(title.value)) {
    title.style.border = '1px solid red';
    return;
  }

  if(!(url.value)) {
    url.style.border = '1px solid red';
    return;
  }

  if(!(startdate.value)) {
    startdate.style.border = '1px solid red';
    return;
  }

}