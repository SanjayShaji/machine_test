import React, { useState } from 'react'
import Header from '../components/Header'
import Category from '../components/Categories'

function HomePage() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <div>
        <Header cartCount= {cartCount}/>
        <Category setCartCount= {setCartCount}/>
    </div>
  )
}

export default HomePage
