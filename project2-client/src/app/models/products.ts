export interface Product{
    id: number;
    name: string;
    price: number;
    unit: string;
    description: string;
    image: string;
    nutrition: Nutrients[];
    qty: number ;
}

export interface Nutrients{
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}

export const products = [
    {
        id:1,
        name: 'Croissant',
        price: 2.50,
        description: 'Conch shaped Flaky pastry classic, satki yummy',
        image: 'hi.jpg',
        unit: 'Dollars',
        nutrition: [{name :"bello", amount:3,unit:"0",percentOfDailyNeeds:0}]
    },
    {
        id:2,
        name: 'Kouign Amann',
        price: 4.50,
        description: 'Snail shell shaped Flaky pastry extra butter n suker, satki yummier',
        image: 'hihi.jpg',
        unit: 'Dollars',
        nutrition: [{name :"bello", amount:3,unit:"0",percentOfDailyNeeds:0}]
    }
]