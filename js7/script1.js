class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`Student Name : ${this.name} \n Email : ${this.email}`);
    }
}
class Admin extends User {
    constructor(name = "", email = ""){
        super(name, email);
    }

    editData(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        super.viewData();
    }
}

let student1 = new User("Nithin","nithinkp12@gmail.com");
student1.viewData();
let admin1 = new Admin();
admin1.editData("Aryan","aryan123@gmail.com");
admin1.viewData();
