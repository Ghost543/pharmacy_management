import short from "short-uuid";
export const no_gen = (service: string): string => {
    const seq = short.generate();
    return `${service}${seq}`;
};
