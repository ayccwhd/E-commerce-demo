import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Button} from 'antd'

export default class ButtonPage extends Component {
    // constructor (props) {
    //     super(props)
    //     this.debounce = this.debounce.bind(this)
    //     this.throttle = this.throttle.bind(this)
    // }
    static defaultProps = {
        children: "Button",
        type: "primary",
        size: "default",
        disabled: false,
        circle: true,
        icon: "",
    };
    static propTypes = {
        children: PropTypes.string,
        type: PropTypes.oneOf(["primary", "danger", "normal"]),
        size: PropTypes.oneOf(["default", "small", "large"]),
        disabled: PropTypes.bool,
        circle: PropTypes.bool,
        icon: PropTypes.string,
    };
    // debounce已达到预期效果！
    debounce (fun,time) {
        if(fun==="") return
        let timer = null
        return () => {
            if(timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(fun.apply(this),time)
        }
    }
    // throttle已达到预期效果！
    throttle (fun,time ) {
        let timer = null
        return () => {
            if(timer) return
            timer = setTimeout(() => {
                fun.apply(this)
                timer = null
            },time)
        }
    }
    click=()=>{
        console.log(this.props.onClick)
        this.debounce(this.props.onClick?this.props.onClick:"",1000)
    }

    render() {
        const { type, size,children} = this.props;
        return (
        <div>
            <Button
                type={type}
                size={size}
                shape="round"
                onClick={this.debounce(this.props.onClick?this.props.onClick:"",1000)}
                // onClick={this.click.bind(this)}
            >{children}</Button>
        </div>
        )
    }
}

