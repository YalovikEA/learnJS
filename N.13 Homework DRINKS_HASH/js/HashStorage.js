window.onload = function() {
  "use strict";

// Разработать класс HashStorage (в файле HashStorage.js) для хранения в хэше произвольных пар ключ-значение.
// Ключ может быть любой строкой; значение может иметь любой тип, в том числе векторный (хэш, массив и т.д.)
// Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
// addValue(key,value) — сохраняет указанное значение под указанным ключом;
// getValue(key) — возвращает значение по указанному ключу либо undefined;
// deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
// getKeys() — возвращает массив, состоящий из одних ключей.
// Класс должен быть чистым (не должен использовать никаких глобальных переменных, не, должен «пачкать экран»). 
// Класс должен быть универсальным, т.е. не зависеть ни от структуры хранимых данных, ни от способа их последующего использования (в т.ч. не должен содержать никаких ссылок на DOM, т.к. может использоваться и вообще без веб-страницы).

  function HashStorage() {
    this.storage = {};
  }

  HashStorage.prototype.addValue = function (key,value) {
    // сохраняет указанное значение под указанным ключом;
    this.storage[key]=value;
  }

  HashStorage.prototype.getValue = function (key) {
    // возвращает значение по указанному ключу либо undefined;
    if (key in this.storage) {
      return this.storage[key];
    }
    return undefined
  }
  HashStorage.prototype.deleteValue = function (key) {
    // удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    if (key in this.storage) {
      delete this.storage[key];
      return true
    } 
    return false
  }
  HashStorage.prototype.getKeys = function () {
    // возвращает массив, состоящий из одних ключей.
    return Object.keys(this.storage);
  }

  // Создать объект drinkStorage класса HashStorage для хранения рецептов напитков.
  // Ключом является название напитка; значением — информация о напитке (алкогольный напиток или нет, строка с рецептом приготовления и т.д. по желанию).
  var drinkStorage = new HashStorage();

  var table = document.querySelector('.table');

  // «ввод информации о напитке» — последовательно спрашивает название напитка, алкогольный он или нет, рецепт его приготовления; сохраняет информацию о напитке в хранилище.
  var add = document.querySelector('.control .add');
  add.onclick = function () {
    var key = prompt('Введите название напитка','');

    var value = (function () {
      var alcohol = confirm('Напиток алкогольный?');
      var recept  = prompt('Напишите рецепт','');
      var answer = (function () {
        value = `\nНапиток: ${key};
        \nАлкогольный: ${alcohol ? 'Да' : 'Нет'};
        \nРецепт приготовления: ${recept}.`;
        return value;
      })();
      return value;
    })();

    return drinkStorage.addValue(key,value);
  };

  // «получение информации о напитке» — спрашивает название напитка и выдаёт (на страницу, в консоль или в alert) либо информацию о нём (по примеру, приведённому ниже), либо сообщение об отсутствии такого напитка в хранилище.
  var info = document.querySelector('.control .info');
  info.onclick = function () {
    var key = prompt('Введите название напитка','');    
    console.log(drinkStorage.getValue(key));
    table.innerHTML = drinkStorage.getValue(key);
  }

  // «удаление информации о напитке» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения в информационное окно.
  var del = document.querySelector('.control .del');
  del.onclick = function () {
    var key = prompt('Введите название напитка','');
    console.log(drinkStorage.deleteValue(key));
    table.innerHTML = drinkStorage.deleteValue(key);
  }

  // «перечень всех напитков» — выдаёт в информационное окно перечень всех напитков из хранилища (только названия).
  var list = document.querySelector('.control .list');
  list.onclick = function () {
    console.log(drinkStorage.getKeys());
    table.innerHTML = drinkStorage.getKeys();
  }

}
