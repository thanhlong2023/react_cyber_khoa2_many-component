import React, { Component } from 'react'
import Parent from './Parent'
import DanhSachSanPham from '../Props/CallBackFuntion/DanhSachSanPham'

export default class Demo extends Component {
    refParent = React.createRef();
    changeTitle = () => {
        this.refParent.current.changeTitle();
    }
    render() {
        return (
            <div>

                <Parent ref={this.refParent}>
                    <DanhSachSanPham />
                </Parent>
                <button onClick={this.changeTitle}>Change title</button>
            </div>
        )
    }
}
