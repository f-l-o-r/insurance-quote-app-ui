import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './InsuranceProductList.scss';

import * as api from '../service/connection-api';

interface Product {
    tittle: String,
    type: String,
    url: String,
    status: String,
    image: String,
    description:String
}

const InsuranceProductList = () => {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        if (product) getProducts();
      }, []);
    
    const getProducts = async() => {
        try {
            const { data } = await api.getProducts();
            setProducts(data);
          } catch (error: any) {
            console.log(error.message);
          }
    }
    return (
        <>
            <div className="container my-20 px-6 mx-auto">
                <div>
                <h2 className="text-2xl mb-12 text-center">
                Get a car insurance quote: fast, free, and personalized
                </h2>
                <p>
                With InsuQuote company, you can get the customized protection you need at a price that works for you. Get an auto insurance quote today and discover how we help you save and give you peace of mind.
                </p>
                </div>
                <br></br>
                <section className="mb-32 text-gray-800 text-center lg:text-left">
                    <h2 className="text-2xl mb-12 text-center">See our product options....</h2>

                    <div className="grid sm:grid-cols-2 gap-x-10 lg:mx-44 ">
                        {
                            product.map((product: Product, key) => (
                                <div className="mb-12 lg:mb-0 " key={key}>
                                    <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6 bg-position p-10" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <Link to={`/info/${product.url}`}>
                                            <img src={require('../images/' + product.image)} className="w-3/5 m-10" />
                                        </Link>
                                        <h5 className="text-lg font-bold mb-3">{product.tittle}</h5>
                                        <p className="text-gray-500">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </section>
            </div>
        </>

    )
}

export default InsuranceProductList;