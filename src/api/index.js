
export async function getItems (){
    const response = await fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099", {
        method: "GET",
    })
    return response.json()
}
