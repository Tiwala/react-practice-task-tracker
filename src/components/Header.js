// Used to catch errors like if you want the property type to be a specific type
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            {/* If you want to put inline css, you use double curly braces */}
            {/* If you want to call a variable with the css that's cool too */}
            <h1>{title}</h1>
            {/* dynamic ternary dependent on showAdd boolean value */}
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

// Defaults the Header.title to this if you don't put a title= in the App.js
Header.defaultProps = {
    title: 'Task Tracker'
}

// Sets the property type for the header to be a string
// Will still pass if not a string but will give a warning in the console if without .isRequired
// If you put .isRequired, will give an error if you get rid of defaultProps
Header.propTypes = {
    title: PropTypes.string
}

// You can also do this to put css in the JSX
// camelCase
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header