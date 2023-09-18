import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    const [amount, criteria] = price.split(" per ");
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className="text-7xl font-extrabold">{amount}</span>
                <span className="text-2xl">/{criteria}</span>
            </h2>
            <h2 className="text-3xl my-8 text-center">{name}</h2>
            <div className='pl-4 flex-grow'>

                {
                    features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button className="btn btn-accent mt-12 w-full font-bold normal-case">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;