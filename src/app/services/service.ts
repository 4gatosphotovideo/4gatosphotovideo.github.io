import { Tariff } from './tariff/tariff';

export interface Service{
    name: string;
    thumbnailName?: string;
    title: string;
    description: string[];
    tariffs?: Tariff[];
}