import axios from 'axios';

const url =  'http://localhost:8080/insurance';

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


  console.log('url '+ url)
export const fetchInsurances = () => axios.get(url);
export const createInsurance = (newInsuranceQuote: any) => axios.post(url+'/quote', newInsuranceQuote);

export const getProducts = () => axios.get(url + '/products');
export const getOptions = () => axios.get(url + '/options');
export const getPrice = (value:string) => axios.get(url + `/price/${value}`);
