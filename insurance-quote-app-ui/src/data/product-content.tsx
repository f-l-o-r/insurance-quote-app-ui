export  const InsuranceProducts = [
    {
        tittle: "Car",
        type: "car",
        url: "car",
        status:"Ready",
        image:"car.png",
        description:"Get a personalized quote for your car"

    },
    {
        tittle: "Bike",
        type: "bike",
        url: "bike",
        status:"Ready",
        image:"motorbike.png",
        description:"Get a personalized quote for your bike"

    },
]

export const InsuranceOptionsData = [
    {
        "tittle": "State Minimum",
        "optionType":"stateMinimun",
        "base": 15000,
        "coverPercentage": 30,
        "coverage": [
            {
                "tittle": "Policy Coverage",
                "coverageType": "policy",
                "details" : [
                    {
                        "description": "Bodily injury (BI)",
                        "price": "$15K / $30K"
                    },
                    {
                        "description": "Property damage (PD)",
                        "price": "$5K"
                    },
                    {
                        "description": "Personal injury protection (PIP",
                        "price": "None"
                    }
                ]
            },
            {
                "tittle": "Coverage Vehicle",
                "type": "vehicle",
                "details" :[
                    {
                        "description": "Collision (deductible)",
                        "price": "None"
                    },
                    {
                        "description": "Comprehensive (deductible)",
                        "price": "none"
                    }
                ]

            }
        ]

    },
    {
        "tittle": "Basic",
        "optionType":"basic",
        "base": 25000,
        "coverPercentage": 50,
        "coverage": [
            {
                "tittle": "Policy Coverage",
                "type": "policy",
                "details" :[
                    {
                        "description": "Bodily injury (BI)",
                        "price": "$25K / $50K"
                    },
                    {
                        "description": "Property damage (PD)",
                        "price": "$25K"
                    },
                    {
                        "description": "Personal injury protection (PIP",
                        "price": "None"
                    }
                ]
            },
            {
                "tittle": "Vehicle Coverage",
                "type": "vehicle",
                "details" : [
                    {
                        "description": "Collision (deductible)",
                        "price": "1K"
                    },
                    {
                        "description": "Comprehensive (deductible)",
                        "price": "1K"
                    }
                ]

            }
        ]

    },
    {
        "tittle": "Primium",
        "optionType":"primium",
        "base": 50000,
        "coverPercentage": 70,
        "coverage": [
            {
                "tittle": "Policy Coverage",
                "type": "policy",
                "details" :[
                    {
                        "description": "Bodily injury (BI)",
                        "price": "$50K / $100K"
                    },
                    {
                        "description": "Property damage (PD)",
                        "price": "$50K"
                    },
                    {
                        "description": "Personal injury protection (PIP",
                        "price": "None"
                    }
                ]
            },
            {
                "tittle": "Vehicle Coverage",
                "type": "vehicle",
                "details" : [
                    {
                        "description": "Collision (deductible)",
                        "price": "1K"
                    },
                    {
                        "description": "Comprehensive (deductible)",
                        "price": "1K"
                    }
                ]

            }
        ]

    }
]