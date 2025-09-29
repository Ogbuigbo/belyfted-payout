"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Stepper from "./_components/Stepper";

function Onboarding() {
  const router = useRouter();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const status = user?.config?.kyb_status?.toUpperCase();
    if (["REVIEW", "APPROVED", "SUBMITTED", "UNDER_REVIEW"].includes(status)) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="">
      <Stepper />
    </div>
  );
}

export default Onboarding;
