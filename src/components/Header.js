import PropTypes from 'prop-types'

// other
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Header = ({ title, onAdd, enableFormAddLink }) => {
    let className = 'btn add icon'
    if (enableFormAddLink) {
        className += ' red'
    } else {
        className += ' orange'
    }

    return (
        <header>
            <div className='link-keeper__header'>
                <h1>
                    <FontAwesomeIcon icon={faLink} /> {title}
                    <small>Just click on white box for copy</small>
                </h1>
                <button className={className} onClick={onAdd}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                    {enableFormAddLink ? 'Close' : 'Add'}
                </button>
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
