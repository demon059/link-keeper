import PropTypes from 'prop-types'

// state
import { useState } from 'react'

// styles
import '../scss/components/Form.scss'

const Form = ({ addLink }) => {
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [desc, setDesc] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!link) {
            alert('Please add a link')
            return
        }

        addLink({ title, link, desc })

        setTitle('')
        setLink('')
        setDesc('')
    }

    return (
        <div className='link-keeper__form'>
            <form onSubmit={onSubmit}>
                <div className='link-keeper__form-control'>
                    <label className='link-keeper__form-label'>
                        Link title
                    </label>
                    <input
                        type='text'
                        className='link-keeper__form-input'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='link-keeper__form-control'>
                    <label className='link-keeper__form-label'>Link</label>
                    <input
                        type='text'
                        className='link-keeper__form-input'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <div className='link-keeper__form-control'>
                    <label className='link-keeper__form-label'>
                        Description
                    </label>
                    <textarea
                        rows='3'
                        cols='45'
                        className='link-keeper__form-input'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className='link-keeper__form-control'>
                    <input
                        type='submit'
                        className='btn add orange'
                        value='Add'
                    />
                </div>
            </form>
        </div>
    )
}

Form.propTypes = {
    addLink: PropTypes.func,
}

export default Form
