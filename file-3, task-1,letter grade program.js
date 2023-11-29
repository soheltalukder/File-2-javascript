

let mark=Number(prompt("Enter your Mark : "));

if(mark>=80 && mark<=100){
    document.write('You get GPA 5.00 and Letter Grade : A+');
}
else if(mark>=70 && mark<80){
    document.write('You get GPA 4.00 and Letter Grade : A');
}
else if (mark>=60 && mark<70){
    document.write('You get GPA 5.00 and Letter Grade : A-');
}
else if (mark>=50 && mark<60){
    document.write('You get GPA 3.50 and Letter Grade : B');
}
else if (mark>=40 && mark<50){
    document.write('You get GPA 3.00 and Letter Grade : C');
}
else if (mark>=33 && mark<40){
    document.write('You get GPA 2.00 and Letter Grade : D');
}
else if (mark>=0 && mark<33){
    document.write('You get GPA 0.00 and Letter Grade : F');
}
else {
    document.write("Invalide your number ");
}
