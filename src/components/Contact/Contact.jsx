


export default function Contact(){
    return(<>
        <div className=" text-[#2c3e50] p-12">
       

        <h1 className="font-bold text-[2.5rem] mb-4 text-center">CONATCT SECTION</h1>
       <div className="flex justify-center items-center mb-20">
        <div className="h-1 w-20 bg-[#2c3e50] me-4 "></div>
        <i class="fa-solid fa-star"></i>
        <div className="h-1 w-20 bg-[#2c3e50] ms-4"></div>
       </div>

       <div className="text-center flex flex-col justify-center items-center ">
        <input type="text" placeholder="userName" name="userName" className="border-b-[1px]  mb-9 w-1/2 p-2 focus:outline-none" ></input>
        <input type="text" placeholder="userAge" name="userAge" className="border-b-[1px]  mb-9 w-1/2 p-2 focus:outline-none" ></input>
        <input type="email" placeholder="userEmail" name="userEmail" className="border-b-[1px]  mb-9 w-1/2 p-2 focus:outline-none" ></input>
        <input type="password" placeholder="userPassword" name="userPassword" className="border-b-[1px]  mb-9 w-1/2 p-2 focus:outline-none" ></input>
        
        <button className="bg-[#1abc9c] text-white hover:border-[#1abc9c] focus:outline-none">send Message</button>

        

       </div>




        
    </div>
    

    </>
    )
}
