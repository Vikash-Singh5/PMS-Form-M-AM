// Define the ecData object
var ecData = {

    "A00022": { "name": "TRILOK CHAND BANSAL", "department": "Finance", "email": "tcbansal@autolek.com" },
    "A00583": { "name": "SANJIT CHOUDHARY   ", "department": "Warranty", "email": "sanjeetkumar@autolek.com" },
    "A00757": { "name": "PANKAJ GARG  ", "department": "Finance", "email": "pankajgarg@autolek.com" },
    "A00772": { "name": "SUBHASH KUMAR GUPTA", "department": "R&D", "email": "sgupta@autolek.com" },
    "A00852": { "name": "ASHWANI BHARDWAJ   ", "department": "Marketing", "email": "ashwanibhardwaj@autolek.com" },
    "A00865": { "name": "DEBABRATA DEY", "department": "R&D", "email": "ddey@autolek.com" },
    "A00967": { "name": "SANTOSH KUMAR SAHOO", "department": "Marketing", "email": "santoshkumar@autolek.com" },
    "A01000": { "name": "SURINDER SINGH SAINI     ", "department": "Quality", "email": "surindersaini@autolek.com" },
    "A01010": { "name": "JOSHENDER VIRK     ", "department": "Marketing", "email": "joshendervirk@autolek.com" },
    "A01123": { "name": "MANU BATRA   ", "department": "Marketing", "email": "manubatra@autolek.com" },
    "A01148": { "name": "SANDEEP", "department": "R&D", "email": "sandeepjangra@autolek.com" },
    "A01295": { "name": "NEERAJ MALIK ", "department": "PPC", "email": "neerajmalik@autolek.com" },
    "A01381": { "name": "ASHWANI BHATIA     ", "department": "R&D", "email": "ashwanibhatia@autolek.com; " },
    "A01401": { "name": "ARUN SARASWAT", "department": "Maintenance", "email": "arunsaraswat@autolek.com" },
    "A01655": { "name": "KAPIL DEV KASUHIK  ", "department": "Maintenance", "email": "kapil@autolek.com" },
    "A01703": { "name": "KIRTI RANJAN DAS   ", "department": "Marketing", "email": "ranjan@autolek.com" },
    "A01757": { "name": "AVNINE KAPOOR", "department": "Marketing", "email": "avnie@autolek.com" },
    "A01836": { "name": "PANKAJ BAJAJ ", "department": "Marketing", "email": "pankajbajaj@autolek.com" },
    "A01892": { "name": "IFTEKHAR ALAM", "department": "R&D", "email": "iftekar@autolek.com" },
    "A01947": { "name": "LALIT MITTAL ", "department": "Purchase", "email": "lalitmittal@autolek.com" },
    "A01982": { "name": "VARUN JAIN   ", "department": "Quality", "email": "varunjain@autolek.com" },
    "A02018": { "name": "VINOD KUMAR  ", "department": "Production", "email": "vinoddayma@autolek.com" },
    "A02179": { "name": "BHAWNA CHAUHAN     ", "department": "Human Resource", "email": "bhawna.chauhan@autolek.com" },
    "A02238": { "name": "ARUN DEV PRAJAPATI ", "department": "Quality", "email": "arun.dev@autolek.com" },
    "A02241": { "name": "VISHNU DUTT DIXIT  ", "department": "Production", "email": "vishnu.dixit@autolek.com" },
    "A02270": { "name": "SUNEEL KUMAR ", "department": "Battery", "email": "suneel.chauhan@autolek.com" },
    "A02274": { "name": "PROMOD KUMAR MALVIYA     ", "department": "Battery", "email": "promodmalviya@autolek.com" },
    "A02275": { "name": "ANKITA NAG   ", "department": "Marketing", "email": "ankitanag@autolek.com" },
    "A02282": { "name": "UTTAM MISHRA ", "department": "Battery", "email": "uttammishra@autlek.com" },
    "A02295": { "name": "KANIKA BANSAL", "department": "Finance", "email": "kanika.bansal@autolek.com" },
    "A02339": { "name": "PRATIKSHA KEYUR YAGNIK   ", "department": "Client Relationship Management", "email": "pratiksha@autolek.com" },
    "A02341": { "name": "RAJ KUMAR SRIVASTAVA     ", "department": "Area Sales Manager", "email": "rajkumar@autolek.com" },
    "A02356": { "name": "DAVINDER SINGH     ", "department": "Sales", "email": "devbhullar@auutolek.com" },
    "A02360": { "name": "SIDDHARTH KHEDKAR  ", "department": "OEM Marketing", "email": "siddharth.khedkar@autolek.com" },
    "A02362": { "name": "DEVENDRA KAVIDAYAL ", "department": "RM Store", "email": "devendra.kavidayal@autolek.com" },
    "C00016": { "name": "LALIT KAPOOR ", "department": "Marketing", "email": "lalitkapoor@autolek.com" },
    "C00026": { "name": "S L DAGAR    ", "department": "Personnel & admin", "email": "sldagar@autolek.com" },
    "C00040": { "name": "ADARSH RATAN SONI  ", "department": "Battery", "email": "adarshsoni@autolek.com" },
    "C00047": { "name": "CHANDRA SHEKHAR    ", "department": "Battery", "email": "chandra.shekhar@autolek.com" },
    "EV0002": { "name": "Raju Admane", "department": "Production", "email": "raju.admane@autolek.com" },
    "EV0004": { "name": "Eniyan . A", "department": "EV Marketing", "email": "eniyan@autolek.com" },
    "EV0012": { "name": "Pritmohan Mahesh Bhatti", "department": "R&D", "email": "pritmohan@autolek.com" },
    "C00048": { "name": "Mabood Aryaman", "department": "Business Development", "email": "aryaman.mabood@autolek.com" },
    "A01653": { "name": "Parul Gupta", "department": "Finance", "email": "parulgupta@autolek.com" },
    "INT003": { "name": "Vikash Singh", "department": "Digitalization", "email": "vikash.singh@autolek.com" }

    

   };
   
   function filterOptions() {
    var input, filter, select, options, option, i, txtValue;
    input = document.getElementById("ecSearch");
    filter = input.value.toUpperCase();
    select = document.getElementById("entry.459367307");
    options = select.getElementsByTagName("option");

    for (i = 0; i < options.length; i++) {
        option = options[i];
        txtValue = option.textContent || option.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            option.style.display = "";
        } else {
            option.style.display = "none";
        }
    }
}
   


   function fillDetails() {
       var selectedECNo = document.getElementById("entry.459367307").value;
       var nameField = document.getElementById("entry.1901190079");
       var departmentField = document.getElementById("entry.1673632614");
       var emailField = document.getElementById("entry.1269000508");
   
       // Check if the selected E.C No exists in the ecData object
       if (ecData[selectedECNo]) {
           nameField.value = ecData[selectedECNo].name;
           departmentField.value = ecData[selectedECNo].department;
           emailField.value = ecData[selectedECNo].email;
       } else {
           // Clear the fields if no E.C No is selected or if the selected E.C No doesn't match any predefined values
           nameField.value = "";
           departmentField.value = "";
           emailField.value = "";
       }
   }

   
   // Add event listeners to weightage inputs to trigger calculation
