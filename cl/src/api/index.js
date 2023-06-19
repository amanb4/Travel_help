import React from 'react'
import axios from 'axios' ;

export const getPlacesData = async ( type , sw , ne) => {
   try{
    
    const { data : { data } } = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary` , {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '07cc84292fmsh031aba7eba220c3p1d8753jsn6a3254e8339d',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    }) ;
    return data ;

   } catch( error ){

    console.log( error) ;


   }

}