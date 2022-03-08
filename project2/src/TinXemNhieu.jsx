import Hien1Tin from "./Hien1Tin";

function TinXemNhieu(props){
    return(
        props.dsTin.map((tin)=>
            <Hien1Tin tin={tin}/>
        )
    )
}

export default TinXemNhieu;