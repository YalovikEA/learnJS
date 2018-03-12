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
      return console.log(this.storage[key]);
    }
    return console.log(undefined)
}
HashStorage.prototype.deleteValue = function (key) {
    // удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    if (key in this.storage) {
      delete this.storage[key];
      return console.log('true');
    } 
    return console.log('false')
}
HashStorage.prototype.getKeys = function () {
    // возвращает массив, состоящий из одних ключей.
    console.log(Object.keys(this.storage));
}

// Создать объект drinkStorage класса HashStorage для хранения рецептов напитков.
// Ключом является название напитка; значением — информация о напитке (алкогольный напиток или нет, строка с рецептом приготовления и т.д. по желанию).
var drinkStorage = new HashStorage();

// drinkStorage.addValue(123,122151252);
// drinkStorage.addValue(3223,"12312312312asfa1");
// drinkStorage.addValue(2222,"22222");
// drinkStorage.addValue(33333,"333333");
// drinkStorage.addValue(4444,"444444");

// drinkStorage.deleteValue(123);
// drinkStorage.getKeys();
// drinkStorage.getValue(2222);








console.log(HashStorage);
console.log(drinkStorage);
console.log(drinkStorage.storage);
