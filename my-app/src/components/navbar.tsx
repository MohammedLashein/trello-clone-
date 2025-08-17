import { Trello } from "lucide-react";

export function Navbar() {
    // useUser hook from clerk returns all of the info \
    // we need about a certain user
    return <div>
        hello navbar
        <div>
            <Trello />
            <span>
                trello clone
            </span>
        </div>
    </div>
}