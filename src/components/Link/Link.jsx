import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;
    return (
        <li className='mr-8 hover:bg-gray-200 rounded-md px-4'><a href={path}>{name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;