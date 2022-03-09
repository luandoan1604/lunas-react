import React from "react";

class MotSach extends React.Component{
    constructor(props){
        super();
        this.state = {thich:false}
        console.log("motsach constructor");
    }
    thichSach=()=>{
        this.setState({thich:true})
    }
    componentDidMount(){
        console.log("motsach didmount");
    }
    shouldComponentUpdate(){
        console.log("motsach shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(){
        console.log("motsach componentDidUpdate");
    }
    render(){
        console.log("motsach render");
        const kq = 
        <div className={this.state.thich? "motsach thich":"motsach"}>
            <h3>{this.props.sach.tensach}</h3>
            <img src={this.props.sach.urlHinh}/>
            <p className="gia">{this.props.sach.gia}</p>
            <button className="btnthich" type="button" onClick={this.thichSach}>thich</button>
            <button onClick={()=>this.props.chonSach(this.props.sach.id)} className="btnchonmua" type="button">chon mua</button>
        </div>
        return(kq);
    }
}

export default MotSach;