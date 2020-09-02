import React from 'react';
import Button from './Button.js';

function Demo()
{
   const properties={
    	size:{h:"40", w:"75"},
    	color:{txt:"aqua", bg:"midnightBlue"},
    	border:{w:"2", style:"solid", color:"aqua", r:"10"},
    	margin:{l:"20", t:"20"},
		content:{txt:'hello', size:'1', space:'1'},
    }

    return(
    	<Button ui={properties} />
    );
}

export default Demo;
