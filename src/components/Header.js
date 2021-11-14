import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'blue' : 'green'}
                    text={showAdd ? 'Show Posts' : 'Create Post'}
                    onClick={onAdd}
                />
            )}
        </header>
    );
};

Header.defaultProps = {
    title: 'Flarebook',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header;
