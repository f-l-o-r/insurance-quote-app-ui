import { useContext, useEffect, useState } from "react";
import { StepperContext } from "../../stepper-component/stepper-context";
import * as api from '../../service/connection-api';

interface  Details  {
    description: string,
    price: string
}
interface  Coverage  {
    tittle: string,
    coverageType: string,
    details : [Details]
}
interface InsuranceOption {
    tittle: string,
    optionType: string,
    base: number,
    coverPercentage: number,
    coverage: [Coverage]
}

interface InsuranceOptionBody {
    tittle: string,
    optionType: string,
    base: number,
    coverPercentage: number,
    quotePerMonth: number
}

const InsuranceOptions  = () => {

    const [options, setOptions] = useState([]);
    const {userData, setUserData} : any = useContext(StepperContext);

    useEffect(() => {
        getOptions();
      }, []);
    
    const getOptions = async() => {
        try {
            const { data } = await api.getOptions();
            setOptions(data);
          } catch (error: any) {
            console.log(error.message);
          }
    }

    const handleChange = (insOption: InsuranceOption) => {

        const body : InsuranceOptionBody = {
            tittle : insOption.tittle,
            optionType: insOption.optionType,
            coverPercentage: insOption.coverPercentage,
            base: insOption.base,
            quotePerMonth: (userData.vehicle.cost * (insOption.coverPercentage / 100) )/ 12
        }

        setUserData({...userData,  ['insuranceOption']: body});
    }
    

    console.log(userData);
    return (
        <div className="container  mx-auto">
            <section className=" text-gray-800 text-center lg:text-left">
                <div className="grid sm:grid-cols-3 gap-x-10 ">
                    {
                        options.map((insOption: InsuranceOption, key) => (
                            <button 
                            key={key}
                            onClick={() => handleChange(insOption)}
                            className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6 bg-position p-10 focus:bg-green-200" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <h5 className="text-lg font-bold mb-3">{insOption.tittle}</h5>
                                {insOption.coverage.map((coverage, key) => (
                                    <>
                                        <p className="text-gray-500">{coverage.tittle}</p>
                                        <ul className="text-left" key={key}>
                                            {coverage.details.map((detail, key) => (
                                                <li key={key}>{`${detail.description}........${detail.price}`}</li>
                                            ))
                                            }
                                        </ul>
                                        <br></br>
                                    </>
                                ))}
                                 <p className="text-gray-500">{(userData.vehicle.cost * (insOption.coverPercentage / 100) )/ 12}</p>
                            </button>
                        ))
                    }
                </div>

            </section>
        </div>
    )
}

export default InsuranceOptions;