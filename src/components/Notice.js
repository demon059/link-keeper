import PropTypes from 'prop-types'

// styles
import '../scss/components/Notice.scss'

const Notice = ({ msg, enableNotificate, classNotice }) => {
    let className = 'link-keeper__notification '
    if (classNotice) {
        className += classNotice
    }
    if (enableNotificate) {
        className += ' active'
    }

    return <div className={className}>{msg}</div>
}

Notice.propTypes = {
    msg: PropTypes.string,
    classNotice: PropTypes.string,
    enableNotificate: PropTypes.bool,
}

export default Notice
