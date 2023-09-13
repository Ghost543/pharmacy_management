import React, { FC } from "react";

export const DashboardLayout: FC<{ data: string }> = ({ data }) => {
    return <div>{data}</div>;
};
