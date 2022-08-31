import React, { useState } from "react";
import InputField from "../InputField";
import { Form } from "./Forms.styled";
import CustomButton from "../CustomButton";

export default function PersonalDetails({ onSubmit }) {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalID] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        return onSubmit({ fname, sname, email, nationalId });
      }}
    >
      <h3>2. Personal Details</h3>
      <InputField
        label="First name"
        name="fname"
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <InputField
        label="Surname"
        name="sname"
        type="text"
        value={sname}
        onChange={(e) => setSname(e.target.value)}
      />
      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="National ID"
        name="nationalId"
        type="number"
        value={nationalId}
        onChange={(e) => setNationalID(e.target.value)}
      />
      <CustomButton
        to="/form"
        onClick={() => onSubmit({ fname, sname, email, nationalId })}
      >
        Continue
      </CustomButton>
      <p>
        <i>
          <small>Next, complete your Payment Details</small>
        </i>
      </p>
    </Form>
  );
}
