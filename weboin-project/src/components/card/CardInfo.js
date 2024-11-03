import React from "react";
import "./CardInfo.css";
export default function CardInfo({
  firstName,
  name,
  role,
  email,
  phoneNumber,
  course,
  status,
  handleDelete,
}) {
  return (
    <div className="user-card">
      <div className="user-card-lead">
        <div className="circle">{firstName}</div>
        <h3>{name}</h3>
      </div>
      <div className="user-card-content">
        <p>
          <strong>Role:</strong>
          {role}
        </p>
        <p>
          <strong>Email:</strong>
          {email}
        </p>
        <p>
          <strong>Phone Number:</strong>
          {phoneNumber}
        </p>
        <p>
          <strong>Course:</strong>
          {course}
        </p>
        <p>
          <strong>Status:</strong>
          {status}
        </p>
      </div>
      <button type="button" className="btn-dlt" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
