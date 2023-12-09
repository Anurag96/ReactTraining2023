import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Counter3 from './component/Counter3';
import Counter4 from './component/Counter4';
import Counter5 from './component/Counter5';
import Counter6 from './component/Counter6';
import ComponentA from './useContextComponent/ComponentA';
import React,{useEffect,useState} from 'react';
import ComponentX from './useContextComponent/ComponentX';
import { createContext } from 'react';
export const OrganizationContext = createContext()
export const CourseContext = createContext()

function App() {
const [context,setContext] = useState("defaukt context value")
  return (
    <>
      {/* <Counter/>
      <Counter3/>
      <Counter4/>
      <Counter5/> */}
      {/* <Counter6/> */}
      <OrganizationContext.Provider value={"edureka"}>
        <CourseContext.Provider value={[context,setContext]}>
        <ComponentA/>
      <ComponentX/>
        </CourseContext.Provider>
      </OrganizationContext.Provider>

    </>
  );
}

export default App;
