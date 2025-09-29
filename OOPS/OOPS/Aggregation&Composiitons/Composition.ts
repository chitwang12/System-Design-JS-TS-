class College{
    private name: string;
    private id: string;

    constructor(name: string, id: string){
        this.name = name;
        this.id = id;
    }


    displayDetails(){
        console.log(`College Name: ${this.name}, ID: ${this.id}`);
        console.log('-----------------------------');
    }
}

class University{
    private name: string;
    private colleges: College[] = []; //Composition

    constructor(name: string){
        this.name = name;
    }

    addCollege(collegeName: string, collegeId: string){
        const college = new College(collegeName, collegeId);
        this.colleges.push(college);
    }

    displayDetails(): void{
        console.log(`University Name: ${this.name}`);
        console.log('Colleges:');
        this.colleges.forEach(college => college.displayDetails());
    }
}

const uni = new University("Global_University");

const collegeNames = ["COEP", "PICT", "VJTI", "WCE", "PCCOE"];
const collegeIds = ["CO8543", "PI9514", "VJ8643", "VF569", "PC9246"];

for (let i = 0; i < collegeNames.length; i++) {
  uni.addCollege(collegeNames[i], collegeIds[i]);
}

uni.displayDetails();
