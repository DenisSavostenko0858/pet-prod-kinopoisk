import {$host} from "./index";

export const addmovies = async (name:string, rating:number, image:string, description:string, typeId:number, brandId:number): Promise<any> => {
    const { data } = await $host.post('api/admin/addmovies', {name, rating, image, description, typeId, brandId});
    return data
};
export const addtype = async (name:string): Promise<any> => {
    const { data } = await $host.post('api/type/addtype', {name});
    return data
};
export const addbrand = async (name:string): Promise<any> => {
    const { data } = await $host.post('api/brand/addbrand', {name});
    return data
};