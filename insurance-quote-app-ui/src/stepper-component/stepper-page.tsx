import { useState } from "react";
import Final from "../final-step/final-step";
import Stepper from "./stepper";
import { StepperContext } from "./stepper-context";
import StepperControl from "./stepper-control";
import DriverForm from "../insurance-form/driver-form/driverForm";
import PaymentForm from "../insurance-form/payment-form/payment-form";
import VehicleForm from "../insurance-form/vehicles-form/vehiclesForm";
import InsuranceOptions from "../insurance-form/insurance-options/insurance-options";
import * as api from '../service/connection-api';


interface Vehicle {
  vehicleType: string,
  brand: string,
  model: string,
  year: string,
  cost: Number,
  state: string
};

interface InsuranceOption {
  optionType: string,
  tittle: string,
  coverPercentage: Number,
  quotePerMonth: Number,
  base: string
};

interface InsuranceQuote {
  firstName: string,
  lastName: string,
  birthday: string,
  vehicle: [Vehicle],
  hasAccident: string,
  address: string,
  gender: string,
  maritalStatus: string,
  insuranceOption: InsuranceOption
}

const StepperPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({});
    const [finalData, setFinalData] = useState([]);
    const steps = [
      "Driver detail",
      "Vehicle detail",
      "Insurance options",
      "Payment",
      "complete"
    ]
  
    const displayStep = (step: number) => {
      switch(step) {
        case 1: 
          return <DriverForm/>
        case 2: 
          return <VehicleForm/>
        case 3: 
          return <InsuranceOptions/>
        case 4: 
          return <PaymentForm/>
        case 5: 
          return <Final/>
      }
    }

  const createInsurance = async () => {
    try {
      const { data } = await api.createInsurance(userData);
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
            {currentStep !== steps.length &&
                <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps}></StepperControl>
            }
        </div>
    )
}

export default StepperPage;