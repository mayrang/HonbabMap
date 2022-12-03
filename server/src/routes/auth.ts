import { Request, Response, Router } from "express";


const router = Router();

router.post("/create", async (req:Request, res:Response) => {
    const {email, nickname, password, checkedPassword} = req.body;
    try{
        if(email.trim() === "") return res.status(400).json({error: "이메일은 비워둘 수 없습니다."});
        if(nickname.trim() === "") return res.status(400).json({error: "닉네임은 비워둘 수 없습니다."});
        if(password.trim() === "") return res.status(400).json({error: "비밀번호는 비워둘 수 없습니다."});
        if(checkedPassword.trim() === "") return res.status(400).json({error: "비밀번호 확인은 비워둘 수 없습니다."});
        if(password !== checkedPassword) return res.status(400).json({error: "비밀번호와 비밀번호 확인은 일치하지 않습니다."});
        
    }catch(err){
        console.log(err);
        return res.status(500).json({error: "회원가입 과정에서 서버 에러!!"});
    }
})


export default router;