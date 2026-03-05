import { RiSettingsLine, RiShieldUserFill } from "react-icons/ri"

import "./Saidbar.css"
import { MdNavigateNext } from "react-icons/md"
import { FaWallet } from "react-icons/fa"
import { PiSealPercentFill } from "react-icons/pi"
import { BsBoxFill, BsFillQuestionSquareFill } from "react-icons/bs"
import type React from "react"
type Props = {
  sidebarHide: boolean;
  setSidebarHide: React.Dispatch<React.SetStateAction<boolean>>;
}

function Saidbar({ sidebarHide, setSidebarHide }: Props) {


  return (
    <div>
      <div className={`header ${sidebarHide ? "sidebar-hide" : ""}`}>
        <div className="p-low">
          <div className="logo">
            <button className="btn-h"><RiSettingsLine /></button>
            {sidebarHide ? <></> : <h3 className="h-h3">Dashboard <span className="h-span">v.01</span></h3>}
          </div>



          
          <div className="header-list">
            <ul className="h-ul">
              <li className={`h-li ${sidebarHide ? "center" : ""}`}>
                {sidebarHide ? <></> : <p className="prav"><MdNavigateNext />Product </p>}
                <span className="next-s"><BsBoxFill /></span>
              </li>

              <li className={`h-li ${sidebarHide ? "center" : ""}`}>
                {sidebarHide ? <></> : <p className="prav"><MdNavigateNext />Customers </p>}
                <span className="next-s"><RiShieldUserFill /></span>
                </li>


              <li className={`h-li ${sidebarHide ? "center" : ""}`}>
                {sidebarHide ? <></> : <p className="prav"><MdNavigateNext />Income </p>}
                <span className="next-s"><FaWallet /></span>
                </li>
                
              <li className={`h-li ${sidebarHide ? "center" : ""}`}>
                {sidebarHide ? <></> : <p className="prav"><MdNavigateNext />Promote </p>}
                <span className="next-s"><PiSealPercentFill /></span>
              </li>


              <li className={`h-li ${sidebarHide ? "center" : ""}`}>
                {sidebarHide ? <></> : <p className="prav"><MdNavigateNext />Help </p>}
                <span className="next-s"><BsFillQuestionSquareFill /></span>
                </li>
            </ul>
          </div>

          <button className="button_prev" onClick={() => setSidebarHide((prev) => !prev)} ><MdNavigateNext /></button>
        </div>
      </div>
    </div>
  )
}

export default Saidbar
