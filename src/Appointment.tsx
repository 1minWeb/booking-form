import React, { useState } from "react";
import "./Appointment.css";
interface FormData {
  name: string;
  serviceType: string;
  mobile: string;
  mail: string;
  appointmentDate: string;
  appointmentTime: string;
  note: string;
}

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    serviceType: "",
    mobile: "",
    mail: "",
    appointmentDate: "",
    appointmentTime: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* <div className="form-container">
        <h2 className="form-title">Appointment Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div> */}
      <div className="box">
        <h2>Appointment Form</h2>
        <form action="">
          <div className="inputBox">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>
          {/* Service Type */}
          <div className="inputBox">
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
            />
            <label>Service Type</label>
          </div>
          {/* Mobile number */}
          <div className="inputBox">
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <label>Mobile</label>
          </div>
          {/* Email */}
          <div className="inputBox">
            <input
              type="text"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
            <label>Mail</label>
          </div>
          {/* Appointment Date*/}
          <div className="inputBox">
            <input
              type="date"
              name="date"
              value={formData.appointmentDate}
              onChange={handleChange}
            />
            {/* <label></label> */}
          </div>
          {/* Appointment  Time*/}
          <div className="inputBox">
            <input
              type="time"
              name="time"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
            {/* <label></label> */}
          </div>
          {/* Note*/}
          <div className="inputBox">
            <input
              type="textarea"
              name="note"
              value={formData.note}
              onChange={handleChange}
              required
            />
            {/* <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              //   className="form-textarea"
            /> */}
            <label>Note to the Reader</label>
          </div>
          <div className="button-container ">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
          {/* <input type="submit" name="" value="Submit" /> */}
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
