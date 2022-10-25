import { useContext, useEffect, useState } from "react";
import { StepperContext } from "../../stepper-component/stepper-context";
import StepperControl from "../../stepper-component/stepper-control";

const PaymentForm  = ({handleClick, currentStep, steps}: any) => {
    const {userData, setUserData} : any = useContext(StepperContext);
    const [paymentData, setPaymentData] : any = useState('');

    const handleChange = (event: any) => {
        
        const {name, value} : any = event.target;
        setPaymentData({...paymentData, [name]: value})
        setUserData({...userData,  paymentData});
        console.log(userData);
    }

    const submitFormData = (e: any) => {
        e.preventDefault();
        handleClick(currentStep === steps.length -1 ? "confirm": "next");
      };
    

    return (
        <div className="insurance-form">
            <form onSubmit={submitFormData}>
                <h2 className='header-form'>Payment detail</h2>
                <p className="text-center text-xl my-2 text-red-600">{`${userData.insuranceOption.quotePerMonth}$`}</p>
                <div className="grid-form">
                    <div className="div-input">
                        <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 float-right" />
                    </div>
                </div>
                
                <div className="grid-form">
                    <label htmlFor="cardHolder">Card holder</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={paymentData["cardHolder"]||""} type="text" id="cardHolder" name="cardHolder" placeholder="name" required></input>
                    </div>
                </div>
                <div className="grid-form">
                    <label htmlFor="carNumber">
                        Car number
                    </label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={paymentData["carNumber"]||""} type="text" name="carNumber" id="carNumber" placeholder="0000 0000 0000 0000" required ></input>
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="expDate">Expiration date</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={paymentData["expDate"]||""} type="date" id="expDate" name="expDate" required></input>
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="secCode">Security code</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={paymentData["secCode"]||""} type="text" id="secCode" name="secCode" placeholder="000" required></input>
                    </div>
                </div>
                {currentStep !== steps.length &&
                    <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps}></StepperControl>
                }
            </form>
        </div>
    )

}

export default PaymentForm;