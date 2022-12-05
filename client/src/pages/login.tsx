import Link from "next/link";
import React, { FormEvent, useState } from "react";
import Header from "../components/Header";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(email.trim() === ""){
            alert("이메일은 비워둘 수 없습니다!!!");
            return;
        }else if(password.trim() === ""){
            alert("비밀번호는 비워둘 수 없습니다!!!");
            return;
        }else{
            const data = {
                email,
                password
            };

        }
    }

    return (
        <>
        <Header />
        <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
            
            <div className="bg-white border rounded shadow-lg p-5 w-10/12 md:w-6/12">
                <h2 className="font-bold text-xl py-5">로그인</h2>
                <form onSubmit={handleSubmit}>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="email" className="font-semibold text-lg">이메일</label>
                    <input id="email" type="email" className="p-1 mt-2 rounded border bg-gray-50 " value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="password" className="font-semibold text-lg">비밀번호</label>
                    <input id="password" type="password" className="p-1 mt-2 rounded border bg-gray-50 " value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div className="mt-8 flex flex-col justify-center items-end">
                    <button type="submit" className="p-2 border rounded bg-white hover:bg-orange-400">로그인</button> 
                    <Link href="/register" className="text-blue-500 mt-3 text-xs">계정이 아직 없으신가요?</Link>
                </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;