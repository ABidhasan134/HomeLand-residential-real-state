import React, { useContext } from 'react'
import { AuthContext } from '../../context/authprovider'
import CardsDitails from './cardsItems'

const Card = () => {
    const{cardInfo}=useContext(AuthContext)
    // console.log(cardInfo);
  return (
    <div className="mx-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
        {
            cardInfo.map((item)=>{
                return <CardsDitails land={item} key={item.estate_id}></CardsDitails>
            })
        }
    </div>
  )
}

export default Card
