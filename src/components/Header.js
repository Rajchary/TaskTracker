import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title}) => {
    const onClick = (e)=>{
        console.log(e);
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add" color="green" onClick = {onClick}/>
            
        </header>
    )
}
Header.defaultProps = {
    title : 'Task Tracker...'
}
Header.prototypes = {
   title: PropTypes.string.isRequired,
}
// const headingStyle = {
//     color: '#61dafb',
// }
export default Header