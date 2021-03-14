const fs = require('fs')

// Start of HTML text
start_text = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>
<body>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <h1>Employee Card</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row" id="employee_card">`


// End of html section
end_section = `</div>

</div>

<script>
    fs = require('fs')

    employee_data = fs.readFile('EmployeeInfo.json', utf8, (err, data) => {
        if (err) throw err
        return data
    })

    console.log(employee_data);
</script>
<!-- <script src="javascript.js"></script> -->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</body>
</html>`


// Function to produce new employee card
function card_section(employee)  
{

    // Extra info depending on employee type
    if (employee.role == 'manager') {
        extra_text = `Office Number: ${employee.office_number}`
    }
    else if (employee.role == 'engineer') {
        extra_text = `Github URL: <a href=https://github.com/${employee.github}>Github Link</a>`
    }
    else if (employee.role = 'intern') {
        extra_text = `School: ${employee.school}`
    }
    text = `<div class="col-4">
                <div class="card mb-3">
                    <div class="card-header bg-info text-center">
                        <h5>${employee.name}</h5>
                        <h5>${employee.role}</h5>
                    </div>
                    <div class="card-body">
                        <p class="border m-3 p-2">ID: ${employee.id}</p>
                        <p class="border m-3 p-2">Email: <a href="mailto:${employee.email}">Send email</a></p>
                        <p class="border m-3 p-2">${extra_text}</p>
                    </div>
                </div>
            </div>`
    final_html += text
}

// 
function add_employees(employees) {
    employees.forEach(element => card_section(element))
}



function create_file() {
    // Load employee data
    employees = JSON.parse(fs.readFileSync('EmployeeInfo.json'))

    // Initialize HTML and add each employee
    final_html = start_text
    add_employees(employees)
    final_html += end_section

    // Save html file
    fs.writeFile('index.html', final_html, (err) => {if (err) throw err})
}

module.exports = {create_file}