import React, { useState } from 'react'

export const ErrorPage = () => {
    const [error ,setError] = useState("")
       const errou  =() => {
         if(error === true ) {
          setError(error)
         }
       }

    return (
    <div>
        <h1>Sentimos muito se você está vendo esta  página </h1>
            <p>Significa que deu erro {errou.message} </p>
    </div>
  )
}
