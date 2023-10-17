import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Welcome() {
    const { isLoaded, isSignedIn, user } = useUser();

    // In case the user signs out while on the page.
    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            Hello, {user.firstName} Welcome to Webcrumbs <UserButton />
        </div>
    );
}