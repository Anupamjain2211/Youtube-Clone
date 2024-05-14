import React from 'react'

const Buttonlist = () => {
   const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming"]
  return (
    <div className='py-4'>
        {buttonList.map((item,index)=>{
            return <button key={index} className='bg-gray-100 px-4 mx-2 font-medium py-1 rounded-lg'>{item}</button>

        })}
    </div>
  )
}

export default Buttonlist
