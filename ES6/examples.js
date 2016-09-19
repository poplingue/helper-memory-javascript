class Polygone {
  constructor(height, width = 0) {
    this.height = height;
    this.width = width;
  }
}

class Media {
  constructor(title, duration, isPlaying = false) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = isPlaying;
  }
}

class Song extends Media {
  constructor(title) {
    super(title);
  }
}

class Contact {
  constructor(name = '', email = 'contact@test.com') {
    this.name = name;
    this.email = email;

    document.querySelector('.button-es6').addEventListener('click', (e) => {
      console.log(this);
    });

    document.querySelector('.button').addEventListener('click', function(e) {
      console.log(this);
    });
  }
}

import { test } from "./file.js";

var app = {
  init() {
    console.log('init');
    this.class();
    this.fn();
    this.extends();
    this.objLit();
    this.arrowFunction();
    this.concatenation();
    this.destructuring();
    this.destructuringPlus({
      name: "Nom",
      val: "Valeur"
    });
    this.importExport();
    this.setAndMap();
    this.builtMethods();
    this.international();
  },
  fn() {
    var oneToFive = [1, 2, 3, 4, 5];
    var twoToTen = oneToFive.map((n) => n * 2);
  },
  class() {
    var p = new Polygone(10);
    // console.log(p.width);
    p.height = 20;
  },
  extends() {
    var song = new Song('toutouyoutou');
  // console.log('title', song);
  },
  objLit() {},

  arrowFunction(e) {
    var contact = new Contact();
  },
  concatenation() {
    var string = 'toutouyoutou';
    var integer = 5;
  // console.log(`Repeat ${integer} fois ${string}`);
  },
  destructuring() {
    var person = {
      firstName: "Andrew",
      lastName: "Chalkley"
    }

    var {firstName: pseudo} = person;
  // console.log(pseudo);
  },
  destructuringPlus({name: n, val: v}) {
    // console.log(n, v);

    var obj = {
      a: 1,
      b: 2
    };
    //this
    var a = obj.a;
    var b = obj.b;
    var c = obj.c || 3;

    //equivalents that
    var {a, b, c=3} = obj;


  },
  importExport() {
    // console.log(test());
  },
  setAndMap() {
    let s = new Set();
    let m = new Map();

    m.set('mHello', 42);
    // console.log(m.get('mHello'));

    s.add("sHello").add("sHoodbye").add("sHello");

    for (let key of s.values()) {
      // console.log(key);
    }

    for (let [key, val] of m.entries()) {
      // console.log(key, val);
    }
  },
  builtMethods() {
    //assign
    var dst = {
      quux: 0
    };
    var src1 = {
      foo: 1,
      bar: 2
    };
    var src2 = {
      foo: 3,
      baz: 4
    };

    Object.assign(dst, src1, src2);
    // console.log(dst);

    //find
    // console.log([1, 3, 4, 2].find(x => x > 3));

    //string search
    "hello".startsWith("hello"); //true
    "hello".startsWith("ello", 1); // true
    "hello".endsWith("hell", 4); // true
    "hello".includes("ell"); // true
    "hello".includes("ell", 1); // true
    "hello".includes("ell", 2); // false

    //Number
    Number.isNaN(42) === false
    Number.isNaN(NaN) === true
    Math.trunc(42.7) // 42
  },
  international() {

    //numbers
    var l10nEN = new Intl.NumberFormat("en-US");
    var l10nDE = new Intl.NumberFormat("fr-FR");
    // console.log(l10nEN.format(1234567.89), l10nDE.format(1234567.89));

    //date
    var l10nEN = new Intl.DateTimeFormat("en-US");
    var l10nDE = new Intl.DateTimeFormat("fr-FR");
  // console.log(l10nEN.format(new Date("2015-01-02")), l10nDE.format(new Date("2015-01-02")));
  }
};

module.exports = app.init();
