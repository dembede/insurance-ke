import React, { useState } from "react";
import InputField from "../InputField";
import SelectField from "../SelectField";
import { Form } from "./Forms.styled";
import CustomButton from "../CustomButton";

export default function PaymentDetails({ onSubmit }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalID] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        return onSubmit({ paymentMethod, sname, email, nationalId });
      }}
    >
      <h3>3. Payment Details</h3>
      <p>
        Your cover will cost{" "}
        <strong>
          <small>KES.</small> 37,500.00
        </strong>
      </p>
      <SelectField
        label="Payment Method"
        name="paymentMethod"
        options={[
          { id: 1, name: "M-Pesa" },
          { id: 2, name: "Card" },
        ]}
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <CustomButton
        to="/form"
        onClick={() => onSubmit({ paymentMethod, sname, email, nationalId })}
      >
        Continue
      </CustomButton>
    </Form>
  );
}
