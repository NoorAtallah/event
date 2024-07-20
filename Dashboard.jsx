// import u_icon from "./uicoon.png"

function Dash_board() {



    return (

        <>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            <main className="bg-[#5c5c5c]">
                <div className="fixed top-0 left-0 right-0 bg-[#2b2b2b] flex justify-between items-center min-w-full h-auto p-2">

                    <img src="" alt="" className="border-solid border-4 rounded-full h-20 w-20 bg-gray-800  " />



                    <div className="personal_info flex justify-center items-center">
                        <h4 className="mr-2 text-[#ffffff]">Admin name</h4>

                        <div className="pic border-solid border-4 rounded-full h-14 w-14">
                            <img src="" alt="" />

                        </div>

                    </div>
                </div>
                <div className="containerr flex justify-center items-center min-w-full h-dvh mt-16">
                    <nav className="inside flex-col justify-between items-center w-1/6   h-dvh bg-zinc-800">

                        <div className="pic h-1/6 flex items-center justify-center ">
                            <h3 className="text-2xl font-bold text-[#ffffff] mt-10">DashBoard</h3>
                        </div>

                        <div className="general_info flex-col justify-center items-center  w-full h-4/6 ">

                            <div className="info flex justify-center items-center h-2/6 w-3/3 bg-[#acacac] m-4 rounded">
                                <h2 className="text-3xl font-bold text-center">
                                    <i class="fa-solid fa-house-user text-4xl mb-2"></i>
                                    <br />
                                    Home
                                </h2>
                            </div>


                            <div className="info flex justify-center items-center h-2/6 w-3/3 bg-[#acacac] m-4 rounded">
                                <h2 className="text-3xl font-bold text-center">
                                    <i class="fa-solid fa-calendar-check text-4xl mb-2"></i>
                                    <br />
                                    Events
                                </h2>
                            </div>


                            <div className="info flex justify-center items-center h-2/6 w-3/3 bg-[#acacac] m-4 rounded">
                                <h2 className="text-3xl font-bold text-center">
                                    <i class="fa-solid fa-tags text-4xl mb-2"></i>
                                    <br />
                                    Coupons
                                </h2>
                            </div>

                        </div>


                        <div className="buttons h-auto text-center mt-14">
                            <button className=" px-5 py-2 bg-neutral-700">Log out</button>
                        </div>

                    </nav>

                    <div className="sections w-5/6 h-dvh   ">



                        <div className="add-section w-full h-[420px] flex  mt-10 ">
                            <div className="add_event  flex-col justify-between items-start  w-3/6 h-full bg-[#acacac]   text-center ml-4 mt-2 py-3 px-10 rounded mx-auto ">


                                <div className="flex flex-wrap justify-center items-center h-4/6">
                                    <div className="up w-2/4 text-left flex-col self-center">
                                        <label htmlFor="" className="">Image :<br></br>
                                            <input type="text" className="w-5/6 h-10 mt-1 " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Event name :<br></br>
                                            <input type="text" className="w-5/6 h-10 mt-1 " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Start Date :<br></br>
                                            <input type="text" className="w-5/6 h-10 mt-1 " />
                                        </label>
                                    </div>

                                    {/* <br></br> */}

                                    <div className="down w-2/4 text-left ">
                                        <label htmlFor="" className="">Price :<br></br>
                                            <input type="text" className="w-5/6 h-10 mt-1 " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Location :<br></br>
                                            <input type="text" className="w-5/6 h-10 mt-1 " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Expiry Date :<br></br>
                                            <input type="text" className="w-5/6 h-10 mt-1 " />
                                        </label>
                                    </div>
                                </div>

                                <div className="text-left">
                                    <label htmlFor="" className="">Description :<br></br>
                                        <input type="text" className="w-full h-10 mt-1" />
                                    </label>
                                </div>


                                <div className="h-2/6 ">
                                    <button className="px-5 py-2 bg-neutral-700 m-5">Add Event</button>
                                </div>

                            </div>

                            <div className="events-info  w-3/6 h-full bg-[#acacac]  text-center ml-4 mt-2 mr-4 rounded overflow-scroll overflow-x-hidden">

                                <h2 className="text-center text-xl font-bold m-2">Events</h2>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                                <div className="event flex  justify-between  items-center p-2 w-[98%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-ticket text-3xl w-[10%]"></i>

                                    <p className="text-sm text-center w-[75%] ml-2"><span>Event ID</span> - <span>Event name</span> - <span>Location</span> - <span>Price</span> - <span>Start Date</span> - <span>Expiy Date</span></p>

                                    <div className="icons w-[15%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="add-coupon w-full h-[200px] flex mt-10 ">


                            <div className="add_coupon  flex-col justify-between items-start  w-3/6 h-full bg-[#acacac]   text-center ml-4 mt-2 py-3 px-10 rounded mx-auto ">


                                <div className="flex-row flex-wrap justify-center items-center h-1/2">


                                    <div className="inputs flex w-full text-left ">
                                        <label htmlFor="" className="">Coupon ID :<br></br>
                                            <input type="text" className="w-[100%] h-10 mt-1 " />
                                        </label>

                                        <br></br>

                                        <label htmlFor="" className="">Discount :<br></br>
                                            <input type="text" className="w-[100%] h-10 mt-1 " />
                                        </label>

                                    </div>
                                </div>



                                <div className="h-1/2 ">
                                    <button className="px-5 py-2 bg-neutral-700 m-5">Add Coupon</button>
                                </div>

                            </div>

                            <div className="coupon-info  w-3/6 h-full bg-[#acacac]  text-center ml-4 mt-2 mr-4 rounded overflow-scroll overflow-x-hidden">

                                <h2 className="text-center text-xl font-bold m-2">Coupons</h2>

                                <div className="coupon flex  justify-between  items-center p-2 w-[45%] mx-auto my-2 bg-[#ffffff] rounded-[15px]">

                                    <i class="fa-solid fa-tags text-3xl w-[5%]"></i>


                                    <p className="text-sm text-center w-[60%] ml-6"><span>Coupon ID</span> - <span>Discount</span></p>

                                    <div className="icons w-[30%]">
                                        <i class="fa-solid fa-trash text-xl "></i>

                                        <i class="fa-solid fa-pen-to-square text-xl ml-2"></i>
                                    </div>
                                </div>




                            </div>


                        </div>
                    </div>


                </div>
            </main>
        </>
    )
}


export default Dash_board;