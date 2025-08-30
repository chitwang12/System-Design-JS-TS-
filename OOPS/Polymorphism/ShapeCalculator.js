class ShapeCalculator{
    

    area(...args){
        let result = 0;

        if(args.length === 1){
            const radius = args[0];
            result = Math.PI * radius * radius; // Area of Circle
        }else if(args.length === 2){
            const length = args[0];
            const width = args[1];
            result = length * width; // Area of Rectangle
    }else if(args.length === 3){
        const [base1, base2, base3] = args;
        result = ((base1 + base2) * height)/2;
    }
    console.log("Area: " + result.toFixed(2));
}
}


const calc = new ShapeCalculator();

calc.area(5); // Circle with radius 5
calc.area(10, 5); // Rectangle with length 10 and width 5
calc.area(10, 5, 7); // Triangle with base1 10, base2 5 and height 7