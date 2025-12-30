import React from "react";

function CurrentDateComponent() {
  const today = new Date();
  // Formats the date according to the user's local conventions (e.g., "12/30/2025")
  const formattedDate = today.toLocaleDateString();

  return (
    <div>
      <h1>Today's Date</h1>
      <p>{formattedDate}</p>
    </div>
  );
}

export default CurrentDateComponent;
