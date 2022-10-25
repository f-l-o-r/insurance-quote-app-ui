import axios from 'axios';

// const url =  +'';

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

axios.defaults.baseURL = process.env.REACT_APP_API_URL || '';
export const createInsurance = (newInsuranceQuote: any) => axios.post('/quote', newInsuranceQuote);
export const getProducts = () => axios.get('/products');
export const getOptions = () => axios.get('/options');
export const getPrice = (value:string) => axios.get(`/price/${value}`);
