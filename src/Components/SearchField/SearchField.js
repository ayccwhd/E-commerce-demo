import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile-v2';
import { Link, Route, BrowserRouter, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

//高阶组件封装类组件使用router v6
export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child {...props} navigate={navigate} location={location} />;
    }
}

class SearchField extends Component {
    //受控组件方式获取ref
    state = {
        value: '',
    };
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    onFocus = () => {
        console.log('onFocus');
    }
    onChange = (value) => {
        this.setState({ value });
        //console.log(value);
    };
    onBlur = () => {
        console.log("onBlur");
    }
    onClear = (value) => {
        console.log(value, 'onClear')
    }
    onSubmit = (value) => {
        //获取到用户要搜索的关键词
        console.log(value, 'onSubmit');
        //页面跳转
        this.props.navigate("/searchresult", { state: value });
        //提交查找请求
        // axios.post('/searchfield', {
        //     data: {
        //         keyword: value
        //     }
        // }).then(res => {
        //     console.log(res.data.data.goodsList);
        // })
    }
    onCancel = () => {
        console.log('onCancel');
    }
    searchBarhandle() {
        const inpVal = this.input.value;
        console.log(inpVal);
    }
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }

    render() {
        return (
            <div>
                <SearchBar
                    //ref={input => this.input = input}
                    placeholder="请输入您想要查找的商品"
                    //onFocus={() => { this.searchBarhandle() }}
                    //onFocus={this.search.bind(this)}
                    ref={ref => this.autoFocusInst = ref}
                    className="searchbar"
                    value={this.state.value}
                    //placeholder="Search"
                    onSubmit={this.onSubmit}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onCancel={this.onCancel}
                    showCancelButton
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

export default withRouter(SearchField);
















// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
// import { SearchBar } from 'antd-mobile';
// import { searchSuggest } from '../api/index'
// import { WingBlank } from 'antd-mobile'
// import '../SearchField/SearchField.css'
// export default class SearchField extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             suggestData: [],
//             height: document.documentElement.clientHeight
//         }
//     }
//     handleSearch = value => {
//         this.props.history.push('/searchgoods/query=' + value)

//     }
//     // 搜索建议
//     handleSearchSuggest = value => {
//         searchSuggest(value).then(res => {
//             const { meta: { status }, message: { goods } } = res.data
//             if (status === 200) {
//                 // 只获取前十条数据
//                 this.setState({
//                     suggestData: goods.slice(0, 10)
//                 })
//             }
//         })
//     }
//     // 点击搜索建议跳转到商品列表页面    
//     handleSearchSimilar = cid => {
//         this.props.history.push('/searchgoods/cid=' + cid)
//     }
//     UNSAFE_componentDidMount() {
//         // 自动聚焦
//         this.autoFocusInst.focus();
//     }
//     render() {
//         return (
//             <div style={{ height: '100%', backgroundColor: '#efeff4' }}>
//                 <div style={{ display: 'flex' }}>
//                     <i className="iconfont icon-arrow-left"
//                         style={{ width: 30, alignSelf: 'center', padding: '0 10px' }}
//                         onClick={() => this.props.history.push('/')}
//                     ></i>
//                     <SearchBar placeholder="请输入商品"
//                         style={{ flex: 1 }}
//                         onCancel={v => this.handleSearch(v)}
//                         onSubmit={v => this.handleSearch(v)}
//                         ref={ref => this.autoFocusInst = ref}
//                         cancelText="搜索"
//                         onChange={v => {
//                             // 中文输入法下输入时会出现先英文，如n'i'h'a'o => 你好，中间会有'的标点，
//                             // 通过判断是否带有此符号来判断是否继续获取搜索建议
//                             if (v.indexOf("'") === -1) {
//                                 this.handleSearchSuggest(v)
//                             }
//                         }}
//                     />
//                 </div>
//                 <WingBlank>
//                     <ul className="suggest-list">
//                         {this.state.suggestData.map(v => (
//                             // 点击搜索建议跳转到商品列表页面
//                             <li key={v.goods_id} onClick={() => this.handleSearchSimilar(v.cat_id)}>
//                                 <span className="left">{v.goods_name.slice(0, 20)}...</span>
//                                 <span className="right">↖</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </WingBlank>
//             </div>
//         )
//     }
// }

//export default withRouter(SearchField)