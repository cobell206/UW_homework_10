const {Employee, Manager, Engineer, Intern} = require ('../employee_generator')


describe('NewManager', () => {
    it('Should create manager object', () => {
        const new_manager = new Manager('Person', 1, 'email', 1234)

        expect(new_manager.name).toEqual('Person')
        expect(new_manager.id).toEqual(1)
        expect(new_manager.email).toEqual('email')
        expect(new_manager.office_number).toEqual(1234)
    })
})

describe('NewEngineer', () => {
    it('Should create engineer object', () => {
        const new_engineer = new Engineer('Person', 1, 'email', 'url')

        expect(new_engineer.name).toEqual('Person')
        expect(new_engineer.id).toEqual(1)
        expect(new_engineer.email).toEqual('email')
        expect(new_engineer.github).toEqual('url')
    })
})

describe('NewInter', () => {
    it('Should create intern object', () => {
        const new_intern = new Intern('Person', 1, 'email', 'school')

        expect(new_intern.name).toEqual('Person')
        expect(new_intern.id).toEqual(1)
        expect(new_intern.email).toEqual('email')
        expect(new_intern.school).toEqual('school')
    })
})