document.addEventListener('DOMContentLoaded', function() {
    // Loop through each row individually
    for (var i = 1; i <= 10; i++) {
        var row = document.querySelector('.row' + i); // Select each row

        var weightageInputs = row.querySelectorAll('input[name^="entry.2154909"], input[name^="entry.1851935999"], input[name^="entry.80525495"], input[name^="entry.1353547461"], input[name^="entry.105008738"], input[name^="entry.542858498"], input[name^="entry.495272561"], input[name^="entry.1894423910"], input[name^="entry.1896290339"], input[name^="entry.1179970253"]');

        // Add event listener to each weightage input
        weightageInputs.forEach(function(weightageInput) {
            weightageInput.addEventListener('input', calculateTotalWeightageKRA);
        });
    }
});


function calculateTotalWeightageKRA() {
    var totalWeightage = 0;

    // Loop through each row individually
    for (var i = 1; i <= 10; i++) {
        var row = document.querySelector('.row' + i); // Select each row

        var weightageInputs = row.querySelectorAll('input[name^="entry.2154909"], input[name^="entry.1851935999"], input[name^="entry.80525495"], input[name^="entry.1353547461"], input[name^="entry.105008738"], input[name^="entry.542858498"], input[name^="entry.495272561"], input[name^="entry.1894423910"], input[name^="entry.1896290339"], input[name^="entry.1179970253"]');

        // Add event listener to each weightage input
        weightageInputs.forEach(function(weightageInput) {
            var weightage = parseFloat(weightageInput.value) || 0;
            totalWeightage += weightage;
        });
    }

    if (totalWeightage > 60) {
        alert("Total weightage cannot be more than 60");
        totalWeightage = 0; // Reset total weightage to zero
    }

    var totalWeightageInput = document.querySelector('input[name="entry.1106801050"]');
    if (totalWeightageInput) {
        totalWeightageInput.value = totalWeightage;
    }

    console.log('Total Weightage:', totalWeightage);
}



