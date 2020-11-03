import React from 'react'
import './core.css'
import {  Link } from "react-router-dom";

export function Nav(props) {
  

    return (
        <>
         
               

                <ul>
                    <li>
                        <Link  to="/area">Area</Link>
                    </li>
                    <li>
                        <Link to="/period">Period</Link>
                    </li>
                    <li>
                        <Link to="/goal">GoalSetting</Link>
                    </li>

                </ul>
               </>
    )
}
