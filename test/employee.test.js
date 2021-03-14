const {Employee, Manager, Engineer, Intern} = require ('../employee_generator')

// Test Manager class
describe('NewManager', () => {
    it('Should create manager object', () => {
        const new_manager = new Manager('Person', 1, 'email', 1234)

        expect(new_manager.name).toEqual('Person')
        expect(new_manager.id).toEqual(1)
        expect(new_manager.email).toEqual('email')
        expect(new_manager.office_number).toEqual(1234)
    })

    it('Should return correct values from functions', () => {
        const new_manager = new Manager('Person', 1, 'email', 'url')

        expect(new_manager.getName()).toEqual('Person')
        expect(new_manager.getId()).toEqual(1)
        expect(new_manager.getEmail()).toEqual('email')
        expect(new_manager.getRole()).toEqual('Manager')
    })
})

// Test Enginer Class
describe('NewEngineer', () => {
    it('Should create engineer object', () => {
        const new_engineer = new Engineer('Person', 1, 'email', 'url')

        expect(new_engineer.name).toEqual('Person')
        expect(new_engineer.id).toEqual(1)
        expect(new_engineer.email).toEqual('email')
        expect(new_engineer.github).toEqual('url')
    })

    it('Should return correct values from functions', () => {
        const new_engineer = new Engineer('Person', 1, 'email', 'url')

        expect(new_engineer.getName()).toEqual('Person')
        expect(new_engineer.getId()).toEqual(1)
        expect(new_engineer.getEmail()).toEqual('email')
        expect(new_engineer.getRole()).toEqual('Engineer')
        expect(new_engineer.getGithub()).toEqual('url')
    })
})

// Test Intern Class
describe('NewIntern', () => {
    it('Should create intern object', () => {
        const new_intern = new Intern('Person', 1, 'email', 'school')

        expect(new_intern.name).toEqual('Person')
        expect(new_intern.id).toEqual(1)
        expect(new_intern.email).toEqual('email')
        expect(new_intern.school).toEqual('school')
    })

    it('Should return correct values from functions', () => {
        const new_intern = new Intern('Person', 1, 'email', 'school')

        expect(new_intern.getName()).toEqual('Person')
        expect(new_intern.getId()).toEqual(1)
        expect(new_intern.getEmail()).toEqual('email')
        expect(new_intern.getRole()).toEqual('Intern')
        expect(new_intern.getSchool()).toEqual('school')
    })
})

// Test Employee Class
describe('NewEmployee', () => {
    it('Should create employee object', () => {
        const new_employee = new Employee('Person', 1, 'email')

        expect(new_employee.name).toEqual('Person')
        expect(new_employee.id).toEqual(1)
        expect(new_employee.email).toEqual('email')
    })

    it('Should return correct values from functions', () => {
        const new_employee = new Employee('Person', 1, 'email')

        expect(new_employee.getName()).toEqual('Person')
        expect(new_employee.getId()).toEqual(1)
        expect(new_employee.getEmail()).toEqual('email')
        expect(new_employee.getRole()).toEqual('Employee')
    })
})