import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hien1Tin from './Hien1Tin';
import TXN from './TinXemNhieu';
import TinMoi from './TinMoi';
import HienChiTietTin from './HienChiTietTin';

var tin1 = {id:124, tieude:"Ban than va nguoi quen 1", mota:"Co su khac nhau giua viec"};
var tin2 = {id:125, tieude:"Ban than va nguoi quen 2", mota:"Co su khac nhau giua viec"};
var tin3 = {id:126, tieude:"Ban than va nguoi quen 3", mota:"Co su khac nhau giua viec"};
var tin4 = {id:127, tieude:"Ban than va nguoi quen 4", mota:"Co su khac nhau giua viec"};

var arrTXN = [
  {id:124, tieude:"Ban than va nguoi quen 1", mota:"Co su khac nhau giua viec"},
  {id:125, tieude:"Ban than va nguoi quen 2", mota:"Co su khac nhau giua viec"},
  {id:126, tieude:"Ban than va nguoi quen 3", mota:"Co su khac nhau giua viec"},
  {id:127, tieude:"Ban than va nguoi quen 4", mota:"Co su khac nhau giua viec"}
];

var arrTinMoi = [
  {id:124, tieude:"Ban than va nguoi quen 1", mota:"Co su khac nhau giua viec"},
  {id:125, tieude:"Ban than va nguoi quen 2", mota:"Co su khac nhau giua viec"},
  {id:126, tieude:"Ban than va nguoi quen 3", mota:"Co su khac nhau giua viec"},
  {id:127, tieude:"Ban than va nguoi quen 4", mota:"Co su khac nhau giua viec"},
  {id:128, tieude:"Ban than va nguoi quen 5", mota:"Co su khac nhau giua viec"},
  {id:129, tieude:"Ban than va nguoi quen 6", mota:"Co su khac nhau giua viec"}
];

const params = new URLSearchParams(document.location.search);
let id = params.get('id');
if(id==null) ReactDOM.render(<TinMoi dsTin={arrTinMoi}/>, document.querySelector('#tinmoi'))
else{
  var tin = arrTinMoi.find(function(tin, index){
    if(tin.id==id) return true;
  })
  ReactDOM.render(<HienChiTietTin tin={tin}/>, document.querySelector('#tinmoi'));
}

ReactDOM.render(<Hien1Tin tin={tin1}/>, document.querySelector('#col1'));
ReactDOM.render(<Hien1Tin tin={tin2}/>, document.querySelector('#col2'));
ReactDOM.render(<Hien1Tin tin={tin3}/>, document.querySelector('#col3'));
ReactDOM.render(<Hien1Tin tin={tin4}/>, document.querySelector('#col4'));
ReactDOM.render(<TXN dsTin={arrTXN}/>, document.querySelector('#txn'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
