import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useAppDispatch } from "../redux/store";

const Register = () => {
    const dispatch = useAppDispatch();
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkedPassword, setCheckedPassword] = useState("");
    
    
    return (
        <>
        <Header />
        <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
            
            <div className="bg-white border rounded shadow-lg p-5 w-10/12 md:w-6/12">
                <h2 className="font-bold text-xl py-5">회원가입</h2>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="nickname" className="font-semibold text-lg">닉네임</label>
                    <input id="nickname" className="p-1 mt-2 rounded border bg-gray-50 " value={nickname} onChange={(e) => setNickname(e.target.name)} />
                </div>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="email" className="font-semibold text-lg">이메일</label>
                    <input id="email" type="email" className="p-1 mt-2 rounded border bg-gray-50 " value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="password" className="font-semibold text-lg">비밀번호</label>
                    <input id="password" type="password" className="p-1 mt-2 rounded border bg-gray-50 " value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="checkedPassword" className="font-semibold text-lg">비밀번호 확인</label>
                    <input id="checkedPassword" type="password" className="p-1 mt-2 rounded border bg-gray-50 " value={checkedPassword} onChange={(e) => setCheckedPassword(e.target.value)} />
                </div>
                <div className="mt-8 flex flex-col justify-center items-end">
                    <button type="submit" className="p-2 border rounded bg-white hover:bg-orange-400">가입하기</button> 
                    <Link href="/login" className="text-blue-500 mt-3 text-xs">계정이 이미 있으신가요?</Link>
                </div>
            </div>
        </div>
        </>
    )
   
};

export default Register;