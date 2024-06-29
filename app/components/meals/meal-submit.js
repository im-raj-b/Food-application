"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function MealSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button disabled={pending}>
        {pending ? "Submiting...." : "Share Meal"}
      </button>
    </>
  );
}
