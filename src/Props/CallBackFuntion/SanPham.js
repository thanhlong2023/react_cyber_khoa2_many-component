import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let { hinhAnh, tenSP } = this.props.sanPham;
        let { sanPham } = this.props;
        return (
            <div className="car text-left">
                <img src={hinhAnh} alt={hinhAnh} style={{ width: "100%" }} />
                <div className="card-body">
                    <h4 className="card-title">
                        {tenSP}
                    </h4>
                    <button onClick={() => { this.props.xemChiTiet(sanPham) }} className='btn btn-success'>Xem Chi Tiết</button>
                </div>
            </div>
        )
    }
}
