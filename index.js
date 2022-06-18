const employee = {
        name: `john`,
        streetAddress: `10 broadway`,
    }
console.log(employee)

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, 
        [key]: value
    }
}
console.log(updateEmployeeWithKeyAndValue)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value

    return employee

    }

 function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee[key]

    return newEmployee
        }
 
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]

    return employee
}