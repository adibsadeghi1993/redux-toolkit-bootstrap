import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Layout/Header'

const Home = () => {
    return (
        <div>
            <Header/>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        </div>
    )
}

export default Home
