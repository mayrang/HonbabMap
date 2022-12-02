import { IsEmail, Length } from "class-validator";
import {BaseEntity,  BeforeInsert,  Column,  Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import bcrypt from "bcryptjs";
import { Review } from "./Review";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    userId: number;

    @Length(1, 255, {message: "이메일은 비워둘 수 없습니다."})
    @IsEmail(undefined, {message: "이메일 형식으로 작성하여야 합니다."})
    @Column({unique: true})
    email: string;

    @Length(6, 255, {message: "비밀번호는 6자리 이상이여야 합니다."})
    @Column()
    password: string;

    @Length(1, 32, {message: "닉네임은 비워둘 수 없습니다."})
    @Column({unique: true})
    nickname: string;

    @OneToMany(() => Review, (review) => review.user)
    reviews: Review[];

    @BeforeInsert()
    async hashpassword() {
        this.password = await bcrypt.hash(this.password, 6)
    }
}