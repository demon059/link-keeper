import PropTypes from 'prop-types'

// components
import Link from './Link'

// styles
import '../scss/components/Links.scss'

const Links = ({ links, handleDeleteLink, handleCopyLink, msgNotificate }) => {
    return (
        <div className='link-keeper__list'>
            {links.length > 0 ? (
                <div className='link-keeper__list-outside'>
                    <div className='link-keeper__list-inside'>
                        {links.map((link) => (
                            <Link
                                link={link}
                                key={link.id}
                                handleDeleteLink={handleDeleteLink}
                                handleCopyLink={handleCopyLink}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className='link-keeper__list-empty'>No links :(</div>
            )}
        </div>
    )
}

Links.propTypes = {
    links: PropTypes.array,
    handleDeleteLink: PropTypes.func,
    handleCopyLink: PropTypes.func,
    msgNotificate: PropTypes.string,
}

export default Links
