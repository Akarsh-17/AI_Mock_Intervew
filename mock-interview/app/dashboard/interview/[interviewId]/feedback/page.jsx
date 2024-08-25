"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer?.mockIdRef, params.interviewId))
      .orderBy(UserAnswer?.id);

    console.log(result);
    setFeedbackList(result);
  };
  return (
    <div className="p-10">
      {feedbackList?.length == 0 ? (
        <h2>No Interview Record Found</h2>
      ) : (
        <>
          <h2 className="font-bold text-2xl">
            Here is your Interview Feedback
          </h2>
          <h2 className="font-bold text-3xl text-green-500">Congratulations</h2>
          <h2 className="text-lg my-3 text-primary">
            Your overall Interview rating: <strong>9/10</strong>
          </h2>

          <h2 className="text-sm text-gray-500">
            Find below the Interview Question, Answer and Feedback
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-9">
                <CollapsibleTrigger className="w-full border rounded-lg text-left p-2 bg-secondary my-2 flex justify-between gap-7">
                  {item?.question} <ChevronsUpDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 p-2  border rounded-lg">
                      <strong>Rating: </strong>
                      {item?.rating}
                    </h2>
                    <h2 className="text-red-900 p-2 text-sm bg-red-50 border rounded-lg">
                      <strong>Your Answer: </strong>
                      {item?.userAns}
                    </h2>
                    <h2 className="text-green-900 p-2 text-sm bg-green-100 border rounded-lg">
                      <strong>Correct Answer: </strong>
                      {item?.correctAns}
                    </h2>
                    <h2 className="text-blue-900 p-2 text-sm bg-blue-100 border rounded-lg">
                      <strong>feedback: </strong>
                      {item?.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}

      <Link href={"/dashboard"}>
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}

export default feedback;
