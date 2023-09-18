import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;
    return (
        <li><a href={path}>{name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;