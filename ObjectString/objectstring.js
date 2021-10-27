function objectString(str) {
  console.log("------------------------------------------------");
  let strPrimitiva = "IOC";
  let strObjecte = new String(strPrimitiva);
  console.log(typeof strPrimitiva); //string
  console.log(typeof strObjecte); //object
  console.log("------------------------------------------------");

  console.log("transformar un object al tipus primitou");
  let str1 = "2+2"; // tipus primitiu de cadena
  let str2 = new String("2+2");
  console.log(eval(str1)); // retorna (4)
  console.log(eval(str2)); // retorna (2+2)
  console.log("------------------------------------------------");

  console.log(eval(str2.valueOf())); //retorna 4
  console.log("------------------------------------------------");

  str = "IOC";
  console.log("length: " + str1.length); // retorna 3
  console.log("------------------------------------------------");

  console.log(str.charAt(0)); // retorna I
  console.log(str.charAt(1)); // retorna O
  console.log(str.charAt(2)); // retorna C
  console.log("------------------------------------------------");

  console.log("nom : ".concat(str));
  console.log("------------------------------------------------");

  console.log("IOC es una universitat".startsWith(str));
  console.log("------------------------------------------------");

  console.log("la univeritat IOC".endsWith(str));
  console.log("------------------------------------------------");

  console.log("la IOC es una universitat".includes(str));
  console.log("------------------------------------------------");

  console.log("la IOC es una universitat IOC".indexOf(str));
  console.log("------------------------------------------------");

  console.log("la IOC es una universitat IOC".lastIndexOf(str));
  console.log("------------------------------------------------");

  console.log("la IOC es una universitat IOC".match(/^[l][a-zA-Z]/));

  //Url checker with or without http:// or https://
  //^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$
  //Only letters and numbers
  //[^A-Za-z0-9]+
  //date format (yyyy-mm-dd)
  //([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))
  //Extract String Between Two STRINGS
  //(?<=% of )(.*)(?= at )
  /*
  Cheat Sheet
Character classes
.	any character except newline
\w \d \s	word, digit, whitespace
\W \D \S	not word, digit, whitespace
[abc]	any of a, b, or c
[^abc]	not a, b, or c
[a-g]	character between a & g
Anchors
^abc$	start / end of the string
\b	word boundary
Escaped characters
\. \* \\	escaped special characters
\t \n \r	tab, linefeed, carriage return
\u00A9	unicode escaped ©
Groups & Lookaround
(abc)	capture group
\1	backreference to group #1
(?:abc)	non-capturing group
(?=abc)	positive lookahead
(?!abc)	negative lookahead
Quantifiers & Alternation
a* a+ a?	0 or more, 1 or more, 0 or 1
a{5} a{2,}	exactly five, two or more
a{1,3}	between one & three
a+? a{2,}?	match as few as possible
ab|cd	match ab or cd
*/

  console.log("------------------------------------------------");

  console.log(str.repeat(10));
  console.log("------------------------------------------------");

  console.log("La IOC es una universitat".replace("IOC", "UPC"));
  console.log("------------------------------------------------");

  console.log("slice extru una part de la cadena".slice(1, 5));
  console.log("------------------------------------------------");

  console.log("separa una cadena en un array de sub cadenester".split(" "));
  console.log("------------------------------------------------");

  console.log("substr extreu una part de la cadena".substr(0, 15));
  console.log("------------------------------------------------");


  console.log("substring extreu una part de la cadena".substr(0, 15));
  console.log("------------------------------------------------");

  console.log("CONVERTEIX UNA CADENA EN MINUSCULES".toLowerCase());
  console.log("------------------------------------------------");

  console.log("converteix una cadena en majuscules".toUpperCase());
  console.log("------------------------------------------------");

  console.log("    elimina els espais be blanc d'amdos extrems de la cadena    ".trim());
  console.log("------------------------------------------------");

  console.log("toString retorna valor d'un objecte String".toString());
  console.log("------------------------------------------------");

  console.log("valueOf retorna el tipus primitiu d'un objecte string".valueOf());
  console.log("------------------------------------------------");

  let data = new Date(); //data del sistema
  console.log(data);
  data = new Date(34885453664); //genera un data que representa els mil·lisegons que han 
  console.log(data);
  data = new Date('2016/05/23');
  console.log(data);
  data = new Date(2016,5,23,12,15,24,220);  //any,mes,dia,hora,minuts,segons,mil·lisegonsconsole.log(data);
  qdata = new Date(); //data del sistema
  console.log(data);
  console.log("------------------------------------------------");
  

  console.log("------------------------------------------------");
  console.log("------------------------------------------------");
  console.log("------------------------------------------------");
  console.log("------------------------------------------------");
  console.log("------------------------------------------------");
  console.log("------------------------------------------------");
  console.log("------------------------------------------------");
  console.log("------------------------------------------------");
  console.log("------------------------------------------------");
}
