# ReactTraining2023

# Redux drivers
install : npm install redux
driver : npm install react-redux
latest driver : npm install @reduxjs/toolkit


# React Life Cycle

1. constructor(props){
        super(props);
        this.state={
            instrument:'Guitar'
        }
    }

2. static getDerivedStateFromProps(props){
    return {instrument:props.temp}
  }

3. getSnapshotBeforeUpdate(prevProps,prevState){
console.log('Before Update : '+prevState.instrument)
return null
}

4. componentDidUpdate(){

  console.log('Updated Value : '+this.state.instrument)
}

5. houldComponentUpdate(){
    return true;
}
6. componentDidMount(){
    setTimeout(() => {
        this.setState({instrument:"Drums"})
    }, 5000);
}

7. render(){return()}
