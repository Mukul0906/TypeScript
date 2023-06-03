class Employee{
    private empName:string;
    public empId:number;
   
    display=()=>console.log("employee name : "+this.empName+" employee id "+this.empId);
    
    public setName(str:string){
        this.empName=str;
    }
}
let emp1 = new Employee();
emp1.empId=2356;
emp1.setName('Mukul kumar');
emp1.display();
