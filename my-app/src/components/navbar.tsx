'use client'
import { Trello } from "lucide-react";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Navbar() {
    const {isSignedIn, user} = useUser()
    const pathname = usePathname()
    const isDashboardPage = pathname === '/dashboard'

    if(isDashboardPage) {
            return <div className="flex items-center justify-between p-2 sm: p-4 backdrop-blur-sm border">
        <div className="flex space-x-2">
            <Trello />
            <span>
                trello clone
            </span>
        </div>
        <UserButton />
    </div>

    }

    return <div className="flex items-center justify-between p-2 sm: p-4 backdrop-blur-sm border">
        <div className="flex space-x-2">
            <Trello />
            <span>
                trello clone
            </span>
        </div>

        {isSignedIn 
        ? (
            <div>
                <div>Welcome, {user.username ?? user?.emailAddresses[0].emailAddress}</div>
                <Link href='/dashboard'>
                
                <Button>go to dashboard</Button>
                </Link>
            </div>
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