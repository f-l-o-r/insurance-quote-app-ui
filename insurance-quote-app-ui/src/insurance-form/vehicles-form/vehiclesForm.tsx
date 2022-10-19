import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StepperContext } from "../../stepper-component/stepper-context";

const VehicleForm  = () => {
    const {vehicle} = useParams();
    const {userData, setUserData} : any = useContext(StepperContext);
    const [vehicleData, setVehicleData] : any = useState(userData.vehicle? userData.vehicle : {});
    vehicleData.vehicleType = vehicle;
    const handleChange = (event: any) => {
        const {name, value} : any = event.target;
        setVehicleData({...vehicleData, [name]: value})
        setUserData({...userData,  ['vehicle']: vehicleData});
    }
    
    return (
        <div className="insurance-form">
                <h2 className='header-form'>Vehicle details</h2>
                <div className="grid-form">
                    <label htmlFor="brand">
                        Type
                    </label>
                    <div className="div-input">
                        <input  value ={vehicleData["vehicleType"]||vehicle} type="text" name="vehicleType" id="vehicleType" disabled></input>
                    </div>
                </div>
                <div className="grid-form">
                    <label htmlFor="brand">
                        Brand
                    </label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={vehicleData["brand"]||""} type="text" name="brand" id="brand"></input>
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="model">Model</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={vehicleData["model"]||""} type="text" id="model" name="model"></input>
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="year">Year</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={vehicleData["year"]||""} type="text" id="year" name="year"></input>
                    </div>
                </div>


                <div className="grid-form">
                    <label htmlFor="cost">Cost</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={vehicleData["cost"]||""} type="number" id="cost" name="cost"></input>
                    </div>
                </div>

                <div className="grid-form">
                <label>Do you currently</label>
                    <div className="div-input">
                        <input onChange={handleChange} type="radio" id="female" name="state" value ={"own"}/>
                        <label htmlFor="own">Own</label>
                        <input onChange={handleChange} value ="lease" type="radio" id="lease" name="state"/>
                        <label htmlFor="lease">Lease</label>
                        <input onChange={handleChange} value ="finance" type="radio" id="finance" name="state"/>
                        <label htmlFor="finance">Finance</label>
                    </div>
                </div>
        </div>
    )

}

export default VehicleForm;