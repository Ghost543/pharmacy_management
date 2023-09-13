import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { TabProvider } from "@/context/tabContext";
import { WorkerProvider } from "@/context/workersContext";
import { trpc } from "@/utils/trpc";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const App = ({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) => {
    return (
        <SessionProvider session={session}>
            <WorkerProvider>
                <TabProvider>
                    <Component {...pageProps} />
                </TabProvider>
            </WorkerProvider>
        </SessionProvider>
    );
};

export default trpc.withTRPC(App);
