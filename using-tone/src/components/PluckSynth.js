import React from 'react'
import * as Tone from 'tone'

const plucky = new Tone.PluckSynth().toDestination()
plucky.triggerAttack("C4", "+0.5")
plucky.triggerAttack("C3", "+1")
plucky.triggerAttack("C2", "+1.5")
plucky.triggerAttack("C1", "+2")






const PluckSynth = props => {
    return (
        <div>

            <button onClick={plucky}></button>
            
        </div>
    )
}



export default PluckSynth
