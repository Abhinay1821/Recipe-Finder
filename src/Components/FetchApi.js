
export async function fetchData(){
    const result = await fetch('https://api.api-ninjas.com/v1/recipe')
    const response = await result.json()
    return response
}