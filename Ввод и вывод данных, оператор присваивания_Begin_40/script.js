//Begin1°. Дана сторона квадрата a. Найти его периметр P = 4·a.
var a =+prompt("Enter number");
var c = 4*a;
document.write(c);

// Begin2°. Дана сторона квадрата a. Найти его площадь S = a2.
var a = +prompt("a=");
var c = a**2
document.write(c);

// Begin3°. Даны стороны прямоугольника a и b. Найти его площадь S = a·b и периметр P = 2·(a + b).
var a =4;
var b = 5;
var s = a*b;
var p = 2*(a+b); 
document.write(s,'    ', p);


// Begin4°. Дан диаметр окружности d. Найти ее длину L = π·d. В качестве значения π использовать 3.14.
var d = +prompt("Enter d=");
var  PI = 3.14;
var l = PI*d;
document.write(l);


// Begin5°. Дана длина ребра куба a. Найти объем куба V = a3 и площадь его поверхности S = 6·a2.
let a = +prompt("Enter the length of the cube:");
let v = a**3;
let s = 6*a**2;
document.write("Cube volume:",v,"<br>Square:",s);


// Begin6°. Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c).
let a = 1;
let b = 2;
let c = 3;
let v = a*b*c;
let s = 2*(a*b+b*c+a*c);
document.write("Volume: v=",v,"<br>Square: s=",s);


// Begin7°. Найти длину окружности L и площадь круга S заданного радиуса R:
// L = 2·π·R,        S = π·R2.
// В качестве значения π использовать 3.14.
let r=5;
let pi=3.14;
let l=2*pi*r;
let s = pi*r**2;
document.write("Circumeference length: L=",l,"<br>Area of the circle",s);


// Begin8°. Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2.
let a=5;
let b=3;
let c=(a+b)/2;
document.write(c);

// Begin9°. Даны два неотрицательных числа a и b. Найти их среднее геометрическое, т. е. квадратный корень из их произведения: (a·b)1/2.
let a=4;
let b=9;
let c=Math.sqrt(a*b);
document.write(c);

// Begin10°. Даны два ненулевых числа. Найти сумму, разность, произведение и частное их квадратов.
let a=25;
let b=100;
let s=Math.pow(b+a,2);
let r=Math.sqrt(b)-Math.sqrt(a);
let q=Math.sqrt(b)/Math.sqrt(a);
document.write(s," ",r," ",q)
document.write(s);

// Begin11°. Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.
let a=-50;
let b=100;
let s=Math.abs(b,2)+Math.abs(a,2);
let r=Math.abs(b)-Math.abs(a);
let p=Math.abs(b)*Math.abs(a);
let q=Math.abs(b)/Math.abs(a);
document.write("Sum: ",s,"<br>Difference: ",r,"<br>Product: ",p,"<br>Quotient: ",q);


// Begin12°. Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу c и периметр P:
// c = (a2 + b2)1/2,        P = a + b + c.
let a=+prompt("Enter the length of the catheter: ");
let b=+prompt("Enter the length of the catheter: ");
let c=Math.sqrt(Math.sqrt(a)+Math.sqrt(b));
let p=a+b+c;
document.write("The Hypotenuse of a rectangular triangle is equal to: ", c);
document.write("<br>Perimeter: ",p);


// Begin13°. Даны два круга с общим центром и радиусами R1 и R2 (R1 > R2). Найти площади этих кругов S1 и S2, а также площадь S3 кольца, внешний радиус которого равен R1, а внутренний радиус равен R2:
// S1 = π·(R1)2,        S2 = π·(R2)2,        S3 = S1 − S2.
// В качестве значения π использовать 3.14.

let r1=+prompt("Enter length of the radius: R1=");
let r2=+prompt("Enter length of the radius: R2=");
let pi=3.14;
let s1=pi*r1**2;
let s2=pi*r2**2;
let s3=Math.abs(s1-s2);
document.write("The area of the first circle is equal to: ",s1,"<br>The area of the second circle is equal to: ",s2,"<br>The area of the ring is equal to: ",s3);


// Begin14°. Дана длина L окружности. Найти ее радиус R и площадь S круга, ограниченного этой окружностью, учитывая, что L = 2·π·R,    S = π·R2. В качестве значения π использовать 3.14.
let l=+prompt("Enter length of the circle: ");
let pi=3.14;
let r=(2*pi)/l;
let s=pi*r**2;
document.write("The radius of a circle is equal to: ",r,"<br>The area of the circle is equal to: ",s);


// Begin15°. Дана площадь S круга. Найти его диаметр D и длину L окружности, ограничивающей этот круг, учитывая, что L = π·D,    S = π·D2/4. В качестве значения π использовать 3.14.
let s=+prompt("Enter area of the circle: ");
let pi=3.14;
let d=Math.sqrt((s*4)/pi);
let l=pi*d;
document.write("The diameter of the circle is equal to:",d,"<br>The length of the circle is equal to: ",l);


// Begin16°. Найти расстояние между двумя точками с заданными координатами x1 и x2 на числовой оси: |x2 − x1|.
let x1=+prompt("Enter x=");
let x2=+prompt("Enter x2=");
let l=Math.abs(x1-x2);
document.write("The distance between x1 and x2 is equal to: ",l);


// Begin17°. Даны три точки A, B, C на числовой оси. Найти длины отрезков AC и BC и их сумму.
let a=-3;
let b=5;
let c=11;
let ac=Math.abs(a-c);
let bc=Math.abs(b-c);
let sum=ac-bc;
document.write("The distance of the AC is equal to: ",ac,"<br>The distance of the BC is equal to: ",bc,"<br>The sum of the segments is equal to: ",sum);


// Begin18°. Даны три точки A, B, C на числовой оси. Точка C расположена между точками A и B. Найти произведение длин отрезков AC и BC.
let a=1;
let b=10;
let c=5;
let ac=Math.abs(a-c);
let bc=Math.abs(b-c);
let product=ac*bc;
document.write("The product of the segments is equal to: ",product);


// Begin19°. Даны координаты двух противоположных вершин прямоугольника: (x1, y1), (x2, y2). Стороны прямоугольника параллельны осям координат. Найти периметр и площадь данного прямоугольника.

// Begin20°. Найти расстояние между двумя точками с заданными координатами (x1, y1) и (x2, y2) на плоскости. Расстояние вычисляется по формуле

// ((x2 − x1)2 + (y2 − y1)2)1/2.
