import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  //jan30th2025--having issues on remote server and so i comment out this line and replaced
  //handleDisplayResult: (query: string) => void; // Modified to accept query directly
  handleDisplayResult: (query?: string) => void; // Allow optional parameter
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  // Modified: Instead of setting the input value, directly trigger result display
  const handleClickSuggestion = (value: string) => {
    handleDisplayResult(value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Commented out Powered by Together AI section */}
      {/* 
      <a
        className="mb-4 inline-flex h-7 shrink-0 items-center gap-[9px] rounded-[50px] border-[0.5px] border-solid border-[#E6E6E6] bg-white px-3 py-4 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)]"
        href="https://www.together.ai/"
        target="_blank"
      >
        <Image
          unoptimized
          src="/img/together-ai.svg"
          alt="hero"
          width={18}
          height={18}
        />
        <span className="text-center text-base font-light leading-[normal] text-[#1B1B16]">
          Powered by Together AI
        </span>
      </a>
      */}
      
      <h2 className="bg-custom-gradient bg-clip-text pb-7 pt-2 text-center text-3xl font-semibold leading-[normal] lg:text-[64px]">
        Search smarter & faster
      </h2>

      {/* Input section remains unchanged */}
      <div className="w-full max-w-[708px] pb-6">
        <InputArea
          promptValue={promptValue}
          setPromptValue={setPromptValue}
          handleDisplayResult={handleDisplayResult}
        />
      </div>

      {/* Modified: Suggestions section now directly triggers results */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pb-[30px] lg:flex-nowrap lg:justify-normal">
        {suggestions.map((item) => (
          <div
            className="flex h-[35px] cursor-pointer items-center justify-center gap-[5px] rounded border border-solid border-[#C1C1C1] bg-[#EDEDEA] px-2.5 py-2"
            onClick={() => handleClickSuggestion(item.name)} // Modified: Calls handleDisplayResult directly
            key={item.id}
          >
            <Image
              unoptimized
              src={item.icon}
              alt={item.name}
              width={18}
              height={16}
              className="w-[18px]"
            />
            <span className="text-sm font-light leading-[normal] text-[#1B1B16]">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Commented out GitHub link section */}
      {/* 
      <p className="text-center text-sm font-light leading-[normal] text-[#1B1B16]">
        Fully open source!{" "}
        <span className="text-sm font-medium underline">
          <a
            href="https://github.com/Nutlope/turboseek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star it on github.
          </a>
        </span>
      </p>
      */}
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

// Modified: Updated suggestions to different topics
const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "best NHL team of all time",
    icon: "/img/icon _leaf_.svg",
  },
  {
    id: 2,
    name: "best NBA team of all time",
    icon: "/img/icon _dumbell_.svg",
  },
  {
    id: 3,
    name: "best MLB team of all time",
    icon: "/img/icon _atom_.svg",
  },
];

export default Hero;
