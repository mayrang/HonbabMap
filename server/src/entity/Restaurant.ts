import { Expose } from "class-transformer";
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany} from "typeorm";
import { Review } from "./Review";


@Entity("restaurants")
export class Restaurant extends BaseEntity{
    @PrimaryGeneratedColumn()
    restaurantId: number;

    @Column()
    name: string;

    @Column()
    adress: string;

    @Column()
    lat: number;

    @Column()
    lng: number;

    @OneToMany(() => Review, (review) => review.restaurant)
    reviews: Review[];


    @Expose()
    get position():object{
        return {
            lat: this.lat,
            lng: this.lng,
        }
    }
}