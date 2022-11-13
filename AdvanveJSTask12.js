class Student{
    static count=0;
    constructor(name,age,ph,marks){
        this.name=name
        this.age=age
        this.ph=ph
        this.marks=marks
    }
    static countstudent(){
        return(Student.count++);   
    }
    eligible(){
        if (this.marks>40){
            console.log(`${this.name} is eligible`)
        }else if (this.marks<40) {
            console.log(`${this.name} is not eligible`)
        }
        
    }
}
let Rachit=new Student("Rachit",23,51528718,35)
console.log(Rachit)
let Ram=new Student("Ram",20,5152657,56)
console.log(Ram)
let Rohit=new Student("Rohit",33,45328718,15)
console.log(Rohit)
let Rajat=new Student("Rajat",26,2423428718,85)
console.log(Rajat)
let Rachi=new Student("Rachi",29,65756718,45)
console.log(Rachi)
console.log(Student.countstudent())
Rachi.eligible()
Rachit.eligible()
Rajat.eligible()
Rohit.eligible()
Ram.eligible()







class Student{
    constructor(Name,Age,Marks){
        this.Name=Name
        this.Age=Age
        this.Marks=Marks
    }
    setPlacementage(minAgeForPlacement){
        
        return minmarks =>{
            console.log("Eligible for sit in the placement",this)
            if (this.Marks>minmarks && this.Age>minAgeForPlacement){
                console.log(this.Name+" "+ "is ready")
            }else {
                console.log(this.Name+" "+ "is not eligible")
            }
        }
    }
}
let rachit= new Student("Rachit",25,45)
rachit.setPlacementage(18)(40)



  
