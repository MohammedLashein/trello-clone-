'use client'
import { Trello } from "lucide-react";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
export function Navbar() {
    console.log(useUser())
    console.log(useUser().user?.emailAddresses)
    console.log(useUser().user?.emailAddresses[0].emailAddress)
    let isUserSignedIn = useUser().isSignedIn
    let doesUsernameExist = true
    // useUser hook from clerk returns all of the info \
    // we need about a certain user
    return <div className="flex items-center justify-between p-2 sm: p-4 backdrop-blur-sm border">
        <div className="flex space-x-2">
            <Trello />
            <span>
                trello clone
            </span>
        </div>

        {isUserSignedIn 
        ? (
            <div>Welcome, {useUser()?.user?.username ?? useUser().user?.emailAddresses[0].emailAddress}</div>
        )
        : (
            <div className="text-xs sm:text-sm flex gap-1">
                <SignInButton>

                <Button variant='ghost'>Login </Button>
                </SignInButton>
                <SignUpButton>
                <Button>Sign up </Button>
                </SignUpButton>
            </div>
        )}
    </div>
}