document.addEventListener('DOMContentLoaded', function() {
    // Loop through each row individually
    for (var i = 11; i <= 13; i++) {
        var row = document.querySelector('.row' + i); // Select each row

        var weightageInputs = row.querySelectorAll('input[name^="entry.577462297"], input[name^="entry.237334848"], input[name^="entry.1501775503"]');

        // Add event listener to each weightage input
        weightageInputs.forEach(function(weightageInput) {
            if (weightageInput.getAttribute('name') === 'entry.237334848') {
                weightageInput.value = 10; // Prefill with 10
            }
            weightageInput.addEventListener('input', calculateTotalWeightage);
        });
    }
});

function calculateTotalWeightage() {
    var totalWeightage = 0;

    // Loop through each row individually
    for (var i = 11; i <= 13; i++) {
        var row = document.querySelector('.row' + i); // Select each row

        var weightageInputs = row.querySelectorAll('input[name^="entry.577462297"], input[name^="entry.237334848"], input[name^="entry.1501775503"]');

        // Add event listener to each weightage input
        weightageInputs.forEach(function(weightageInput) {
            var weightage = parseFloat(weightageInput.value) || 0;
            totalWeightage += weightage;
        });
    }

    if (totalWeightage > 20) {
        alert("Total weightage cannot be more than 20, plese fill again.");
        totalWeightage = 0; // Reset total weightage to zero

        // Reset the values of other fields
        var resetFields = document.querySelectorAll('input[name^="entry.577462297"], input[name^="entry.1501775503"]');
        resetFields.forEach(function(field) {
            field.value = 0;
        });
    }

    var totalWeightageInput = document.querySelector('input[name="entry.2003645448"]');
    if (totalWeightageInput) {
        totalWeightageInput.value = totalWeightage;
    }

    console.log('Total Weightage:', totalWeightage);
}



// function submitForm() {
//     var selectedECNo = document.getElementById("entry.459367307").value;
//     var nameField = document.getElementById("entry.1901190079").value;
//     var departmentField = document.getElementById("entry.1673632614").value;
//     var emailField = document.getElementById("entry.1269000508").value;
//     var mandatoryFieldsFilled = true;

//     // Check if E.C No, Name, and Department are filled
//     if (!selectedECNo || !nameField || !departmentField || !emailField) {
//         mandatoryFieldsFilled = false;
//     }

//     // Loop through each mandatory row to check if all fields are filled
//     var mandatoryRows = [1, 2, 3, 4, 5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
//     mandatoryRows.forEach(function(rowNumber) {
//         var row = document.querySelector('.row' + rowNumber); // Select each row

//         // Check if the row contains a select element
//         var select = row.querySelector('select[data-category]');
//         if (select) {
//             // Check if the select element has a value selected
//             if (!select.value) {
//                 mandatoryFieldsFilled = false;
//             }
//         } else {
//             // If the row contains input elements, check them for empty values
//             var inputs = row.querySelectorAll('input[data-category]');
//             inputs.forEach(function(input) {
//                 if (!input.value) {
//                     mandatoryFieldsFilled = false;
//                 }
//             });
//         }
//     });

