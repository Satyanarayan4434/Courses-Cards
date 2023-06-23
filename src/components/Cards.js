import React from 'react';
import Card from "./Card";
import { useState } from 'react';

function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  

  const [likedCourses, setLikedCourses] = useState([]);
  let allCourses = [];
  function getCourses(){
   if(category === 'All'){
    Object.values(courses).forEach(array =>{
      array.forEach(courseData =>{
        allCourses.push(courseData);
      })
    })
    return allCourses;
   }
   else{
     return courses[category];
   }
  }
  return (
    
    
      <div className='flex flex-wrap gap-9 mt-6 w-[980px] mx-auto'>
        {
          getCourses().map((course)=>{
            return <Card key={course.id} course={course}  likedCourses={likedCourses} 
            setLikedCourses={setLikedCourses}/>
          })
        }
       
    </div>
   
  )
}

export default Cards