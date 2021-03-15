// router
import { Link } from 'react-router-dom'

const About = (props) => {
    return (
        <div className='link-keeper__content'>
            <Link to='/'>Go back</Link>
            <p>
                <strong>Link-keeper</strong> was created to demonstrate basic
                React.js skills that was got in short amount of time.
            </p>
            <p>
                <strong>Opportunities this app:</strong>
            </p>
            <p>- addition new links</p>
            <p>- deletion links</p>
            <p>- copy link to clipboard when clicking on white box</p>
            <p>- open selected link in a new window</p>
            <p>- switch pages without reloading the page</p>
            <br />
            <br />
            <p>Just enjoy! Thank you for watching my application :)</p>
        </div>
    )
}

export default About