//     // If all mandatory fields are filled, submit the form
//     if (mandatoryFieldsFilled) {
//         var formData = new FormData(document.querySelector('form'));
//         var xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     // Handle successful form submission
//                     alert('Form submitted successfully!');
//                 } else {
//                     // Handle form submission error
//                     console.error('Error occurred while submitting the form:', xhr.statusText);
//                     alert('Error occurred while submitting the form. Please try again later.');
//                 }
//             }
//         };

//         // Replace the URL with your Google Forms URL
//         xhr.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSeqaELMMosegug7m1HRW1IfAu35G2LHR5IJVyGrPmlMtq_KYg/formResponse');
//         xhr.send(formData);
//     } else {
//         // Show an alert to fill required details
//         alert('Please fill all the required details.');
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     var form = document.querySelector('form');

//     form.addEventListener('submit', function(event) {
//         // Check if all mandatory fields are filled
//         var selectedECNo = document.getElementById("entry.459367307").value;
//         var nameField = document.getElementById("entry.1901190079").value;
//         var departmentField = document.getElementById("entry.1673632614").value;
//         var emailField = document.getElementById("entry.1269000508").value;
//         var mandatoryFieldsFilled = true;

//         // Check if E.C No, Name, and Department are filled
//         if (!selectedECNo || !nameField || !departmentField || !emailField) {
//             mandatoryFieldsFilled = false;
//         }

//         // Loop through each mandatory row to check if all fields are filled
//         var mandatoryRows = [1, 2, 3, 4, 5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25];
//         mandatoryRows.forEach(function(rowNumber) {
//             var row = document.querySelector('.row' + rowNumber); // Select each row

//             // Check if the row contains a select element
//             var select = row.querySelector('select[data-category]');
//             if (select) {
//                 // Check if the select element has a value selected
//                 if (!select.value) {
//                     mandatoryFieldsFilled = false;
//                 }
//             } else {
//                 // If the row contains input elements, check them for empty values
//                 var inputs = row.querySelectorAll('input[data-category]');
//                 inputs.forEach(function(input) {
//                     if (!input.value) {
//                         mandatoryFieldsFilled = false;
//                     }
//                 });
//             }
//         });


//         // Prevent form submission if any mandatory field is not filled
//         if (!mandatoryFieldsFilled) {
//             event.preventDefault();
//             alert('Please fill all the required details before submitting.');
//         }
//     });
// });




