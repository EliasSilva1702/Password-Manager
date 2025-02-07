import React from "react";
import Logo from "../Logo/Logo";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";

export default function Sidebar() {
  return (
    <div>
      <div className="py-6">
        <Logo />
      </div>
      <SidebarRoutes />
    </div>
  );
}
