import React from "react";

class HienChiTietTin extends React.Component{
    constructor(){
        super();
        this.state = {hienYK:false}
    }
    doiState=()=>{
        this.setState({hienYK:true})
    }
    render(){
        return(
            <div className="tin">
                <p>{this.props.tin.tieude}</p>
                <p>{this.props.tin.mota}</p>
                <div dangerouslySetInnerHTML={{__html: this.props.tin.noidung}}></div>
                <button type="button" onClick={this.doiState}>Them y kien</button>
                <hr></hr>
                {(this.state.hienYK==true)? "FormYKien":""}
            </div>
        )
    }
}

export default HienChiTietTin;