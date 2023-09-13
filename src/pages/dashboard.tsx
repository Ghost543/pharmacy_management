import React, { FC } from "react";
import Sidebar from "@/Components/sidebar";
import { useTabContext } from "@/context/useTabContext";
import { selector } from "@/utils/selector";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MainLayout from "@/Components/mainLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { AddItemProvider } from "@/context/addItemDrawerContext";
import { StockProvider } from "@/context/stockContext";

const Dashboard: FC = () => {
    const router = useRouter();

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace("/auth/signin?callbackUrl=/dashboard");
        },
    });

    if (!session?.user) return;

    return (
        <>
            <AddItemProvider>
                <StockProvider>
                    <MainLayout session={session} />
                </StockProvider>
            </AddItemProvider>
        </>
    );
};

export default Dashboard;
