export interface Tariff {
    name: string;
    price: number;
    features: string[];
    offer?: { 
        price: number,
        until: string
    };
}