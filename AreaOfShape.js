
//AREA OF TRIANGLE
function aot(){
    let side1 = document.getElementById("side1").value; 
    let side2 = document.getElementById("side2").value;
    let side3 = document.getElementById("side3").value;

    let triangleObj = new Triangle("Triangle");
    triangleObj.area(side1, side2, side3);

    let showArea = document.getElementById("showArea");  
    showArea.style.display = 'inline';

    let displayMsg = document.getElementById("shape");
    displayMsg.innerHTML = triangleObj.show();

    let displayArea = document.getElementById("area");
    displayArea.innerHTML = triangleObj.area(side1, side2, side3);
}

//AREA OF RECTANGLE
function aor(){
    let length = document.getElementById("length").value; 
    let breadth = document.getElementById("breadth").value;

    let rectObj = new Rectangle("Rectangle");
    rectObj.area(length, breadth);

    let showArea = document.getElementById("showArea");  
    showArea.style.display = 'inline';

    let displayMsg = document.getElementById("shape");
    displayMsg.innerHTML = rectObj.show();

    let displayArea = document.getElementById("area");
    displayArea.innerHTML = rectObj.area(length, breadth);
}

//AREA OF CIRCLE
function aoc(){
    let radius = document.getElementById("length").value;

    let circleObj = new Circle("Circle");
    circleObj.area(radius);

    let showArea = document.getElementById("showArea");  
    showArea.style.display = 'inline';

    let displayMsg = document.getElementById("shape");
    displayMsg.innerHTML = circleObj.show();

    let displayArea = document.getElementById("area");
    displayArea.innerHTML = circleObj.area(radius);
}


//DISPLAYING TRIANGLE ATTRIBUTES
function showTriangle(){

    const text = document.getElementById("txt"); 

    text.style.display = 'inline';

    const myTriangle = document.getElementById("myTriangle"); 
    myTriangle.style.display = 'inline';

    const myRectangle = document.getElementById("myRectangle"); 
    myRectangle.style.display = 'none';

    const myCircle = document.getElementById("myCircle"); 
    myCircle.style.display = 'none';

}


//DISPLAYING RECTANGLE ATTRIBUTES
function showRectangle(){

    const text = document.getElementById("txt"); 
    text.style.display = 'inline';

    const myRectangle = document.getElementById("myRectangle"); 
    myRectangle.style.display = 'inline';

    const myTriangle = document.getElementById("myTriangle"); 
    myTriangle.style.display = 'none';

    const myCircle = document.getElementById("myCircle"); 
    myCircle.style.display = 'none';

}


//DISPLAYING CIRCLE ATTRIBUTES
function showCircle(){

    const text = document.getElementById("txt"); 

    text.style.display = 'inline';

    const myCircle = document.getElementById("myCircle"); 

    myCircle.style.display = 'inline';

    const myTriangle = document.getElementById("myTriangle"); 
    myTriangle.style.display = 'none';

    const myRectangle = document.getElementById("myRectangle"); 
    myRectangle.style.display = 'none';
}


//IMPLEMENTATION OF CLASS AND INHERITANCE
class Shape {

    constructor(name){
        this.name = name;
    }

    show(){
        return `You have chosen ${this.name}`;
    }
}

class Triangle extends Shape{

    constructor(name){
        super(name);
    }

    area(s1, s2, s3){
        let s = (s1+s2+s3)/2;
        
        let ar = s * (s - s1) * (s - s2) * (s - s3);

        return Math.sqrt(ar);
    }
}

class Rectangle extends Shape{

    constructor(name){
        super(name);
    }

    area(length, breadth){
        return length * breadth;
    }

}

class Circle extends Shape{

    constructor(name){
        super(name);
    }

    area(radius){
        return (22 * radius * radius) / 7;
    }
}