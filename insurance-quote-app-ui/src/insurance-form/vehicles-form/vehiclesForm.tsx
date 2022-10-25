import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StepperContext } from "../../stepper-component/stepper-context";
import StepperControl from "../../stepper-component/stepper-control";

const VehicleForm  = ({handleClick, currentStep, steps}: any) => {
    const {vehicle} = useParams();
    const {userData, setUserData} : any = useContext(StepperContext);
    const [vehicleData, setVehicleData] : any = useState(userData.vehicle? userData.vehicle : {});
    vehicleData.vehicleType = vehicle;
    const handleChange = (event: any) => {
        const {name, value} : any = event.target;
        setVehicleData({...vehicleData, [name]: value})
        setUserData({...userData,  ['vehicle']: vehicleData});
    }

    const submitFormData = (e: any) => {
        e.preventDefault();
        handleClick(currentStep === steps.length -1 ? "confirm": "next");
      };
    
    return (
        <div className="insurance-form">
            <form onSubmit={submitFormData}>
                <h2 className='header-form'>Vehicle details</h2>
                <div className="grid-form">
                    <label htmlFor="brand">
                        Type
                    </label>
                    <div className="div-input">
                        <input  value ={vehicleData["vehicleType"]||vehicle} type="text" name="vehicleType" id="vehicleType" disabled required></input>
                    </div>
                </div>
                <div className="grid-form">
                    <label htmlFor="brand">
                        Brand
                    </label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={vehicleData["brand"]||""} type="text" name="brand" id="brand" required></input>
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="model">Model</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={vehicleData["model"]||""} type="text" id="model" name="model" required></input>
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="year">Year</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={vehicleData["year"]||""} type="text" id="year" name="year" required></input>
                    </div>
                </div>


                <div className="grid-form">
                    <label htmlFor="cost">Cost</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={vehicleData["cost"]||""} type="number" id="cost" name="cost" required></input>
                    </div>
                </div>

                <div className="grid-form">
                <label>Do you currently</label>
                    <div className="div-input">
                        <input onChange={handleChange} type="radio" id="female" name="state" value ={"own"} required/>
                        <label htmlFor="own">Own</label>
                        <input onChange={handleChange} value ="lease" type="radio" id="lease" name="state"/>
                        <label htmlFor="lease">Lease</label>
                        <input onChange={handleChange} value ="finance" type="radio" id="finance" name="state"/>
                        <label htmlFor="finance">Finance</label>
                    </div>
                </div>
                {currentStep !== steps.length &&
                    <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps}></StepperControl>
                }
            </form>
        </div>
    )

}

export default VehicleForm;