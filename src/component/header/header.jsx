import React from 'react';
import { Link } from 'react-router-dom';
import './header-style.css';

export const Header = () => (
    <div className='header'>
        <div className= "options">
        <Link to='/friends' className='option'>
            Friends
        </Link>
        <Link to='/' className='option'>
            people
        </Link>
        </div>
    </div>
)