const employee =   {
    "id": "EMP001",
    "personal": {
      "name": { "first": "Jane", "last": "Lee" },
      "age": 38,
      "contact": {
        "email": "jane.lee@company.com",
        "phone": { "mobile": "555-5102", "work": "555-2169" }
      }
    },
    "job": {
      "department": "Engineering",
      "position": "Lead",
      "salary": { "base": 84972, "bonus": 9683 },
      "manager": { "name": "Sarah Taylor", "id": "MGR6" }
    },
    "skills": ["Java", "Spring", "AWS"],
    "address": { "street": "442 Main St", "city": "Houston", "zip": "22942" }
  };


function func1(employee) {
   const {
    id,
    personal: {
      name: { first: firstName, last: lastName },      
      age,
      contact: {
        email,
        phone: { mobile, work }   
      }
    },
    job: {
      department,
      position,
      salary: { base: baseSalary, bonus: bonusSalary },    
      manager: { name: managerName, id: managerId }
    },
    skills,
    address: { street, city, zip }
  } = employee;

    return {
        id,
        firstName,
        lastName,
        age,
        email,
        mobile,
        work,
        department,
        position,
        baseSalary,
        bonusSalary,
        managerName,
        managerId,
        skills,          
        street,
        city,
        zip
    };

}

function func2(employee) {
    const { personal: {name: {first: firstName, last: lastName}, contact: {phone, ...restContact}, ...restPersonal},  job: {salary, manager, ...restJob}, skills, address, ...rest} = employee;
    return {
        ...rest,
        firstName,
        lastName,
        ...phone,
        ...restContact,
        ...restPersonal,
        ...restJob,
        ...salary,
        ...manager,
        skills,
        ...address
    }
}

function func3(employee) {

    const { id, ...restOfEmployee } = employee;
    
    const { personal, ...restAfterPersonal } = restOfEmployee;
    
    const { name, contact, ...restPersonal } = personal;
    
    const { phone, ...restContact } = contact;
    
    const { job, ...restAfterJob } = restAfterPersonal;
    const { salary, manager, ...restJob } = job;
    
    const { address, skills} = restAfterJob;
    
    return {

        id,
        firstName: name.first,
        lastName: name.last,
        ...restPersonal,              
        ...restContact,              
        mobile: phone.mobile,
        workPhone: phone.work,
        ...restJob,                   
        bonusSalary: salary.bonus,
        managerName: manager.name,
        managerId: manager.id,
        skills,
        ...address,                   
    }

}

console.log(func1(employee));
console.log("=================================");
console.log(func2(employee));
console.log("=================================");
console.log(func3(employee));