import React, { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { asyncUserRegister } from "../redux/reducers/userSlice";
import {useRouter} from "next/router";
const Register = () => {
    const dispatch = useAppDispatch();
    const {registerDone, registerError} = useAppSelector((state) => state.user);
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkedPassword, setCheckedPassword] = useState("");
    const router = useRouter();
    
    useEffect(() => {
        if(registerDone){
            router.replace("/");
        }
        if(registerError){
            alert(registerError);
            return;
        }
    }, [registerDone, registerError])
    
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(email.trim() === ""){
            alert("이메일을 입력해주세요!!");
            return;
        }else if(nickname.trim() === ""){
            alert("닉네임을 입력해주세요!!");
            return;
        }else if(password.trim() === ""){
            alert("비밀번호를 입력해주세요!!");
            return;
        }else if(checkedPassword.trim() === ""){
            alert("비밀번호 확인을 입력해주세요!!");
            return;
        }else if(checkedPassword !== password){
            alert("비밀번호 확인과 비밀번호가 일치하지 않습니다!!");
            return;
        }else{
            const data = {
                email,
                nickname,
                password,
                checkedPassword
            }
            dispatch(asyncUserRegister(data));
        }   
    }
    
    return (
        <>
        <Header />
        <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
            
            <div className="bg-white border rounded shadow-lg p-5 w-10/12 md:w-6/12">
                <h2 className="font-bold text-xl py-5">회원가입</h2>
                <form onSubmit={handleSubmit}>
                <div className="mt-4 flex flex-col">
                    <label htmlFor="nickname" className="font-semibold text-lg">닉네임</label>
                    <input id="nickname" className="p-1 mt-2 rounded border bg-gray-50 " value={nickname} onChange={(e) => setNickname(e.target.value)} />
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
                </form>
            </div>
        </div>
        </>
    )
   
};

export default Register;