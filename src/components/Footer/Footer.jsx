export default function Footer(){

    return(
        <>
        <div className="bg-[#2c3e50] text-white py-24 px-36 flex justify-between m-auto text-center">
            <div>
                <h2 className="font-medium text-[28px] mb-3">LOCATION</h2>
                <p>2215 John Daniel Drive
                <br></br>Clark, MO 65243</p>
            </div>
            <div>
                <h4 className="font-medium text-[28px] mb-3">AROUND THE WEB</h4>
                <div>
                <i   class="fa-brands fa-facebook mx-1 border-[1px] p-2 rounded-full"></i>
                <i class="fa-brands fa-twitter mx-1 border-[1px] p-2 rounded-full"></i>
                <i class="fa-brands fa-linkedin-in mx-1 border-[1px] p-2 rounded-full"></i>
                <i class="fa-solid fa-globe mx-1 border-[1px] p-2 rounded-full"></i>
                </div>
            </div>
            <div>
                <h4 className="font-medium text-[28px] mb-3">ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, licensed Bootstrap<br></br> theme created by Route</p>
            </div>
        </div>
        <div className="bg-[#1a252f] text-white p-6 text-center">
            <p>Copyright © Your Website 2021</p>
        </div>
        </>
    );
}