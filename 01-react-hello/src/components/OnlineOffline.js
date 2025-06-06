import React from "react";

export default function OnlineOffline({ isOnline = true }) {
  const className = isOnline ? "bg-green-200" : "bg-red-200";
  return (
    <div className={`${className} p-1`}>{isOnline ? "Online" : "Offline"}</div>
  );
}
