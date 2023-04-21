export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export const products = [
    {
        id:1,
        name: 'Croissant',
        price: 2.50,
        description: 'Conch shaped Flaky pastry classic, satki yummy',
        image: 'hi.jpg'
    },
    {
        id:2,
        name: 'Kouign Amann',
        price: 4.50,
        description: 'Snail shell shaped Flaky pastry extra butter n suker, satki yummier',
        image: 'hihi.jpg'
    }
]