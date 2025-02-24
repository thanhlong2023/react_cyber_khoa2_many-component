import React, { Component } from 'react'
import dataPhone from '../../Data/dataPhone.json'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
    mangSanPham = dataPhone;
    state = {
        sanPhamChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        }
    }
    renderSanPham = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return (<div className='col-4' key={index}>
                <SanPham sanPham={sanPham} xemChiTiet={this.xemChiTiet} />
            </div>)
        })
    }
    xemChiTiet = (sanPham) => {
        this.setState({
            sanPhamChiTiet: sanPham
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <h3 className="text-center display-4">
                    Danh Sách Sản Phẩm
                </h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3>{this.state.sanPhamChiTiet.tenSP}</h3>
                        <img src={this.state.sanPhamChiTiet.hinhAnh} alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{this.state.sanPhamChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{this.state.sanPhamChiTiet.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
