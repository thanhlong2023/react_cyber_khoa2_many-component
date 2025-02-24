import React from 'react'

export default function ChildFunc(props) {
    let { name, src, size } = props.productItem

    const renderSize = () => {
        return size.map((item, index) => {
            return <button key={index}>{item}</button>
        })
    }
    return (
        <div className="card text-white bg-primary" style={{ width: "18rem" }}>
            <img className="card-img-top" src={src} alt />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                {renderSize()}
                <p>Function Component</p>
            </div>


            <button onClick={() => { props.showAlert(name) }}>Detail</button>
        </div>
    )
}
