// components
import Header from './components/Header'
import Links from './components/Links'
import Form from './components/Form'
import Footer from './components/Footer'
import Notice from './components/Notice'

// state
import { useState, useEffect } from 'react'

// other
import './scss/link-keeper.scss'
import './scss/button.scss'

const App = () => {
    const [links, setLinks] = useState([])
    const [enableFormAddLink, setEnableFormAddLink] = useState(false)
    const [enableNotificate, setEnableNotificate] = useState(false)
    const [msgNotificate, setMsgNotificate] = useState('')
    const [classNotificate, setClassNotificate] = useState('')

    useEffect(() => {
        const getLinks = async () => {
            const linksFromServer = await fetchLinks()
            setLinks(linksFromServer)
        }
        getLinks()
    }, [])

    // Fetch links
    const fetchLinks = async () => {
        const res = await fetch('http://localhost:5000/links')
        const data = await res.json()

        return data
    }

    // Delete link
    const handleDeleteLink = async (id) => {
        const conf = window.confirm('Do you really want to remove the link?')
        if (conf) {
            await fetch(`http://localhost:5000/links/${id}`, {
                method: 'DELETE',
            })
            setLinks(links.filter((item) => item.id !== id))
        }
    }

    // Add link
    const handleAddLink = async (link) => {
        setEnableNotificate(false)
        const res = await fetch('http://localhost:5000/links', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(link),
        })

        const data = await res.json()

        setLinks([...links, data])

        setClassNotificate('rose')
        setMsgNotificate('Link added!')
        setEnableNotificate(true)
        setTimeout(() => {
            setEnableNotificate(false)
        }, 1000)
    }

    // Copy link
    const handleOnLinkForCopy = (link) => {
        setEnableNotificate(false)
        navigator.clipboard.writeText(link).then(() => {
            setClassNotificate('')
            setMsgNotificate('Link copied!')
            setEnableNotificate(true)
            setTimeout(() => {
                setEnableNotificate(false)
            }, 1000)
        })
    }

    return (
        <div className='page-container'>
            <div className='link-keeper__container'>
                <Header
                    title='Link keeper'
                    enableFormAddLink={enableFormAddLink}
                    onAdd={() => setEnableFormAddLink(!enableFormAddLink)}
                />
                {!enableFormAddLink && (
                    <Links
                        links={links}
                        handleDeleteLink={handleDeleteLink}
                        handleCopyLink={handleOnLinkForCopy}
                        msgNotificate={msgNotificate}
                    />
                )}
                {enableFormAddLink && <Form addLink={handleAddLink} />}
                <Footer />
                <Notice
                    msg={msgNotificate}
                    classNotice={classNotificate}
                    enableNotificate={enableNotificate}
                />
            </div>
        </div>
    )
}

export default App
