import { FormEvent, useState } from "react";
import { PaymentForm } from "./PaymentForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";
import { Button } from '@mui/material';

type FormData = {
  firstName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
  nameOnCard: string;
  cardNumber: string;
  expiration: string;
  cvc: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
  nameOnCard:"",
  cardNumber:"",
  expiration: "",
  cvc:"",
};

function CheckoutForm() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <PaymentForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Your order will arive in 10 days. May the force be with you!");
  }

  return (
    <div className="form-background" 
    style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      position: 'relative'}}>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.7)", 
          padding: "2rem", 
          borderRadius: ".5rem", 
          maxWidth: "max-content", 
          position: 'relative'}}>
        <form onSubmit={onSubmit}>
          <div style={{ 
            position: "absolute", 
            top: ".8rem", 
            right: ".8rem",
            }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem", 
              display: "flex", 
              gap: ".5rem",
              justifyContent: "flex-end",}}>
            {!isFirstStep && (
              <Button 
              type="button" onClick={back}
              variant="contained" 
              size="medium" 
              color="primary"
              sx={{backgroundColor: '#000000', '&:hover': {backgroundColor: '#666'},}}>Back</Button>
            )}
            <Button 
              type="submit"
              variant="contained" 
              size="medium" 
              color="primary"
              sx={{backgroundColor: '#000000', '&:hover': {backgroundColor: '#666'},}}>{isLastStep ? "Finish" : "Next"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
