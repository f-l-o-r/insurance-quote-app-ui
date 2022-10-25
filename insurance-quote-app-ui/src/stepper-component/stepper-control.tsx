import './stepper-control.scss';

const StepperControl = ({handleClick, currentStep, steps}: any) => {
    return (
        <div className="container flex justify-around mt-4 mb-8">
            <button type="submit"
            onClick={()=>handleClick()}
            className={`stepper-button back-button ${
                currentStep === 1? "opacity-50 cursor-not-allowed": ""
            }`}>
                back
            </button>
            <button type="submit"
            className="stepper-button next-button">
                {currentStep === steps.length -1 ? "Confirm": "Next"}
            </button>
        </div>
    )
}

export default StepperControl;