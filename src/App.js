// state
import { useState } from 'react'

// router
import { BrowserRouter as Router, Route } from 'react-router-dom'

// styles
import './scss/link-keeper.scss'
import './scss/button.scss'

// components
import Header from './components/Header'
import Links from './components/Links'
import Form from './components/Form'
import Footer from './components/Footer'
import Notice from './components/Notice'
import About from './views/About'

const App = () => {
    const [links, setLinks] = useState([
        {
            title: 'Link-keeper',
            link: 'https://github.com/demon059/link-keeper',
            desc: 'My first app on React.js',
            id: 1,
        },
        {
            title: 'mylnikovdmitriy.ru',
            link: 'http://mylnikovdmitriy.ru/',
            desc: 'Site one developer ',
            id: 2,
        },
        {
            title: 'shico.fun',
            link: 'https://shico.fun/',
            desc:
                'This is a platform for online events for example online meetings or online quiz or whatever.',
            id: 3,
        },
        {
            title: 'CV one developer',
            link:
                'https://perm.hh.ru/resume/d8c99ed5ff08b3a40c0039ed1f6c3669546171',
            desc: '',
            id: 4,
        },
    ])
    const [enableFormAddLink, setEnableFormAddLink] = useState(false)
    const [enableNotificate, setEnableNotificate] = useState(false)
    const [msgNotificate, setMsgNotificate] = useState('')
    const [classNotificate, setClassNotificate] = useState('')

    // useEffect(() => {
    //     const getLinks = async () => {
    //         const linksFromServer = await fetchLinks()
    //         setLinks(linksFromServer)
    //     }
    //     getLinks()
    // }, [])

    // Fetch links
    // const fetchLinks = async () => {
    //     const res = await fetch('http://localhost:5000/links')
    //     const data = await res.json()

    //     return data
    // }

    // Delete link
    const handleDeleteLink = async (id) => {
        const conf = window.confirm('Do you really want to remove the link?')
        if (conf) {
            // await fetch(`http://localhost:5000/links/${id}`, {
            //     method: 'DELETE',
            // })
            setLinks(links.filter((item) => item.id !== id))
        }
    }

    // Add link
    const handleAddLink = (link) => {
        setEnableNotificate(false)
        // const res = await fetch('http://localhost:5000/links', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(link),
        // })

        // const data = await res.json()

        setLinks([...links, link])

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
        <Router>
            <div className='page-container'>
                <div className='link-keeper__container'>
                    <Header
                        title='Link keeper'
                        enableFormAddLink={enableFormAddLink}
                        onAdd={() => setEnableFormAddLink(!enableFormAddLink)}
                    />

                    <Route
                        path='/link-keeper'
                        exact
                        render={(props) => (
                            <>
                                {!enableFormAddLink && (
                                    <Links
                                        links={links}
                                        handleDeleteLink={handleDeleteLink}
                                        handleCopyLink={handleOnLinkForCopy}
                                        msgNotificate={msgNotificate}
                                    />
                                )}
                                {enableFormAddLink && (
                                    <Form addLink={handleAddLink} />
                                )}
                                <Notice
                                    msg={msgNotificate}
                                    classNotice={classNotificate}
                                    enableNotificate={enableNotificate}
                                />
                                <Footer />
                            </>
                        )}
                    />
                    <Route path='/about' component={About} />
                </div>
            </div>
        </Router>
    )
}

export default App
