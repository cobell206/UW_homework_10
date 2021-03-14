const fs = require('fs')
const inquirer = require('inquirer')
const createHTML = require('./createHTML')


// const { resolve } = require('path')
// const { report } = require('process')

const employees = []

// Class for base employee
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        this.getName = () => {
            return this.name
        }
        this.getId = () => {
            return this.id
        }
        this.getEmail = () => {
            return this.email
        }
        this.getRole = () => {
            return 'Employee'
        }
    }
    
}

// Manager class
class Manager extends Employee {
    constructor(name, id, email, office_number) {
        super(name, id, email)
        this.office_number = office_number
        this.role = 'manager'

        // Override getRole
        this.getRole = () => {
            return 'Manager'
        }
    }  
}

// Engineer Class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
        this.role = 'engineer'

        this.getRole = () => {
            return 'Engineer'
        }
        this.getGithub = () => {
            return this.github
        }
    }
}
// Intern Class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.role = 'intern'

        this.getRole = () => {
            return 'Intern'
        }

        this.getSchool = () => {
            return this.school
        }
    }
}

// Function to get employee type
async function get_employee() {
    var response = await inquirer
    .prompt([
        {
            name: 'employee_type',
            type: 'list',
            message: 'What type of employee are they?',
            choices: ['Engineer' ,'Intern']
        }
    ])
    .then(answer => {
        return answer.employee_type
    })
    return response
}

// Function to get manager information
async function get_manager() {
    await inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is their name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is their ID?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is their email?',
        },
        {
            name: 'office_number',
            type: 'input',
            message: 'What is their office number (offices are for n00bz)?',
        },
    ])
    .then(answer => {
        manager_ = new Manager(answer.name, answer.id, answer.email, answer.office_number)
        employees.push(manager_)
    })
}

// Function to get engineer information
async function get_engineer() {
    await inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is their name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is their ID?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is their email?',
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is their github?',
        },
    ])
    .then(answer => {
        engineer_ = new Engineer(answer.name, answer.id, answer.email, answer.github)
        employees.push(engineer_)
    })
}

// Function to get intern information
async function get_intern() {
    await inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is their name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is their ID?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is their email?',
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is their school?',
        },
    ])
    .then(answer => {
        intern_ = new Intern(answer.name, answer.id, answer.email, answer.school)
        employees.push(intern_)
    })
}

// Function to ask if user wants to enter additional employee
async function add_employee() {
    var response = await inquirer
    .prompt([
        {
            name: 'enter',
            type: 'list',
            message: 'Do you want to enter an employee?',
            choices: ['Yes', 'No']
        }
    ])
    .then(answer => {
        if (answer.enter == 'Yes') {
            let employee_type = get_employee()
            return employee_type
        }
        else if (answer.enter == 'No') {
            is_done = true
            fs.writeFileSync('EmployeeInfo.json', JSON.stringify(employees))
            createHTML.create_file()
            console.log("Saved employees, exiting...");
            return 'done'
        }
    })
    .catch(error => console.log('Error' + error))


    if (response != 'done') {
        if (response == 'Engineer') {
            await get_engineer()
        }
        else if (response == 'Intern') {
            await get_intern()
        }
    }
    
}

async function get_info() {
    await get_manager()
    while (!is_done) {
        await add_employee()
    }
}

var is_done = false
get_info()
