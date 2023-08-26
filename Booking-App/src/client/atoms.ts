import { atom } from "recoil";

export const dateString = atom<string>({
    key: "dateString",
    default: "",
})