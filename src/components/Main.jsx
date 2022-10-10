/**
Challenge: Build the main section!

Skip 2 aspects of the design for now:
1. The colored bullets in the list
2. The larger React logo on the side

Those will be separate challenges coming up.
*/

import React from "react"

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li><span>Was first released in 2013</span></li>
                <li><span>Was originally created by Jordan Walke</span></li>
                <li><span>Has well over 100K stars on GitHub</span></li>
                <li><span>Is maintained by Facebook</span></li>
                <li><span>Powers thousands of enterprise apps, including mobile apps</span></li>
            </ul>
        </main>
    )
}