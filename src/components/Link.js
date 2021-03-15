import PropTypes from 'prop-types'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// styles
import '../scss/components/Link.scss'

const Link = ({ link, handleDeleteLink, handleCopyLink }) => {
    const onClick = (e, id) => {
        e.stopPropagation()
        handleDeleteLink(id)
    }

    return (
        <div
            className='link-keeper__list-item'
            onClick={() => handleCopyLink(link.link)}
        >
            <div className='link-keeper__list-item-header'>
                <div className='link-keeper__list-item-title'>
                    {link.title}
                    <small>{link.link}</small>
                </div>
                <div className='link-keeper__list-item-actions'>
                    <a href={link.link} target='_blank'>
                        <button className='btn circle orange-200'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </a>
                    <button
                        className='btn circle orange-200'
                        onClick={(e) => onClick(e, link.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            <div className='link-keeper__list-item-desc'>{link.desc}</div>
        </div>
    )
}

Link.propTypes = {
    link: PropTypes.object,
    handleDeleteLink: PropTypes.func,
    copyLink: PropTypes.func,
}

export default Link
