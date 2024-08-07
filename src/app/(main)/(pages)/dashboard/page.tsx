import React from 'react'
import { SignOutButton } from "@clerk/nextjs";

interface Props {
    
}

const Dashboard = async () => {

    return (
        <div>
            <h1>Dashboard</h1>
            <SignOutButton redirectUrl={"/"}/>
        </div>
    )
}

export default Dashboard
