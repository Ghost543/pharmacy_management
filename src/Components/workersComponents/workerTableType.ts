import { Role, WorkerStatus } from "@/Components/workersComponents/Roles";

export interface WorkerTableType {
    name: string;
    role: Role;
    status: WorkerStatus;
    salary: string;
    last_seen: {
        date: string;
        time: string;
    };
    contact: {
        tel: string;
        email: string;
    };
}
