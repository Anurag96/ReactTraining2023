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
- npm i -g json-server 
- From terminal go to location of JSON file & run below commands
- json-server --watch db2.json --port 6700

# Redux
1. View 
2. Action 
3. Store 
4. Reducer
- npm i react-redux
- npm i redux
- npm i @reduxjs/toolkit

View is the UI, from where user will perform action, then perform Action is dipatcher by Reducer.
Store is one place where all Reducer are collected. 


# Axois API

```
   const [data, setData] = useState([]);
   const fetchData = async () => {
       // Actual API Call
        try {
            const baseURL = process.env.XYZ_TABLE_API;
            const response = await axios.get(`${baseURL}`)
                .then(response => response.data);
            setData(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        // Mock the Data
        // setData(mockRes.data);
    };

        useEffect(() => {
        fetchData();
    }, []);
```

# List of Product MOck JSON
- https://dummyjson.com/products
- https://fakestoreapi.com/products