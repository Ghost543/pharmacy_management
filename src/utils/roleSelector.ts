import { Role, WorkerStatus } from "@/Components/workersComponents/Roles";

export const RoleSelector = (role: Role | undefined) => {
    switch (role) {
        case Role.Admin:
            return "Admin";
        case Role.Manager:
            return "Manager";
        case Role.Cashier:
            return "Cashier";
        case Role.Sales:
            return "Sales";
        case undefined:
            return "";
    }
};

export const RoleSelectorRev = (role: string | undefined) => {
    switch (role) {
        case "Admin":
            return Role.Admin;
        case "Manager":
            return Role.Manager;
        case "Cashier":
            return Role.Cashier;
        case "Sales":
            return Role.Sales;
        default:
            throw new Error("Invalid role");
    }
};

export const employeeStatusSelector = (status: WorkerStatus) => {
    switch (status) {
        case WorkerStatus.online:
            return "online";
        case WorkerStatus.offline:
            return "offline";
    }
};
