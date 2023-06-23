import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData,apiUrl} from "./data";
import { useState, useEffect } from "react";
import {toast} from "react-toastify";
import Loading from "./components/Loading"


const App = () => {
  const [courses, setcourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[category, setCategory] =useState(filterData[0].title);
  async function fetchData(){
    setLoading(true)
    try {
      let responce = await fetch(apiUrl);
      let result = await responce.json();
      setcourses(result.data);
    } catch (error) {
      toast.error("Failed to Fetch");
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return(
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
        <div>
          <Navbar />
        </div>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div>
          {loading? (<Loading/>):(<Cards courses={courses} category={category}/>)}
        </div>
    </div>
  );
};

export default App;
