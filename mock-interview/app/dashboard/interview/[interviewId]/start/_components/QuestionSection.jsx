import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
    else{
      alert("Soory, your brower does not support text to speech")
    }
  };
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion?.map((question, index) => (
              <h2
                key={index}
                className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer
              ${
                activeQuestionIndex == index
                  ? " text-white bg-blue-500"
                  : "bg-secondary"
              }
              `}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg font-semibold">
          {mockInterviewQuestion[activeQuestionIndex]?.Question}
        </h2>
        <Volume2
          className=" cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
          }
        />
        <div className="mt-20 p-5 border rounded-lg bg-blue-100 border-blue-300">
          <h2 className="flex gap-2 items-center text-blue-300">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="mt-3 text-blue-500 text-sm">
            {process.env.NEXT_PUBLIC_NOTE}
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionSection;
