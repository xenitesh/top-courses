import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

function App() 
{
  const [courses, setCourses] = useState(null);
  const [loading, setloading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData()
  {
    setloading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } 
    catch (error) {
        toast.error("Network Issue");
    }
    setloading(false);
  }

  useEffect( () => {
    fetchData();
  }, [])


  return (
    
    <div className="flex flex-col min-h-screen bg-gray-500">

      <div>
        <Navbar/>
      </div>

      <div>

        <div>
          <Filter 
          filterData = {filterData}
          category={category}
          setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}/>)
          }
        </div>

      </div>

    </div>

  );
}

export default App;
