import React, { Suspense } from "react";
import { useLoading } from "../context/LoadingContext";
import Spinner from "./Spinner";

const DelayedSuspense = ({ children, fallback = <Spinner /> }) => {
  const { isLoading } = useLoading();

  return <Suspense fallback={isLoading ? null : fallback}>{children}</Suspense>;
};

export default DelayedSuspense;
