import { useContext } from 'react';
import { StepperContext } from '../../stepper-component/stepper-context';

const DriverForm  = () => {
    const {userData, setUserData}: any = useContext(StepperContext);
    const handleChange = (event: any) => {
        const {name, value} : any = event.target;
        setUserData({...userData, [name]: value});
    }
    
    return (
        <div className='insurance-form'>
                <h2 className='header-form'>Driver details</h2>
                <div className="grid-form">
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={userData["firstName"]||""} type="text" name="firstName" id="firstName" />
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="lastName">Last Name</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={userData["lastName"]||""} type="text" id="lastName" name="lastName"></input>
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="address">Address</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={userData["address"]||""} type="text" id="address" name="address"></input>
                    </div>
                </div>


                <div className="grid-form">
                    <label htmlFor="birthday">Birthday</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={userData["birthday"]||""} type="date" id="birthday" name="birthday"></input>
                    </div>
                </div>

                <div className="grid-form">
                <label>Gender</label>
                    <div className="div-input">
                        <input onChange={handleChange} type="radio" id="female" name="gender" value ={"female"}/>
                        <label htmlFor="female">Female</label>
                        <input onChange={handleChange} value ="male" type="radio" id="male" name="gender"/>
                        <label htmlFor="male">Male</label>
                    </div>
                </div>

                <div className="grid-form">
                    <label>Marital status</label>
                    <div className="div-input">
                        <input onChange={handleChange} type="radio" id="single" name="maritalStatus" value="single" />
                        <label htmlFor="single">Single</label>
                        <input onChange={handleChange} type="radio" id="married" name="maritalStatus" value="married" />
                        <label htmlFor="married">Married</label>

                    </div>
                </div>

                <div className="grid-form">
                    <label>Any accidente in the last 5 years</label>
                    <div className="div-input">
                        <input onSelect={handleChange} type="radio" id="yesAccident" name="hasAccident" value="yes" />
                        <label htmlFor="yesAccident">Yes</label>
                        <input onChange={handleChange} type="radio" id="noAccident" name="hasAccident" value="no" />
                        <label htmlFor="noAccident">No</label>
                    </div>
                </div>
        </div>
    )

}

export default DriverForm;