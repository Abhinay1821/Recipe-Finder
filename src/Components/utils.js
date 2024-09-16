export function allCuisines(data){
    const Cuisines = ['All']
    for(let i=0;i<data.length;i++){
        if(!Cuisines.includes(data[i].cuisine)){
            Cuisines.push(data[i].cuisine)
        }
    }
    return Cuisines
}