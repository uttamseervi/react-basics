import React from 'react'
//HERE THE STORY OF PROPS COME WHEN I REPLICATE THE CARDS THE CONTENT OF ALL THE CARDS WILL BE SAME TO CHANGE IT ACCORDING TO THE USER PROPS COME INTO THE PICTURE

// INITIALLY PROPS WILL BE EMPTY OBJECT BUT WE CAN ADD CONTENT TO IT SHOW IN APP.JS
// function Card(props) //instead of doing this and accessing by props.userName etc i can directly give as below
function Card({userName,btnText}) 
{
    // let myObj  = {
    //     userName:"Uttam Seervi",
    //     age:20,
    //     isLoggedin:true
    //   }
      console.log(userName)
    
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
    <img 
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{userName}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        {/* {btnText} if i get btnText as a prop then it is okay if not check below */}
        {btnText || "visit me ->"}
      </button>
    </div>
  </div>
  )
}

export default Card
