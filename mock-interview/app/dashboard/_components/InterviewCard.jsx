"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function InterviewCard({ interview }) {

  const router = useRouter();

  return (
    <div className="border shadow-sm rounded-lg p-4">
      <h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-grey-500">
        Years of Experience: {interview?.jobExperience}
      </h2>
      <h2 className="text-gray-400 text:xs">
        Create At:{interview?.createdAt}
      </h2>
      <div className="flex justify-between mt-2 gap-4">
        <Button variant="outline" size="sm" className="w-full"
         onClick={()=>router.push('/dashboard/interview/'+interview?.mockId+'/feedback')}
        >
          Feedback
        </Button>
        <Button size="sm" className="w-full"
         onClick={()=>router.push('/dashboard/interview/'+interview?.mockId)}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewCard;
