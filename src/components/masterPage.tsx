import React, { useState } from "react";

import NavBar from "./layout/navBar";
import SideBar from "./layout/sideBar";

interface Props {
  children : any
}

const MasterPage : React.FC<Props> = ({ children }) => {

  const [sideBar,setSideBar] = useState(false);

  return (
    <>

      {/* overlay for open side bar in mobile size  */}
      <div id="overlay" className={`${sideBar ? '' : 'hidden'} w-full h-full fixed top-0 right-0 bg-gray-900 bg-opacity-50`}></div>


      <SideBar sideBar={sideBar} setSideBar={setSideBar} />


      <div className="flex flex-col lg:pr-64">

        <NavBar setSideBar={setSideBar} />

        {/* main */}
        <main>
          <div className="lg:p-8 md:p-6 p-4">
            {children}
          </div>
        </main>
        {/* end main */}


      </div>
      {/* end main */}
    </>
  );
}

export default MasterPage;
