import React, {useEffect, useState, useRef} from "react";

interface StepperIntr {
    steps: string[],
    currentStep: Number
}

interface StepIntr {
    description: string,
    highlighted: boolean,
    selected: boolean,
    completed: boolean
}

const Stepper = ({steps, currentStep}: StepperIntr) => {

    
    
    const[newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber: any, steps: any) => {
        
        const newSteps = [...steps];
        let count =0;
        while(count < newStep.length) {
            if(count === stepNumber) {
                newSteps[count] = {
                    ... newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                };
                count++;
            }

            else if(count < stepNumber) {
                newSteps[count] = {
                    ... newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true
                };
                count++;
            } else {
                newSteps[count] = {
                    ... newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                };
                count++;
            }

        }
        return newSteps;
    }

    useEffect(() => {
        console.log(steps)
        const stepsState = steps.map((step: any, index: Number) => 
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0? true: false,
                    selected: index === 0? true: false
                }
            )
        );
        //@ts-ignore
        stepRef.current = stepsState;
        //@ts-ignore
        const current = updateStep(currentStep - 1, stepRef.current);
        //@ts-ignore
        setNewStep(current);
    }, [steps, currentStep]);

    
    
    const displaySteps = newStep.map((step: StepIntr, index)  => {
        return (
            <div key={index} className={index !== newStep.length -1? "w-full flex items-center" : "flex items-center" }>
                <div className="relative flex flex-col items-center text-teal-600">
                    <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex justify-center py-3 ${
                        step.selected? "bg-green-600 text-white font-bold border border-green-600" : ""
                    }`}>
                    {step.completed? (
                    <span className="text-white font-bold text-xl">&#10003;</span>): (index +1)}
                    </div>
                    <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase t ${step.highlighted? "text-gray-900": "text-gray-400"}`}>
                        {step.description}
                    </div>
                </div>
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed? "border-green-600" :  "border-gray-300"}`}></div>

            </div>)
    })
    return (
        <div className="mx-4 p-4 flex justify-between items-center">
            {displaySteps}
        </div>
    )
}

export default Stepper;