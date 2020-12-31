import React from 'react'
import * as Tone from 'tone'

const synth = new Tone.MonoSynth({
    oscillator: {
        type: "square"
    },
    envelope: {
        attack: 0.1
    } 
}).toDestination()
synth.triggerAttackRelease("C4", "8n")

const duoSynth = new Tone.DuoSynth().toDestination()
duoSynth.triggerAttackRelease("C4", "2n")

const Synth = props => {

    return (
        <div>
            <button>{synth}</button>
          
            
        </div>
    )
}



export default Synth
