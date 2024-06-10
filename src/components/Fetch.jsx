import React, { useEffect, useState } from "react";
import Cards from './Cards.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Loading from './Loading.jsx'

const Fetch = (props) => {
  let url = props.apiUrl;
  let category = props.category;
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {

    try {
      let response = await fetch(url);
      let output = await response.json();
      setCourses(output.data);
    }
    catch (err) {
      toast.warning('Something went wrong');
      return;
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cards">
      {loading ? (<Loading/>) : (<Cards courses = {courses} category = {category}></Cards>)}
    </div>
  );
};

export default Fetch;
