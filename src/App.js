import CreateAgent from "./components/createAgent/CreateAgent";
import {SideBar} from "./components/sidebar/sidebar";
import TrainBot from "./components/trainBot/TrainBot";

function App() {
  return (
    <div className="flex justify-start bg-[#101010] h-[100vh] gap-2">
      <SideBar/>
      <div className={"flex flex-col flex-[2] py-4 px-4"}>
          <h1 className={"font-normal text-2xl text-white"}>Create a New Agent</h1>
          <CreateAgent />
      </div>
      <TrainBot />
    </div>
  );
}

export default App;
