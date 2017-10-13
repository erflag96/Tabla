
var num= parseInt (prompt("Introduce un valor del 1 al 100",""));
alert(num);
var cont= 1;
while(num>100 || num<1){

num= parseInt (prompt("Introduce un valor del 1 al 100",""));

}

while(cont<=10){

	console.log(num*cont);
	cont++;
}