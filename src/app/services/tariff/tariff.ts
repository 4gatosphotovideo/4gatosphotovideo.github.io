export interface Tariff1 {
    name: string;
    price: number;
    features: string[];
    offer?: { 
        price: number,
        until: string
    };
}