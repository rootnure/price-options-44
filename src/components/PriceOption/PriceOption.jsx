import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    console.log(option);
    return (
        <div>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;