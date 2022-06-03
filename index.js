const employee = {
    name: "Karwirwa",
    streetAddress: "02000"

}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeTwo = {...employee };
    employeeTwo[key] = value;
    return employeeTwo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeTwo = {...employee };
    delete employeeTwo[key];
    return employeeTwo;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}