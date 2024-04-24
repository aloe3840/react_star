import { useState } from "react"
import {FaStar} from "react-icons/fa"
import './style.css' 

export default function StarRating({starCount=5}){
    let [score, setScore] = useState(0)  //별점
    let [hover, sethover] = useState(0)  //마우스위치

    function handleMouseClick(element){
        console.log(element)
        setScore(element)
    }

    function handleMouseOn(element){
        sethover(element)
    }

    function handleMouseLeave(){
        sethover(score)
    }

    let stars = []

    for(let i=0; i<starCount; i++){
        stars.push(i+1) //[1, 2, 3, 4, 5]
    }

    return(
        <>
            {
              stars.map((e, idx)=>{
                //e => 1, 2, 3, 4, 5
                 //idx => 0, 1, 2, 3, 4

                 return(
                    <FaStar size={40} key={e} className={(e) <= (score || hover) ? 'active': 'inActive'}
                        onClick={()=>{handleMouseClick(e)}}
                        onMouseMove={()=>{handleMouseOn(e)}}
                        onMouseLeave={()=>{handleMouseLeave()}}
                    ></FaStar>
                 )
              })
            }
        </>
    )
}