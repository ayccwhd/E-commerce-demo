import React, { Component } from 'react'
import {Carousel} from 'antd'

export default class CarouselPage extends Component {

    render() {
        const {imgs}=this.props
        return (
            <Carousel autoplay>
                <div className="carousel-img">
                    {imgs.map((item,index) => (
                        <img alt="" src={item} key={index}></img>
                    ))}
                </div>
            </Carousel>
        )
    }
}
