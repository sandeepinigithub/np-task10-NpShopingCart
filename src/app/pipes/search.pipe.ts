import { Pipe ,PipeTransform } from "@angular/core";

@Pipe({
    name : 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform{

    transform(products : any , searchElement : any){
        if(!products){
            return null;
        }
        if(!searchElement){
            return products ;
        }

        return products.filter((data: any) =>{  
           return data.product_name.toLowerCase().includes(searchElement.toLocaleLowerCase())         
        });
    }

}