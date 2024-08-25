"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModel";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

function RecordAnswerSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) {
  const [userAnswer, setUserAnswer] = useState();
  const [loading, setLoading] = useState(false);
  const [successfullUpload,setSuccessfullUpload]=useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  const { user } = useUser();

  useEffect(() => {
    results?.map((result) =>
      setUserAnswer((prev) => prev + result?.transcript)
    );
  }, [results]);

  useEffect(()=>{
    if(!isRecording&&userAnswer?.length>12)
    {
        updateUserAnswer()
    }
  },[userAnswer])

    const startStopRecording = () => {

        if (isRecording) {
          stopSpeechToText();
          if (userAnswer?.length < 12) {
            setLoading(false);
            toast("Error while saving your answer, please try again");
            return;
          }
        } else {
          startSpeechToText();
       }
    };

    const updateUserAnswer=async()=>{
        setLoading(true);
        console.log(userAnswer);
        const feedbackPrompt =
            "Question" +
            mockInterviewQuestion[activeQuestionIndex]?.Question +
            " , User Answer: " +
            userAnswer +
            "Depending on given question and user answer for an interview. Plesae given rating for answer and feedback as area of improvement if any in just 5-7 lines to improve it in JSON format with rating filed and feebback field";
    
        const result = await chatSession.sendMessage(feedbackPrompt);
        const mockJsonresp = result.response
            .text()
            .replace("```json", "")
            .replace("```", "")
            .trim();
        console.log(mockJsonresp);
        const JsonFeedback = JSON.parse(mockJsonresp);

        const resp = await db.insert(UserAnswer).values({
          mockIdRef: interviewData?.mockId,
          question: mockInterviewQuestion[activeQuestionIndex]?.Question,
          correctAns: mockInterviewQuestion[activeQuestionIndex]?.Answer,
          userAns: userAnswer,
          feedback: JsonFeedback?.feedback,
          rating: JsonFeedback?.rating,
          userEmail: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        });

        if (resp) {
          toast("Answer saved successfully");
          setUserAnswer("");
        //   setResults([]);
        }
        setResults([]);
        setLoading(false);

    }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col mt-20 p-5 rounded-lg bg-black justify-center items-center">
        <Image
          src={"/webcam.png"}
          height={200}
          width={200}
          className=" absolute"
          alt="webcam"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button
        variant="outline"
        className=" my-10 "
        onClick={startStopRecording}
        disabled={loading}
      >
        {isRecording ? (
          <h2 className="flex gap-2 text-red-600">
            <StopCircleIcon />
            Stop Recording
          </h2>
        ) : (
          <h2 className="text-blue-500 flex gap-2">
            <Mic />
            Start Recording
          </h2>
        )}
      </Button>
      <Button onClick={() => console.log(userAnswer)}>Show user Answer</Button>
    </div>
  );
}

export default RecordAnswerSection;
