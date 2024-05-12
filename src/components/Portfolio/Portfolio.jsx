
import imgprotfolio from'../../assets/poert1.png'
import imgprotfolio1 from'../../assets/port2.png'
import imgprotfolio2 from'../../assets/port3.png'


export default function Portfolio(){
    return(<>
        <div className=" text-[#2c3e50] p-12">
       

        <h1 className="font-bold text-[2.5rem] mb-4 text-center">PORTFOLIO COMPONENT</h1>
       <div className="flex justify-center items-center mb-3">
        
        <div className="h-1 w-20 bg-[#2c3e50] me-4 "></div>
        <i class="fa-solid fa-star"></i>
        <div className="h-1 w-20 bg-[#2c3e50] ms-4"></div>

       
        
   

       </div>
       <div className='p-5  '>
            <div className='mb-10 flex cursor-pointer flex-wrap m-auto  gap-10 '>
               <img src={imgprotfolio} className='w-[30%] rounded-lg'></img>
               <img src={imgprotfolio1} className='w-[30%] rounded-lg '></img>
               <img src={imgprotfolio2} className='w-[30%] rounded-lg '></img>
            </div>
            <div className=' flex cursor-pointer flex-wrap m-auto  gap-10 '>
               <img src={imgprotfolio} className='w-[30%] rounded-lg'></img>
               <img src={imgprotfolio1} className='w-[30%] rounded-lg '></img>
               <img src={imgprotfolio2} className='w-[30%] rounded-lg '></img>
            </div>
        </div>

        
    </div>
    

    </>
    )
}
