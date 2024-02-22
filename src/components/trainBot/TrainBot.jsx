import React from "react";
import {BsArrowUp, BsStars} from "react-icons/bs";

const TrainBot = () => {
    return (
        <div className="flex flex-col bg-[#141414] p-4 px-6 mt-[4.5rem] mb-4 mr-4 rounded-md flex-1">
            <h3 className={"text-lg text-[#ededed]"}>Train Chatbot</h3>
            <div className={"flex flex-col gap-4 h-[100%] mt-4"}>
                <div className={"flex justify-end gap-1 items-center"}>
                    <div className={"myChat flex p-2 max-w-[250px]"}>
                        <p>Give me some UX inspiration.</p>
                    </div>
                    <div className={"flex rounded-full"}>
                        <img className={"w-8 h-9 object-cover rounded-full"}
                             src={"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                    </div>
                </div>
                <div className={"flex justify-start gap-1 items-start"}>
                    <div className={"flex rounded-full bg-[#1e2227] p-2"}>
                        <BsStars className={"text-[#5db6da]"}/>
                    </div>
                    <div className={"botChat flex-col flex p-2 max-w-[250px]"}>
                        <p>
                            Here are some UX inspiration ideas:
                        </p>
                        <ul className={"text-[#c2c2c2] text-sm list-disc flex flex-col pl-4"}>
                            <li>
                                Use microinteractions to make your
                                designs more engaging and
                                delightful.
                            </li>
                            <li>
                                Make your designs more accessible.
                            </li>
                            <li>
                                Use storytelling to create a more
                                immersive and engaging user
                                experience.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"myInput flex bg-[#101010] rounded-md items-center px-2"}>
                <input className={"px-4 py-3 w-[100%] font-normal"}/>
                <div className={"p-2 rounded-full bg-[#0962e5]"}>
                    <BsArrowUp className={"text-[white] cursor-pointer"}></BsArrowUp>
                </div>
            </div>
        </div>
    );
};

export default TrainBot;
