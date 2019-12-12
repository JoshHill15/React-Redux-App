import React from 'react';
import './App.css';
import { connect } from "react-redux"
import Loader from "react-loader-spinner"
import { getFoxes } from "./actions/action"

function App(props) {
  console.log("app props", props)
  return (
    <div className="App">
      <h1>Fox Pictures!</h1>
       {!props.foxes && !props.isFetching && <p> Get some pics of Foxes! </p> }
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      <button onClick = {props.getFoxes}>More Foxes!</button><br/>
      {props.foxes && <img className = "pic" src = {props.foxes.image} />}
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
