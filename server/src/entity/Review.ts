import { Expose } from "class-transformer";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Restaurant } from "./Restaurant";
import {User} from "./User";


@Entity("reviews")
export class Review extends BaseEntity{
    @PrimaryGeneratedColumn()
    reviewId: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
    
    //맛
    @Column()
    taste: number;

    //가격
    @Column()
    price: number;

    //혼밥 메뉴 구성
    @Column()
    menu: number;

    //혼밥 분위기(환경)
    @Column()
    mood: number;

    @Column()
    userId: number;

    @Column()
    restaurantId: number;

    @Expose()
    get overrall():number{
        let overrall = 0.0;
        overrall = this.taste + this.price + this.menu + this.mood;
        overrall = +(overrall/4).toFixed(1);
        return overrall;
    }


    @ManyToOne(() => User, (user) => user.reviews)
    @JoinColumn({name: "userId", referencedColumnName: "userId"})
    user: User;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.reviews)
    @JoinColumn({name: "restaurantId", referencedColumnName: "restaurantId"})
    restaurant: Restaurant;
}
