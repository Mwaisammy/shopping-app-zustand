"use client";
import { usePersonStore } from "@/store/person-store";
import React from "react";

function Person() {
  // const updateFirstName = usePersonStore(state => state.updateFirstName)
  // const updateLastName = usePersonStore(state => state.updateLastName)

  const { updateFirstName, firstName } = usePersonStore();
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      First name
      <input
        type="text"
        placeholder="Enter your first name"
        onChange={(e) => updateFirstName(e.currentTarget.value)}
        value={firstName}
      />
      <p>
        Hello <strong>{firstName}</strong>
      </p>
    </div>
  );
}

export default Person;
