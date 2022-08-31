import React, { useState, useEffect } from "react";
import PersonalDetails from "../../components/Forms/PersonalDetails";
import PaymentDetails from "../../components/Forms/PaymentDetails";
import CoverDetails from "../../components/Forms/CoverDetails";
import { Section } from "./Form.styled";
export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [coverDetailsData, setCoverDetailsData] = useState({});
  const [personalDetailsData, setPersonalDetailsData] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});

  function handleCoverDetails(data) {
    console.log(data);
    setCoverDetailsData(data);
    setCurrentStep(2);
  }
  function handlePersonalDetails(data) {
    console.log(data);
    setPersonalDetailsData(data);
    setCurrentStep(3);
  }
  function handlePaymentDetails(data) {
    console.log(data);
    setPaymentDetails(data);
    setCurrentStep(4);
  }

  return (
    <Section>
      <h1>Apply</h1>
      <p>
        <strong>This form has three simple steps</strong>
      </p>
      <p>
        <small>
          {currentStep > 1 ? <span>&#9989;</span> : <strong>(1)</strong>} Cover
          Details{" "}
          {currentStep > 2 ? <span>&#9989;</span> : <strong>(2)</strong>}{" "}
          Personal Details{" "}
          {currentStep > 3 ? <span>&#9989;</span> : <strong>(3)</strong>}{" "}
          Payment Details
        </small>
      </p>
      {currentStep === 1 && (
        <CoverDetails onSubmit={(data) => handleCoverDetails(data)} />
      )}
      {currentStep === 2 && (
        <PersonalDetails onSubmit={(data) => handlePersonalDetails(data)} />
      )}
      {currentStep === 3 && (
        <PaymentDetails onSubmit={(data) => handlePaymentDetails(data)} />
      )}
    </Section>
  );
}
