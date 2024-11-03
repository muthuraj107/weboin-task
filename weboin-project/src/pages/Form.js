import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import Nav from "../components/Nav/Nav";
import Endfooter from "../components/footer/Endfooter";
import CardInfo from "../components/card/CardInfo";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phoneNumber: "",
    course: "",
    status: "Placed",
  });
  const [data, setData] = useState([]);
  const url = "https://weboin-task.onrender.com";

  const getData = async () => {
    try {
      const res = await axios.get(url + "/api/user/data");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post(url + "/api/user/post", formData);
      await getData();
    } catch (error) {
      console.log("4");

      console.error("Error submitting form:", error);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(url + `/api/user/dlt/${id}`);
      await getData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <section className="form-lead">
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <h1>Fill This Form</h1>
            <div className="form-flex">
              <div className="list">
                <div className="list-item">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInput}
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="list">
                <div className="list-item">
                  <label for="role">Role:</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInput}
                    id="role"
                    placeholder="Enter your role"
                  ></input>
                </div>
              </div>
              <div className="list">
                <div className="list-item">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                  ></input>
                </div>
              </div>
              <div className="list">
                <div className="list-item">
                  <label for="phoneNumber">Phone Number:</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInput}
                    placeholder="Enter your phone number"
                  ></input>
                </div>
              </div>
              <div className="list">
                <div className="list-item">
                  <label for="course">Course:</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInput}
                  >
                    <option value="">Select a course</option>
                    <option value="React Basics">React Basics</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="JavaScript Fundamentals">
                      JavaScript Fundamentals
                    </option>
                    <option value="Advanced CSS">Advanced CSS</option>
                    <option value="Backend Development">
                      Backend Development
                    </option>
                  </select>
                </div>
              </div>
              <div className="list">
                <div className="list-item">
                  <label for="status">Status:</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInput}
                  >
                    <option value="Placed">Placed</option>
                    <option value="Unplaced">Unplaced</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
      <section className="user-info">
        <div>
          {data?.map((user, index) => (
            <CardInfo
              key={index}
              firstName={user?.name.charAt(0)}
              name={user.name}
              role={user.role}
              email={user.email}
              phoneNuber={user.phoneNumber}
              course={user.course}
              status={user.status}
              handleDelete={() => handleDelete(user._id)}
            ></CardInfo>
          ))}
        </div>
      </section>
      <div>
        <Endfooter />
      </div>
    </div>
  );
}
