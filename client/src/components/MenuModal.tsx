import Link from "next/link";
import React from "react"
import { closeMenu } from "../redux/reducers/modalSlice";
import { useAppDispatch } from "../redux/store";
import {useRouter} from "next/router";
const MenuModal = () => {
    const dispatch = useAppDispatch(); 
    const router = useRouter();
    const handleLogin = () => {
        dispatch(closeMenu());
        router.push("/login")
    }
    const handleRegister = () => {
        dispatch(closeMenu());
        router.push("/register")
    }

    return (
        <div className="h-full w-full fixed left-0 top-[60] flex justify-center items-start bg-black bg-opacity-40 text-center">
            <div className="w-full h-auto bg-orange-400">
                <div className="flex flex-col items-end justify-center md:px-8 pt-2 px-2">
                    <div onClick={handleLogin} className="font-bold text-xl my-1 cursor-pointer">로그인</div>
                    <div onClick={handleRegister} className="font-bold text-xl my-1 cursor-pointer">회원가입</div>
                </div>
            </div>
        </div>
    );
};

export default MenuModal;