import React from 'react';
import './App.css';
import { connect } from "react-redux"
import Loader from "react-loader-spinner"
import { getFoxes } from "./actions/action"
import styled from "styled-components"

const Button = styled.button`
background: aqua;
padding:.5% 1.5%;
box-shadow: 5px 10px 13px #888888;
margin-bottom: 2%;

  &:hover{
    color:aqua;
    background:black
  }
`
const Header = styled.h1`
  background: lightblue;
  color:white;
  box-shadow: 5px 10px 13px #888888;

`
const Img = styled.img`
  max-height: 400px;
  max-width: 400px;
  margin-top:3%;
  border:none;
  box-shadow: 5px 10px 13px #888888;

`
function App(props) {
  console.log("app props", props)
  return (
    <div className="App">
      <Header>Fox Pictures!</Header>
       {!props.foxes  && <p> Get some pics of Foxes! </p> }
      {!props.isFetching && <Button onClick = {props.getFoxes}>More Foxes!</Button>}
      <br/>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.foxes && <Img src = {props.foxes.image} />}
      {props.error && <p>{props.error}</p>}
    </div>
  );
}

function mapStateToProps(state){
  return {
    foxes: state.foxes,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getFoxes })(App);