function submitForm() {
    // Check if the checkbox is checked
    var agreeCheckbox = document.getElementById('agreeCheckbox');
    if (!agreeCheckbox.checked) {
        alert('Please check the checkbox before submitting the form.');
        return; // Prevent form submission if the checkbox is not checked
    }

    var selectedECNo = document.getElementById("entry.459367307").value;
    var nameField = document.getElementById("entry.1901190079").value;
    var departmentField = document.getElementById("entry.1673632614").value;
    var emailField = document.getElementById("entry.1269000508").value;
    var mandatoryFieldsFilled = true;

    // Check if E.C No, Name, and Department are filled
    if (!selectedECNo || !nameField || !departmentField || !emailField) {
        mandatoryFieldsFilled = false;
    }

    // Loop through each mandatory row to check if all fields are filled
    var mandatoryRows = [1, 2, 3, 4, 5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    mandatoryRows.forEach(function(rowNumber) {
        var row = document.querySelector('.row' + rowNumber); // Select each row

        // Check if the row contains a select element
        var select = row.querySelector('select[data-category]');
        if (select) {
            // Check if the select element has a value selected
            if (!select.value) {
                mandatoryFieldsFilled = false;
            }
        } else {
            // If the row contains input elements, check them for empty values
            var inputs = row.querySelectorAll('input[data-category]');
            inputs.forEach(function(input) {
                if (!input.value) {
                    mandatoryFieldsFilled = false;
                }
            });
        }
    });

    // If all mandatory fields are filled and the checkbox is checked, submit the form
    if (mandatoryFieldsFilled) {
        var formData = new FormData(document.querySelector('form'));
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Handle successful form submission
                    alert('Form submitted successfully!');
                } else {
                    // Handle form submission error
                    console.error('Error occurred while submitting the form:', xhr.statusText);
                    alert('Error occurred while submitting the form. Please try again later.');
                }
            }
        };

        // Replace the URL with your Google Forms URL
        xhr.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSeqaELMMosegug7m1HRW1IfAu35G2LHR5IJVyGrPmlMtq_KYg/formResponse');
        xhr.send(formData);
    } else {
        // Show an alert to fill required details
        alert('Please fill all the required details.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Check if all mandatory fields are filled
        var selectedECNo = document.getElementById("entry.459367307").value;
        var nameField = document.getElementById("entry.1901190079").value;
        var departmentField = document.getElementById("entry.1673632614").value;
        var emailField = document.getElementById("entry.1269000508").value;
        var mandatoryFieldsFilled = true;

        // Check if E.C No, Name, and Department are filled
        if (!selectedECNo || !nameField || !departmentField || !emailField) {
            mandatoryFieldsFilled = false;
        }

        // Loop through each mandatory row to check if all fields are filled
        var mandatoryRows = [1, 2, 3, 4, 5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25];
        mandatoryRows.forEach(function(rowNumber) {
            var row = document.querySelector('.row' + rowNumber); // Select each row

            // Check if the row contains a select element
            var select = row.querySelector('select[data-category]');
            if (select) {
                // Check if the select element has a value selected
                if (!select.value) {
                    mandatoryFieldsFilled = false;
                }
            } else {
                // If the row contains input elements, check them for empty values
                var inputs = row.querySelectorAll('input[data-category]');
                inputs.forEach(function(input) {
                    if (!input.value) {
                        mandatoryFieldsFilled = false;
                    }
                });
            }
        });

        // Check if the checkbox is checked
        var agreeCheckbox = document.getElementById('agreeCheckbox');
        if (!agreeCheckbox.checked || !mandatoryFieldsFilled) {
            event.preventDefault(); // Prevent form submission
            alert('Please check the checkbox and fill all required details before submitting.');
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Get all input fields you want to apply the functionality to
    var inputFields = document.querySelectorAll('.auto-resize-input');
    
    // Loop through each input field
    inputFields.forEach(function(inputField) {
        var originalInputHeight = inputField.offsetHeight; // Store the original height
        
        inputField.addEventListener('input', function() {
            autoResize(inputField);
        });
        
        inputField.addEventListener('focus', function() {
            inputField.style.height = 'auto'; // Set height to auto to adjust to content
            inputField.classList.add('expanded'); // Add expanded class to increase width
            autoResize(inputField); // Call autoResize function
        });
        
        inputField.addEventListener('blur', function() {
            inputField.style.height = originalInputHeight + 'px'; // Reset the height to original size
            inputField.classList.remove('expanded'); // Remove expanded class
        });
    });
    
    // Function to auto resize the textarea
    function autoResize(element) {
        element.style.height = 'auto'; // Set height to auto to adjust to content
        element.style.height = element.scrollHeight + 'px'; // Set the height to fit the content
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Select all question select elements
    var questionSelects = document.querySelectorAll('.question-select');
    
    // Total marks variable to store the sum of marks
    var totalMarks = 0;
    
    // Function to calculate total marks based on the selected option
    function calculateTotalMarks() {
        totalMarks = 0;
        questionSelects.forEach(function(select) {
            var selectedOption = select.value;
            switch(selectedOption) {
                case 'Directed':
                    totalMarks += 0.5;
                    break;
                case 'Skilled':
                    totalMarks += 1;
                    break;
                case 'Autonomous':
                    totalMarks += 1.5;
                    break;
                case 'Role Model':
                    totalMarks += 2;
                    break;
            }
        });
        // Update the total marks text
        document.getElementById('totalMarks').textContent = totalMarks;
    }
    
    // Add change event listeners to all question select elements
    questionSelects.forEach(function(select) {
        select.addEventListener('change', calculateTotalMarks);
    });
});


  
  