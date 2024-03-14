import { useState } from 'react'
import './App.css'
import DATA from './pizza.json'

function App() {

  return (
    <>
      <section className='flex flex-wrap'>
        {DATA.pizzas.map((pizza, i) => {
          return (
            <div>
            <h1>{pizza.nom} </h1>
            <div>
              <img src={pizza.image} alt="" />
            </div>
            <p>{pizza.ingredient} </p>
            <p>{pizza.prix} </p>
          </div>
          )
        })}
      </section>
    </>
  )
}

export default App
