import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class CrudInput extends React.Component {

    static defaultProps = {  /*  props의 디폴트 값 설정 */ }
    static propsTypes = {  /* props의 프로퍼티 타입 설정 */ }
    state = {

    }
    constructor(props) {
        super()
        // this 바인딩
        this.refUserName = React.createRef()
        this.refUserPower = React.createRef()

    }
    componentDidMount() {
        // 마운트 완료 후에  : 페이지 load 될 때 한번
    }
    componentDidUpdate(prevProps, prevState) {
        // 업데이트 완료 후에 : 여러번, state 가 변경될 때마다
    }
    componentWillUnmount() {
        // 언마운트 완료 후에 : 페이지 unload 될 때 한번
    }
    doIns = (event) => {
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        const newitem = {
            id: null,
            name: this.refUserName.current.value,
            power: Number(this.refUserPower.current.value)
        }

        this.props.doIns(newitem);
    }
    render() {
        return (
            <div>
                <h1>Creat Read Update Delete</h1>
                <div>
                    <label htmlFor="">Name : </label>
                    <input
                        type="text"
                        name="name"
                        ref={this.refUserName}
                    />
                </div>
                <div>
                    <label htmlFor="">Power : </label>
                    <input
                        type="text"
                        name="power"
                        ref={this.refUserPower}
                    />
                </div>
                <button onClick={this.doIns}>Add</button>
                <hr />
            </div>
        )
    }
}

export default CrudInput