import React from 'react'
import { useState, useEffect } from "react";


export  const   useFetch   = () => {
    const url = "http://localhost:3000/Pacotes" 
    const [get, useGet] = useState()

        async function rquisicaoGet() {
              const req = fetch(url)
                const res = await req.json()
                    console.log(res)  
        }
        rquisicaoGet()
    return rquisicaoGet()
}



