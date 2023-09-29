// Create your own resume data in JSON format
let resume = {
    my_Name: "Neshanth",
    Email: "jneshanth@gmail.com",
    Date_of_birth: "15.04.1999",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 26,
    Marks: { "B.E": "CGPA 6.66", "Higher secondary": "72%", "SSLC": "83%" },
    Qualification: "B.E Computer Science",
    Years_of_Experience: 0,
    Software_proficiency: [
      "C",
      "C++",
      "javascript",
      "python",
      "HTML",
      "css",
      "Ms office",
    ],
    Key_strength: ["short leaning curve", "punctual", "apdaptive"],
    Personal_hobbies: ["Gaming", "Youtube watching"],
  };
  
  let resume_JSON_Format = JSON.stringify(resume);
  console.log(resume_JSON_Format);
  
  // For the given JSON iterate over all for loops (for, for in, for of, forEach)
  let json_data = {
    my_Name: "Neshanth",
    Email: "jneshanth@gmail.com",
    Date_of_birth: "15.04.1999",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 24,
    Marks: { "B.E": "CGPA 6.66", "Higher secondary": "72%", "SSLC": "83%" },
  };
  const count = Object.keys(json_data);
  
  // for loop
  for (let i = 0; i < count.length; i++) {
    console.log(json_data[count[i]]);
  }
  
  // for in
  for (let keys in json_data) {
    console.log(json_data[keys]);
  }
  
  // for Of
  for (let i of count) {
    console.log(json_data[i]);
  }
  
  // for each
  count.forEach(values);
  function values(item) {
    console.log(json_data[item]);
  }