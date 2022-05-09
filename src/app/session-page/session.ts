import { Tariff } from "./tariff";

export interface Session {
    id: string;
    title: string;
    description: string[];
    gallerySize: number;
    tariffs: Tariff[];
}