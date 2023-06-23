import React from 'react'

function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  function handleFilter(category){
    setCategory(category);
  } 
 
  return (
    <div className='flex justify-center py-4 gap-10 bg-emerald-600 text-xl font-mono text-white border'>
        {filterData.map(filterDataBtn=>{
            return <button className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === filterDataBtn.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `} key={filterDataBtn.id} onClick={()=>handleFilter(filterDataBtn.title)}>{filterDataBtn.title}</button>
        })}
    </div>
  )
}

export default Filter