import { useState } from "react";

function App() {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  
  const submituserRegistrationForm = (e) => {
    e.preventDefault();
      if (validateForm()) {
        console.log("valid")
          setErrors({});
          setFields({});
      }
  }

  const validateForm = () => {
    let formIsValid = true;
    let tempErrors = {};

    setErrors({});

    if (!fields["fullName"]) {
      formIsValid = false;
      tempErrors["fullName"] = "*Please enter your full name.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        tempErrors["email"] = "*Please enter a valid email.";
      }
    }
    
    if (typeof fields["flexible"] === "undefined" || fields["flexible"] == false) {
      if (!fields["daysForAvailability"]) {
        formIsValid = false;
        tempErrors["daysForAvailability"] = "*Please enter days for availability.";
      }
    }

    setErrors(tempErrors);
    return formIsValid;
  }

  const handleChange = (e) => {
    let tempFields = fields;
    tempFields[e.target.name] = e.target.value;
    setFields(tempFields);
  }
  
  const handleClick = (e) => {
    let tempFields = fields;
    tempFields[e.target.name] = e.target.checked;
    setFields(tempFields);
  }
  

  return (
    <div className="App">
       <form onSubmit= {submituserRegistrationForm}>
         <label htmlFor="fullName">Full Name</label><br />
         <input type="text" id="fullName" name="fullName" onChange={handleChange} /><br /><br />
         <div>{errors["fullName"]}</div>

         <label htmlFor="email">Email</label><br />
         <input type="text" id="email" name="email" onChange={handleChange}/><br /><br />
         <div>{errors["email"]}</div>

         <label htmlFor="flexible">Flexible</label><br />
         <input type="checkbox" id="flexible" name="flexible" onChange={handleClick} /><br /><br />

         <label>Days For Availability</label><br />
         <input type="number" id="daysForAvailability" name="daysForAvailability" onChange={handleChange} /><br /><br />
         <div>{errors["daysForAvailability"]}</div>

        <button type='submit'>Save</button>
        </form>
    </div>
  );
}

export default App;
