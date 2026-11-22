// using code and i will try to solve a quadratic equation ax*x + bX + c = 0


function solveQuadratic(a,b,c){
    const discriminant = b *b - 4 * a * c;
        
if(discriminant > 0 ){
     const x1 =  (-b + Math.sqrt(discriminant))/(2*a);
      const x2 =  (-b - Math.sqrt(discriminant))/(2*a);
      return {x1,x2};

}
else if (discriminant === 0 ){
    const x = -b /(2*a);
    return{x1:x,x2:x }
}
else{
     const real =  -b/(2*a);
     const imaginary = Math.sqrt(-discriminant)/(2*a);
     return {x1:`${real} + ${imaginary}i` ,x2:`${real} -${imaginary}i`};
}


}
console.log(solveQuadratic(1,-5,6));
console.log(solveQuadratic(1,2,5))