import React from "react";

export default class HienGioHang extends React.Component{
    constructor(props){
        super(props);
        this.state = {caption: "San pham da chon"};
    }
    render(){
        let kq = [];
        this.props.sachDaChon.forEach(sach => {
            kq.push(
                <div key={sach.id} className="motsach">
                    <img src={sach.urlHinh} align="left" />
                    <p>{sach.tensach}</p>
                    <p>Gia: {sach.gia} VND</p>
                    <p><span>X</span></p>
                </div>
            );
        });
        const gh = 
        <div className="hiengiohang">
            <h2>{this.state.caption}</h2>
            {kq}
        </div>;
        return(gh);
    }
}