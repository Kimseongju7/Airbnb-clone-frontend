import { Outlet } from "react-router-dom";
import React from "react";

export default function Root() {
  return (
    <h1>
      im root
      <Outlet />
    </h1>
  );
}