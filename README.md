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

# Command to run json-server 
npm i -g json-server 
From terminal go to location of JSON file & run below commands
json-server --watch db2.json --port 6700