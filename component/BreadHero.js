import React from 'react'
import Container from 'react-bootstrap/Container'

export default function BreadHero(props) {

    return (
        <div className={'breadcrumb_area full-w text-uppercase '}>
            <Container> 
                {props.linkhtml}
            </Container> 
        </div>
    )
}
