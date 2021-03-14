// File that store various employee classes


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

module.exports = {Employee, Manager, Engineer, Intern}