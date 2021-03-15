import PropTypes from 'prop-types'

// router
import { useLocation } from 'react-router-dom'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

// styles
import '../scss/components/Header.scss'

const Header = ({ title, onAdd, enableFormAddLink }) => {
    let className = 'btn add icon'
    if (enableFormAddLink) {
        className += ' red'
    } else {
        className += ' orange'
    }

    const location = useLocation()

    return (
        <header>
            <div className='link-keeper__header'>
                <h1>
                    <FontAwesomeIcon icon={faLink} /> {title}
                    <small>Just click on white box for copy</small>
                </h1>
                {location.pathname === '/' && (
                    <button className={className} onClick={onAdd}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                        {enableFormAddLink ? 'Close' : 'Add'}
                    </button>
                )}
            </div>
        </header>
    )
}

Header.defaultProps = { title: 'Link keeper' }

Header.propTypes = {
    title: PropTypes.string,
    handleAddLink: PropTypes.func,
}

export default Header
