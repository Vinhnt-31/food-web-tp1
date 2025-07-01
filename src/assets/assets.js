import logo from './Panda-food.png';
import cart from './cart.png'
import CateDefault from './CateDefault.png';
import FoodDefault from './FoodDefault.png';
import avatar from './avatar.png';
import order from './order.png';
import logout from './logout.png';
import plus from './plus.png';
import minus from './minus.png';
import remove from './remove.png';

export const assets = {
    logo,
    cart,
    avatar,
    order,
    logout,
    plus,
    minus,
    remove
}

export const category_list = [
    {
        _id: 1,
        name: "Trán miệng",
        description: "Cate1 desc",
        image: CateDefault,
    },
    {
        _id: 2,
        name: "Tự chọn",
        description: "Cate2 desc",
        image: CateDefault,
    },
    {
        _id: 3,
        name: "Chiên, xào",
        description: "Cate3 desc",
        image: CateDefault,
    },
    {
        _id: 4,
        name: "Khai vị",
        description: "Cate4 desc",
        image: CateDefault,
    },
    {
        _id: 5,
        name: "Chay",
        description: "Cate5 desc",
        image: CateDefault,
    },
    {
        _id: 6,
        name: "Đồ uống",
        description: "Cate7 desc",
        image: CateDefault,
    },
]

export const food_list = [
    {
        _id: 1,
        name: "food1",
        price: 120000,
        image: FoodDefault,
        cate: 2,
        desc: "food1 desc",
        rate: 4.5,
    },
    {
        _id: 2,
        name: "food2",
        price: 180000,
        image: FoodDefault,
        cate: 2,
        desc: "food2 desc",
        rate: 5,
    },
    {
        _id: 3,
        name: "food3",
        price: 140000,
        image: FoodDefault,
        cate: 2,
        desc: "food3 desc",
        rate: 4,
    },
    {
        _id: 4,
        name: "food4",
        price: 150000,
        image: FoodDefault,
        cate: 3,
        desc: "food1 desc",
        rate: 4.5,
    },
    {
        _id: 5,
        name: "food5",
        price: 110000,
        image: FoodDefault,
        cate: 3,
        desc: "food5 desc",
        rate: 3.5,
    },
    {
        _id: 6,
        name: "food6",
        price: 110000,
        image: FoodDefault,
        cate: 2,
        desc: "food6 desc",
        rate: 4.5,
    },
    {
        _id: 7,
        name: "food7",
        price: 160000,
        image: FoodDefault,
        cate: 3,
        desc: "food7 desc",
        rate: 1.5,
    },
    {
        _id: 8,
        name: "food8",
        price: 190000,
        image: FoodDefault,
        cate: 2,
        desc: "food8 desc",
        rate: 2.5,
    },
    {
        _id: 9,
        name: "food9",
        price: 190000,
        image: FoodDefault,
        cate: 3,
        desc: "food9 desc",
        rate: 2,
    },
    {
        _id: 10,
        name: "food10",
        price: 170000,
        image: FoodDefault,
        cate: 3,
        desc: "food10 desc",
        rate: 3,
    },
    {
        _id: 11,
        name: "food11",
        price: 180000,
        image: FoodDefault,
        cate: 2,
        desc: "food11 desc",
        rate: 1,
    },
]