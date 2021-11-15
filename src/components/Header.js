import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd, onRecent, onLikes }) => {
    const location = useLocation();

    return (
        <header className="header">
            <div>
                <div>
                    <h1>{title}</h1>
                    <div style={{ marginBottom: '50px' }}></div>
                    {location.pathname === '/' && (
                        <Button
                            color={showAdd ? 'blue' : 'green'}
                            text={showAdd ? 'Show Posts' : 'Create Post'}
                            onClick={onAdd}
                        />
                    )}
                </div>
                <div className="mt-2">
                    {location.pathname === '/' && (
                        <Button
                            color="blue"
                            text="Show Most Recent Posts"
                            onClick={onRecent}
                        />
                    )}
                    {location.pathname === '/' && (
                        <Button
                            color="blue"
                            text="Show Most Liked Posts"
                            onClick={onLikes}
                        />
                    )}
                </div>
            </div>
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
