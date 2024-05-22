import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import Booked from '../Booked/Booked'

function Header() {
    return (
        <header>
            <Navbar />
            <main className='position-relative'>
                <h1>Насладись прогулкой в горах <br />
                    с командой единомышленников</h1>
                <Booked />
            </main>
        </header>

    )
}

export default Header