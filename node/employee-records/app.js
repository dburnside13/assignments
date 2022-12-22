const readline = require('readline-sync')

let employees = []

function Employee(name, jobTitle, salary, status = "Full Time") {
this.name = name 
this.jobTitle = jobTitle
this.salary = salary
this.status = status 
    this.printEmployeeForm = function() {
        console.log("Name: "+this.name+",", "Job Title :"+this.jobTitle +",","Salary: "+ this.salary+ ",","Status: " +this.status)
    }
}
let employee1 = new Employee("Bob", "Host", "15k/year", )
employee1.status = "Part Time"

let employee2 = new Employee("Susan", "Manager", "50k/year" )
let employee3 = new Employee("John", "Dish Washer", "30k/year")

employees.push(employee1,employee2,employee3)
console.log(employees)

employee1.printEmployeeForm()