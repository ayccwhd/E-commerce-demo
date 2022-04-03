import React from 'react';
import '../assets/css/order/subheader.css';

export default class SubHeader extends React.Component{
    constructor(props){
        super(props)

        this.handleClickarrow=this.handleClickarrow.bind(this)
    }

    handleClickarrow(){
        window.history.back()
    }

    render(){
        return(
            <div className={'sub-header'}>
                <div className='back' onClick={this.handleClickarrow}></div>
                <div className='title'>{this.props.title}</div>
                <div className='menu'></div>
            </div>
        );
    }
}
