import React from 'react'
import BuildControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'
const controls = [
    { Label: 'Salad', type: 'salad'},
    { Label: 'Bacon', type: 'bacon' },
    { Label: 'Cheese', type: 'cheese' },
    { Label: 'Meat', type: 'meat' },
]


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.Label} 
            label={ctrl.Label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/> 
        ))}
    </div>

);

export default buildControls;