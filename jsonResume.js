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
  
  