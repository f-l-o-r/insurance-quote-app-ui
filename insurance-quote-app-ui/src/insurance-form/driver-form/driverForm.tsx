import { useContext } from 'react';
import { StepperContext } from '../../stepper-component/stepper-context';
import StepperControl from '../../stepper-component/stepper-control';

const DriverForm  = ({handleClick, currentStep, steps}: any) => {
    const {userData, setUserData}: any = useContext(StepperContext);
    const handleChange = (event: any) => {
        const {name, value} : any = event.target;
        setUserData({...userData, [name]: value});
    }

    const submitFormData = (e: any) => {
        e.preventDefault();

        handleClick(currentStep === steps.length -1 ? "confirm": "next");
      };
    
    return (
        <div className='insurance-form'>
            <form onSubmit={submitFormData}>
                <h2 className='header-form'>Driver details</h2>
                <div className="grid-form">
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={userData["firstName"]||""} type="text" name="firstName" id="firstName" required />
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="lastName">Last Name</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={userData["lastName"]||""} type="text" id="lastName" name="lastName" required></input>
                    </div>
                </div>

                <div className="grid-form">
                    <label htmlFor="address">Address</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={userData["address"]||""} type="text" id="address" name="address" required></input>
                    </div>
                </div>


                <div className="grid-form">
                    <label htmlFor="birthday">Birthday</label>
                    <div className="div-input">
                        <input onChange={handleChange} value ={userData["birthday"]||""} type="date" id="birthday" name="birthday" required></input>
                    </div>
                </div>

                <div className="grid-form">
                <label>Gender</label>
                    <div className="div-input">
                        <input onChange={handleChange} type="radio" id="female" name="gender" value ={"female"} required/>
                        <label htmlFor="female">Female</label>
                        <input onChange={handleChange} value ="male" type="radio" id="male" name="gender"/>
                        <label htmlFor="male">Male</label>
                    </div>
                </div>

                <div className="grid-form">
                    <label>Marital status</label>
                    <div className="div-input">
                        <input onChange={handleChange} type="radio" id="single" name="maritalStatus" value="single" required/>
                        <label htmlFor="single">Single</label>
                        <input onChange={handleChange} type="radio" id="married" name="maritalStatus" value="married" />
                        <label htmlFor="married">Married</label>

                    </div>
                </div>

                <div className="grid-form">
                    <label>Any accidente in the last 5 years</label>
                    <div className="div-input">
                        <input onSelect={handleChange} type="radio" id="yesAccident" name="hasAccident" value="yes" required/>
                        <label htmlFor="yesAccident">Yes</label>
                        <input onChange={handleChange} type="radio" id="noAccident" name="hasAccident" value="no" />
                        <label htmlFor="noAccident">No</label>
                    </div>
                </div>
                {currentStep !== steps.length &&
                    <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps}></StepperControl>
                }
            </form>
        </div>
    )

}

export default DriverForm;