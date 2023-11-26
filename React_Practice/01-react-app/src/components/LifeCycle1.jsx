import React, { Component } from 'react'

export default class LifeCycle1 extends Component {

    constructor(props){
        super(props);
        this.state={
            instrument:'Guitar'
        }
    }

/*static getDerivedStateFromProps(props){
    return {instrument:props.temp}
}*/

getSnapshotBeforeUpdate(prevProps,prevState){
console.log('Before Update : '+prevState.instrument)
return null
}

componentDidUpdate(){

  console.log('Updated Value : '+this.state.instrument)
}

shouldComponentUpdate(){
    return true;
}
componentDidMount(){
    setTimeout(() => {
        this.setState({instrument:"Drums"})
    }, 5000);
}

  render() {
    return (
      <div>
        <h1>I know how to play {this.state.instrument}</h1>
        <h1>I know how to play {this.props.temp}</h1>
      </div>
    )
  }
}
