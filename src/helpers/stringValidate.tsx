
export const validateString = (value: string) => {

    const numeros="0123456789";

    for(let i=0; i<value.length; i++){
        if (numeros.indexOf(value.charAt(i),0)!==-1){
           return true;
        }
     }
     return false;
}