import { Children } from "react";
import { Link } from "react-router-dom";




export default function Header() {
const path=window.location.pathname;


    return (
    <>
        <div className="bg-[#2c3e50] flex justify-between px-12  py-8">
               <li >
                <Link to="/" className="text-left text-white font-bold text-3xl cursor-pointer " >START FRAMEWORK</Link>
                </li>
                
            <ul className="flex justify-end">
              <li >
                <Link to="/About" className="text-white mx-3 font-bold text-lg cursor-pointer focus:bg-[#1abc9c] focus:p-2 focus:rounded-lg" >ABOUT</Link>
              </li> 
                <li >
                    <Link to="/Portfolio" className="text-white mx-3 font-bold text-lg cursor-pointer focus:bg-[#1abc9c] focus:p-2 focus:rounded-lg" >PORTFOLIO</Link>
                </li>
               <li  >
                <Link to="/Contact" className="text-white mx-3 font-bold text-lg cursor-pointer focus:bg-[#1abc9c] focus:p-2 focus:rounded-lg" >CONTACT</Link>
                </li> 
            </ul>

        </div>          



    </>

    );
}
function CustomLink({to,Children,...props}){

    return(
        <li  >
        <a to={to} className="text-white mx-3 font-bold text-lg cursor-pointer hover:bg-[#1abc9c] hover:p-2 hover:rounded-lg" >{Children}</a>
        </li> 

    );  
}