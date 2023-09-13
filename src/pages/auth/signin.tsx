import React from "react";
import { useRouter } from "next/navigation";
import { Inconsolata } from "next/font/google";
import SignInComponent from "@/Components/auth/signInComponent";

import { useSession } from "next-auth/react";

const inter = Inconsolata({
    weight: ["200", "400", "500", "700", "900"],
    subsets: ["latin"],
});

const SignIn = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (status === "authenticated") {
        router.push("/dashboard");
        return;
    }

    return (
        <>
            <SignInComponent />
        </>
    );
};

export default SignIn;
