import { Tariff } from "./tariff";

export interface Session {
    id: String;
    title: String;
    description: String[];
    gallerySize: number;
    tariffs: Tariff[];
}