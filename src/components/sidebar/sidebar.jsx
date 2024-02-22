import {SidebarTile} from "./sidbar-tile/sidebar-tile";
import {BiHome, BiUser} from "react-icons/bi";
import {FaCircleUser} from "react-icons/fa6";
import {CiDesktop} from "react-icons/ci";
import {MdPayment} from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

export const SideBar = () => {
    return (
        <div className={"flex flex-col flex-[0.6] h-[100%] bg-[#141414]"}>
            <div className={"flex items-center gap-2 p-4"}>
                <div className={"px-3 py-1 bg-[#ededed] rounded-md"}>
                    <p className={"text-[#6895c6] font-bold"}>A</p>
                </div>
                <p className={"text-md font-semibold text-white"}>Agent Avatar</p>
            </div>
            <div className={"flex flex-col gap-1 mt-2 pr-3"}>
                <SidebarTile
                    active={true}
                    label={"Home"}
                >
                    <BiHome></BiHome>
                </SidebarTile>
                <SidebarTile
                    label={"Agents"}
                >
                    <BiUser></BiUser>
                </SidebarTile>
                <SidebarTile
                    label={"Avatar"}
                >
                    <FaCircleUser></FaCircleUser>
                </SidebarTile>
                <SidebarTile
                    label={"Digital Human"}
                >
                    <CiDesktop></CiDesktop>
                </SidebarTile>
            </div>
            <div className={"flex h-[100%]"}/>
            <div className={"flex flex-col border-t py-4 pr-3"}>
                <SidebarTile
                    label={"Account"}
                >
                    <IoSettingsSharp></IoSettingsSharp >
                </SidebarTile>
                <SidebarTile
                    label={"Payment"}
                >
                    <MdPayment></MdPayment>
                </SidebarTile>
            </div>
        </div>
    )
}