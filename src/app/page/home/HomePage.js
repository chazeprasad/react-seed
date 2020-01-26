import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = props => {
    const name = useSelector(state => state.home.name)

    console.log('name')
    console.log(name)
    
    return (
        <div>
            <div>{name}</div>
        </div>
    )
}

export default HomePage
