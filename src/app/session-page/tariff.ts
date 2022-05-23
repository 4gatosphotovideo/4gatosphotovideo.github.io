export interface Tariff {
    id: String;
    name: string;
    price: number;
    features: string[];
    offer?: { 
        price: number,
        until: String
    };
    isPack?: Boolean;
}