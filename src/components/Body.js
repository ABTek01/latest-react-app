import React from 'react'
function Body(props) {
//use default props to center text
//instead of inline styling
    return (
        <div style={{color:'black'}}>
            <h1 style={{color:'red'}}>
                Component Uses Default Props
            </h1>
        </div>
    )
}
export default Body
