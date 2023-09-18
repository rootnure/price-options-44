import PropTypes from 'prop-types';
import { IoIosCheckmarkCircle } from 'react-icons/Io';

const Feature = ({feature}) => {
    return (
        <p className='flex items-center gap-x-2 text-white'>
            <IoIosCheckmarkCircle className='text-green-400'></IoIosCheckmarkCircle> {feature}
        </p>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Feature;