class Student {
    public  sname : string;
    public sid : number;
    public addr : string

    display=()=>console.log("Student id : "+this.sid+" Student name : "+this.sname+" Student Address : "+this.addr);
}
    let s1 = new Student();
    s1.sid=1038;
    s1.sname = "Mukul Kumar";
    s1.addr = "New Delhi";
    s1.display();

    let s2 = new Student();
    s2.sid=1039;
    s2.sname = "Arvind";
    s2.addr = "Uttrakhand";
    s2.display();
