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

# Fetch method

```
 const [dataApi, setDataApi] = useState([]);
 useEffect(() => {
    fetch(`http://localhost:3001/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => setDataApi(data))
      .catch((error) => console.error('Error fetching enquiries:', error));
  }, [courseId]);
```

# List of Product MOck JSON
- https://dummyjson.com/products
- https://fakestoreapi.com/products
- https://sampleapis.com/api-list/movies  (https://www.flixster.com/)
- https://sampleapis.com/api-list (25 API Sample)
- https://dummy.restapiexample.com/# (Employees)

# Object
- When return type JSON data is object, it can't be rendered straight away.
- Render an Object in React , add Object.keys() to get Key & Object.values() to get Value

# Bootstrap
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

```
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>
```