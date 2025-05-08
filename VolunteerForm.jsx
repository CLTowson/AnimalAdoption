import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/les Queues Animal Rescue.jpg";
import "./Style.css";

function VolunteerForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate("/thank-you");
    }, 1000); // Gives browser time to open mail client
  };

  return (
    <form
      action="mailto:EllenVienna4848@gmail.com?subject=Volunteer Form"
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
    >
      <div className="container">
        <img src={logo} alt="Les Queues Logo" className="small-image" />
        <h1>Les Queues Volunteer Form:</h1>
      </div>

      <table id="table1">
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
            <td>What Days And Times Are You Typically Available:</td>
            <td><input type="text" name="Description Of Times" /></td>
          </tr>
          <tr>
            <td>Have You Volunteered With Animals Before:</td>
            <td><input type="text" name="Volunteered Before" /></td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default VolunteerForm;
