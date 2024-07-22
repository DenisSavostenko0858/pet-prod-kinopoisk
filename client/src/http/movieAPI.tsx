import {$host} from "./index";

export const addmovies = async (name:string, rating:number, image:string, description:string, typeId:number, brandId:number): Promise<any> => {
    const { data } = await $host.post('api/admin/addmovies', {name, rating, image, description, typeId, brandId});
    return data
};
