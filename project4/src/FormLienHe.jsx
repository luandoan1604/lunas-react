import React from "react";

export default class FormLienHe extends React.Component{
    constructor(){
        super();
        this.hoten = React.createRef();
        this.email = React.createRef();
        this.phongban = React.createRef();
        this.noidung = React.createRef();
    }
    layDuLieu = (e) =>{
        console.log(this.hoten.current.value);
        console.log(this.email.current.value);
        console.log(this.phongban.current.value);
        console.log(this.noidung.current.value);
        e.preventDefault();
    }
    render(){
        const kq = 
        <form className="col-10 m-auto" onSubmit={this.layDuLieu}>
            <div className="mb-3">
                <label>ho ten</label>
                <input id="hoten" className="form-control" ref={this.hoten}/>
            </div>
            <div className="mb-3">
                <label>email</label>
                <input id="email" className="form-control" ref={this.email}/>
            </div>
            <div className="mb-3">
                <label>phong ban</label>
                <select id="phong" className="form-control" ref={this.phongban}>
                    <option value="0">chon phong ban</option>
                    <option value="1">phong ky thuat</option>
                    <option value="2">phong kinh doanh</option>
                </select>
            </div>
            <div className="mb-3">
                <label>noi dung lien he</label>
                <textarea id="noidung" className="form-control" ref={this.noidung}/>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn">gui lien he</button>
            </div>
        </form>
        return(kq);
    }
}