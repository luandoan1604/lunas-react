function Hien1Tin(props){
    return(
        <div className="hien1tin">
            <h3><a href="#">{props.tin.tieude}</a></h3>
            <p>{props.tin.mota}</p>
        </div>
    )
}

export default Hien1Tin;