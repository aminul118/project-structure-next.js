import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
  return (
    <nav>
      <ul className="text-center">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
