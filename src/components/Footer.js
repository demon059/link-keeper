// router
import { Link } from 'react-router-dom'

// styles
import '../scss/components/Footer.scss'

const Footer = (props) => {
    return (
        <div className='link-keeper__footer'>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Footer
