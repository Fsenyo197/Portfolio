import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Sidebar() {
    return (
        <div className="bg-blue-gray-600 p-4 w-20 text-white flex">
                <ul>
                    <li className="mb-2">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                    </li>
                    <li className="mb-2">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                    </li>
                </ul>
        </div>
    );
}