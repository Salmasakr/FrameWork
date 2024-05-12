// import {Homeimg} from'./assets/avataars.svg';
import img from '../../assets/avataaars.svg';
// import reactLogo from '';


export default function Home(){
    return(<>
        <div className="bg-[#1abc9c] text-white p-12">
            <img src={img} alt='home img' className='w-1/5 m-auto mb-10'></img>

        <h1 className="font-bold text-[2.5rem] mb-4 text-center">START FRAMEWORK</h1>
       <div className="flex justify-center items-center mb-3">
        <div className="h-1 w-20 bg-white me-4"></div>
        <i class="fa-solid fa-star"></i>
        <div className="h-1 w-20 bg-white ms-4"></div>

       </div>

        <div className="flex justify-around text-left leading-normal">
            <p >
            Graphic Artist - Web Designer - Illustrator
            </p>

        </div>

    </div>
    

    </>
    )
}
