/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import './hotstar.css'

const Slide = ({ content, title }) => (
    <div className="advertise-category">
        <div className="description">
            <h2> {title} </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <img src={require(content+"")} alt="" srcset=""/>
      </div>
)

export default Slide