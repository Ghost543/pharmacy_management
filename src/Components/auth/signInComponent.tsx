import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Inconsolata } from "next/font/google";

const inter = Inconsolata({
    weight: ["200", "400", "500", "700", "900"],
    subsets: ["latin"],
});

const SignInComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                username,
                password,
                redirect: false,
            });
            if (res?.error) {
                setError("Invalid credentials");
            }
            router.replace("/dashboard");
        } catch (e) {
            throw e;
        }
    };

    return (
        <div
            className={`w-full h-screen flex flex-col justify-center items-center ${inter.className}`}>
            <div
                className={`w-fit h-fit p-2 flex flex-col gap-2 ring-1 ring-gray-500`}>
                {error && (
                    <div
                        className={`w-fit h-fit ring-1 ring-rose-600 bg-rose-600/50 px-2 text-sm text-rose-300 rounded-md`}>
                        Invalid credentials
                    </div>
                )}
                <h2 className={`text-xl text-gray-400`}>Sign in</h2>
                <form
                    onSubmit={submitHandler}
                    className={`w-full h-fit flex flex-col gap-2 p-2 justify-center items-center`}>
                    {/*<input name="csrfToken" type="hidden" defaultValue={csrfToken}/>*/}
                    <input
                        className={`focus:border-0 autofill:bg-gray-800/30 focus:ring-gray-500 bg-gray-800/30 w-7/8 h-8 text-sm text-gray-400 placeholder:text-sm placeholder:text-gray-500`}
                        placeholder={`username`}
                        name="username"
                        type="text"
                        onChange={e => setUsername(e.target.value.trim())}
                    />
                    <input
                        className={`decoration-none autofill:bg-gray-800/30 focus:border-0 focus:ring-gray-500 bg-gray-800/30 w-7/8 h-8 text-sm text-gray-400 placeholder:text-sm placeholder:text-gray-500`}
                        placeholder={`password`}
                        name="password"
                        type="password"
                        onChange={e => setPassword(e.target.value.trim())}
                    />

                    <input
                        className={`p-2 self-end flex w-28 h-9 shadow-md hover:shadow-sm hover:translate-y-0.5 ease-in-out hover:text-gray-300 flex-row text-sm justify-center text-gray-400 items-center gap-1 rounded-md bg-gray-800/80 cursor-pointer`}
                        value={"Sign in"}
                        type={"submit"}
                    />
                </form>
            </div>
        </div>
    );
};

export default SignInComponent;
