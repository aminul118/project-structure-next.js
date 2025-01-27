import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import React, { ReactNode } from "react";
type dashboardLayoutProps = Readonly<{
  children: ReactNode;
}>;

const DashboardLayout = ({ children }: dashboardLayoutProps) => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3 bg-slate-400 h-screen">
        <DashboardNavbar />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
