import {atom} from "recoil";

type AuthModelState = {
    isOpen: boolean,
    type: "login" | "forgotPassword" | "register"
};

const initialAuthModel: AuthModelState = {
    isOpen: false,
    type: "login"
};

export const authModelStateRecoil = atom<AuthModelState>({
    key: "authModelState",
    default: initialAuthModel
});