import React from "react"
import Header from "../components/header"
import Synth from "../components/Synth"
import PluckSynth from "../components/PluckSynth"
import { Link } from "gatsby"
import * as Tone from 'tone'



const Home = () => {

  return(
    <>
    <Header/>
    <Synth/>
    <PluckSynth/>
    </>
    )
   
 
}

export default Home
