import React, { useState } from "react";
import FormInput from "./formElements/FormInput";
import FormLabel from "./formElements/FormLabel";
import FormButton from "./formElements/FormButton";
import UploadFiles from "./formElements/UploadFiles";

const CreateAgent = () => {
  const [agentName, setAgentName] = useState("");
  const [aboutAgent, setAboutAgent] = useState("");
  const [agentIntro, setAgentIntro] = useState("");

  return (
    <main className="createAgent p-4 bg-[#141414] mt-5 rounded-md h-full relative">
      <div className="form w-full flex flex-col gap-2">
        <div className="AgentName flex flex-col gap-1">
          <FormLabel label={"Agent Name"} />
          <FormInput
            value={agentName}
            setValue={(e) => {
              setAgentName(e.target.value);
            }}
            placeholder={"What do you want to call your bot."}
          />
        </div>
        <div className="AboutAgent flex flex-col gap-1">
          <FormLabel label={"Tell us more about your agent"} />
          <FormInput
            value={aboutAgent}
            setValue={(e) => {
              setAboutAgent(e.target.value);
            }}
            type="textArea"
            placeholder={"Write about how you want your bot to respond to you."}
          />
        </div>
        <div className="AgentIntro flex flex-col gap-1">
          <FormLabel label={"How should the avatar introduce itself?"} />
          <FormInput
            value={agentIntro}
            setValue={(e) => {
              setAgentIntro(e.target.value);
            }}
            placeholder={
              "Try to get your first AI avatar from photo in seconds today!"
            }
          />
        </div>
        <div className="TrainAgent flex flex-col gap-2">
          <FormLabel label={"Train your agent on your knowledge"} />
          <div className="buttons flex bg-[#1c2939] flex-grow-0 mr-auto divide-x divide-gray-700 rounded-md overflow-hidden border-[1px] border-gray-700">
            <div
              onClick={() => {}}
              className="upload-files py-1 cursor-pointer text-center text-sm px-2 text-gray-300"
            >
              Upload Files
            </div>
            <div
              onClick={() => {}}
              className="use-website cursor-pointer  py-1 bg-[#111929] text-center text-sm px-2 text-gray-700"
            >
              Use Website
            </div>
          </div>
          <UploadFiles />
        </div>
      </div>
      <div className="BuildButton">
        <FormButton />
      </div>
    </main>
  );
};

export default CreateAgent;
