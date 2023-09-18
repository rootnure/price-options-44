import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const [priceOptions, setPriceOptions] = useState([]);

    useEffect(() => {
        fetch('priceOptions.json')
        .then(res => res.json())
        .then(data => setPriceOptions(data.priceOptions))
    }, []);

    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            {
                priceOptions.map(option => <PriceOption
                    key={option.id}
                    option={option}
                ></PriceOption>)
            }
            
        </div>
    );
};

export default PriceOptions;