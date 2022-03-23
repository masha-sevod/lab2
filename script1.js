console.log("Задача №1");

console.log(typeof(9));
// Предположение: number
// Фактический: number

console.log (typeof(1.2));
// Предположение: number
// Фактический: number

console.log (typeof(NaN));
// Предположение: null
// Фактический: number

console.log (typeof("Hello World"));
// Предположение: string
// Фактический: string

console.log (typeof(true));
// Предположение: boolean
// Фактический: boolean

console.log (typeof(2 != 1));
// Предположение: boolean
// Фактический: boolean

console.log ("сыр" + "ы");
// Предположение: string
// Фактический: сыры

console.log ("сыр" - "ы");
// Предположение: null
// Фактический: NaN

console.log ("2" + "4");
// Предположение: 24
// Фактический: 24

console.log ("2" - "4");
// Предположение: -2
// Фактический: -2

console.log ("Сэм" + 5);
// Предположение: Сэм5
// Фактический: Сэм5

console.log ("Сэм" - 5);
// Предположение: NaN
// Фактический: Nan

console.log (99 * "шары");
// Предположение: NaN
// Фактический: NaN

console.log("Задача №2");
let a = 10, b = 11, P, S, k;
console.log (a, b);
P = (a + b) * 2;
console.log (P);
S = a * b;
console.log (S);
k = P / S;
console.log (k);

console.log("Задача №3");
let c = 20, f = 50;
let far = c * 9 / 5 + 32;
let cels = 5 / 9 * (f - 32);
console.log ("${c}\xB0C соответствует ${far}\xB0F");
console.log ("${f}\xB0F соответствует ${cels}\xB0C");
console.log("Задача №4");
let year= prompt('Введите год');
if ((year % 4 == 0) && (year % 100 != 0)) 
{
    alert('Високосный'); 
}
else
{
    alert('Обычный');
}

console.log("Задача №5");
let number1 = +prompt('Введите первое число');
let number2= +prompt('Введите второе число');
if (((number1 == 10) || (number2 == 10) || ((number1 + number2) == '10')))   {
    alert("True");}
else {
  alert("False");
}

console.log("Задача №6");
let sum = +prompt("Введи количество овец:");
let i = 1;
let str = '\t';
while (i <= sum){
	str += "${i} овечка...";
	i++;
}
console.log(str);

console.log("Задача №7");
for (let j = 0; j <= 15; j++){
	if (j % 2 == 0) {
		console.log(`"${j} четное"`);
	} else {
		console.log(`"${j} нечетное"`);
	}
}

console.log("Задача №8");
let star = "*", sharp = "##", 
strings = star + "\n" + sharp + "\n";
for (let i = 1; i <= 12; i++){
    if (i % 2 !== 0) {
        star += "**";
        strings += star + "\n";
      } 
      else {
        sharp += "##";
        strings += sharp + "\n";
      }
    }
console.log(strings);

console.log("Задача №9");
let n1 = 0, n2 = -3, n3 = 1, zam;
if (n1 > n2) {
    zam = n1;
    n1 = n2;
    n2 = zam;
    }
if (n1 > n3)  {
    zam = n1;
    n1 = n3;
    n3 = zam;
    }
if (n2 > n3) {
    zam = n2;
    n2 = n3;
    n3 = zam;
    }
console.log (n1, n2, n3);

console.log("Задача №10");
let m1 = 2, m2 = -1, m3 = 0, m4 = -5, m5 = -4, max;
if ((m1 > m2) && (m1 > m3) && (m1 > m4) && (m1 > m5)) {
    max = m1;
}
if ((m2 > m1) && (m2 > m3) && (m2 > m4) && (m2 > m5)) {
    max = m2;
}
if ((m3 > m1) && (m3 > m2) && (m3 > m4) && (m3 > m5)) {
    max = m3;
}
if ((m4 > m1) && (m4 > m2) && (m4 > m3) && (m4 > m5)) {
    max = m4;
}
if ((m5 > m1) && (m5 > m2) && (m5 > m3) && (m5 > m4)) {
    max = m5;
}
console.log (max);