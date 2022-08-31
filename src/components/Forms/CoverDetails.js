import React, { useState } from "react";
import InputField from "../InputField";
import SelectField from "../SelectField";
import { Form } from "./Forms.styled";
import CustomButton from "../CustomButton";

export default function CoverDetails({ onSubmit }) {
  const [carModel, setCarModel] = useState("");
  const [yom, setYom] = useState("");
  const [coverType, setCoverType] = useState("");
  const [coverDuration, setCoverDuration] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        return onSubmit({ coverType, coverDuration });
      }}
    >
      <h3>1. Cover Details</h3>
      <InputField
        label="Type of car"
        name="carModel"
        type="text"
        value={carModel}
        placeholder="e.g. Mercedes Benz C200"
        onChange={(e) => setCarModel(e.target.value)}
      />
      <InputField
        label="Year of manufacture"
        name="yom"
        type="number"
        value={yom}
        placeholder="e.g. 2015"
        onChange={(e) => setYom(e.target.value)}
      />

      <SelectField
        label="Cover Type"
        name="coverType"
        options={[
          { id: 1, name: "Comprehensive Cover" },
          { id: 2, name: "Third Party Fire & Theft" },
          { id: 3, name: "Third Party Policy (TPP)" },
        ]}
        value={coverType}
        onChange={(e) => setCoverType(e.target.value)}
      />
      <SelectField
        label="Cover Duration"
        name="coverDuration"
        options={[
          { id: "1mo", name: "1 month" },
          { id: "6mo", name: "6 months" },
          { id: "1y", name: "1 year" },
        ]}
        value={coverDuration}
        onChange={(e) => setCoverDuration(e.target.value)}
      />
      <CustomButton
        to="/form"
        onClick={() => onSubmit({ coverType, coverDuration })}
      >
        Continue...
      </CustomButton>
      <p>
        <i>
          <small>Next, complete your Personal Details</small>
        </i>
      </p>
    </Form>
  );
}