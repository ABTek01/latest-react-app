import React from 'react'
//use default props to center text
export default function Title(props) {
    const headingStyle = {
        color:'yellow',
        textAlign:props.centeredText
    }
    return (
        <div>
            <h1 style={headingStyle}>
                Title
            </h1>
        </div>
    )
}
Title.defaultProps = {
    centeredText:''
}




