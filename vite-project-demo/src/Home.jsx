import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import { useSelector } from 'react-redux'

const Home = () => {
  const usersData = useSelector((state)=> state.usersOrder);
  console.log(usersData);
  return (
    <div>
     <Burger/>
      
    </div>
  )
}

export default Home
