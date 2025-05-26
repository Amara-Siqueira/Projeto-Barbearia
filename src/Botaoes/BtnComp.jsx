import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BtnComp = ({ name, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };
  return <button onClick={handleClick}>{name}</button>;
};
  export const BtnConfig =  ({handlerConfig}) => {
         console.log("fui clicado ")
  
        return <button onClick={handlerConfig} >Editar</button>
        }
