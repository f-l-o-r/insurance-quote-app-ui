import { useState } from "react";
import Final from "../final-step/final-step";
import Stepper from "./stepper";
import { StepperContext } from "./stepper-context";
import DriverForm from "../insurance-form/driver-form/driverForm";
import PaymentForm from "../insurance-form/payment-form/payment-form";
import VehicleForm from "../insurance-form/vehicles-form/vehiclesForm";
import InsuranceOptions from "../insurance-form/insurance-options/insurance-options";
import * as api from '../service/connection-api';

const StepperPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({});
    const steps = [
      "Driver detail",
      "Vehicle detail",
      "Insurance options",
      "Payment",
      "complete"
    ]

    const createInsurance = async () => {
      try {
        await api.createInsurance(userData);
      } catch (error: any) {
        console.log(error.message);
      }
    }

    const handleClick = (direction: string) => {
  
      let newStep = currentStep;

      if(direction === "confirm"){
        createInsurance();
      }
      direction === "next" || direction === "confirm" ? newStep ++ : newStep --;
      newStep> 0 && newStep <= steps.length && setCurrentStep(newStep);
  
    }
  
    const displayStep = (step: number) => {
      switch(step) {
        case 1: 
          return <DriverForm handleClick={handleClick} currentStep={currentStep} steps={steps}/>
        case 2: 
          return <VehicleForm handleClick={handleClick} currentStep={currentStep} steps={steps}/>
        case 3: 
          return <InsuranceOptions handleClick={handleClick} currentStep={currentStep} steps={steps}/>
        case 4: 
          return <PaymentForm handleClick={handleClick} currentStep={currentStep} steps={steps}/>
        case 5: 
          return <Final/>
      }
    }

    return (
        <div className='md:w-4/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
            <div className='container horizontal mt-5'>
                <Stepper steps={steps} currentStep={currentStep}></Stepper>
            </div>
            <div className='my-10 p-10'>
                <StepperContext.Provider value={{
                    userData,
                    setUserData
                }}>
                    {displayStep(currentStep)}
                </StepperContext.Provider>
            </div>
        </div>
    )
}

export default StepperPage;