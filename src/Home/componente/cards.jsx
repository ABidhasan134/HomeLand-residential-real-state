import React, { useContext } from 'react'
import { AuthContext } from '../../context/authprovider'
import CardsDitails from './cardsItems'

const Card = () => {
    const{cardInfo}=useContext(AuthContext)
    // console.log(cardInfo);
  return (
    <div className="grid grid-cols-3 border-2 border-red-500 gap-6">
        {
            cardInfo.map((item)=>{
                return <CardsDitails land={item} key={item.estate_id}></CardsDitails>
            })
        }
    </div>
  )
}

export default Card
