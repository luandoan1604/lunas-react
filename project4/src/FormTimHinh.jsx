import React from "react";
import ReactDOM from 'react-dom';

export default class FormTimHinh extends React.Component{
    constructor(){
        super();
        this.state = {images:[]};
        this.tukhoa = React.createRef();
    }
    timHinh=(e)=>{
        let tk = this.tukhoa.current.value;
        let page = 1;
        let per_page = 20;
        let yourKey = "1eMqZ2ONFfZclWLg-gwtqYQFD74W3MdhUI-feJdNpV0";
        let url = "https://api.unsplash.com/search/photos";
        let fullUrl = `${url}?query=${tk}&page=${page}&per_page=${per_page}&client_id=${yourKey}`;
        fetch(fullUrl)
        .then(function(res){
            if(!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then(function(data){
            let pictures = data.results;
            console.log(pictures);
            let listPic = [];
            pictures.forEach(function(p, index){
                console.log(p.urls.regular);
                listPic.push(<img src={p.urls.regular} height="150"/>)
            });
            ReactDOM.render(listPic, document.querySelector('#kqSearchPic'));
        })
        .catch(function(error){
            console.log('co loi ne: \n', error);
        })
    }
    render(){
        const kq =
        <div>
            <form className="col-9 m-auto">
                <input ref={this.tukhoa} className="form-control"/>
                <button onClick={this.timHinh} type="button" className="btn btn-dark">tim hinh</button>
            </form>
            <div id="kqSearchPic"/>
        </div>
        return(kq);
    }
}