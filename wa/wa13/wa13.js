let HR = {
    "employees" : [{
        "name" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raise-eligible" : true
    },
    {
        "name" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raise-eligible" : true
    },
    {
        "name" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raise-eligible" : false
    }]
}

let company = {
    "companyInfo" : [
        {
            "companyName" : "Tech Stars",
            "website" : "www.techstars.site",
            "employees" : HR["employees"]
        }
    ]
}




// Question 1
console.log(HR["employees"]);

// Question 2
console.log(company["companyInfo"]);

// Question 3
HR["employees"].push(
    {
        "name" : "Anna",
        "department" : "Tech",
        "designation" : "Executive",
        "salary" : 25600,
        "raise-eligible" : false
    }
)
console.log(HR["employees"][3]);

// Question 4

let totalSalary = 0;
for (let i = 0; i < HR["employees"].length; i++){
    totalSalary += HR["employees"][i]["salary"];
}

console.log(totalSalary);

// Question 5

function doYouDeserveALivingWage() {
    for (let i = 0; i < HR["employees"].length; i++) {
        if (HR["employees"][i]["raise-eligible"] == true) {
            HR["employees"][i]["salary"] = HR["employees"][i]["salary"] * 1.1;
            HR["employees"][i]["raise-eligible"] = false;
        }
    }
    console.log(HR["employees"]);
}

doYouDeserveALivingWage();

//Question 6
const wfh = ["Anna", "Sam"];
for (let i = 0; i < HR["employees"].length; i++){
    if (wfh.includes(HR["employees"][i]["name"])){
        HR["employees"][i]["wfh"] = true;
    }
}

console.log(HR["employees"])

