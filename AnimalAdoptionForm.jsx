import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/les Queues Animal Rescue.jpg"; // Make sure this path is correct
import "./Style.css"; // Create the CSS file as shown below

function AnimalAdoptionForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate("/thank-you");
    }, 1000); // Gives time for mailto to trigger
  };

  return (
    <form
      action="mailto:EllenVienna4848@gmail.com?subject=Animal Adoption Form"
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
    >
      <div className="container">
        <img src={logo} alt="Les Queues Logo" className="small-image" />
        <h1>Les Queues Animal Adoption Form:</h1>
      </div>

      <table>
        <thead>
          <tr>
            <th colSpan="2">Personal Information:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:</td>
            <td><input type="text" name="Name" required /></td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td><input type="text" name="Phone Number" required /></td>
          </tr>
          <tr>
            <td>Email Address:</td>
            <td><input type="email" name="Email" required /></td>
          </tr>
          <tr>
            <td>Description of Current Situation:</td>
            <td><input type="text" name="Description" /></td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colSpan="2">Animals:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Serial Code of Animal You are Looking to Adopt:</td>
            <td><input type="text" name="Animal Code" required /></td>
          </tr>
          <tr>
            <td>Have You Had a Pet Before:</td>
            <td>
              Yes: <input type="radio" name="Had Pet" value="Yes" />
              No: <input type="radio" name="Had Pet" value="No" />
            </td>
          </tr>
          <tr>
            <td>Do You Have Other Pets Now:</td>
            <td>
              Yes: <input type="radio" name="Pet Now" value="Yes" />
              No: <input type="radio" name="Pet Now" value="No" />
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default AnimalAdoptionForm;