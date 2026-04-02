/* You are creating  a website for your college. Create class User with 2 properties, name & email. it also has a method called viewData() that allows user to view website data.*/

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`Student Name : ${this.name} \n Email : ${this.email}`);
    }
}

let student1 = new User("Nithin","nithinkp12@gmail.com");
student1.viewData();