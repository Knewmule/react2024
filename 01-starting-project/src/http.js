
export async function fetchItems(){
    const item = await fetch('http://localhost:3000/meals');
    const res = await item.json()
    if(!item.ok){
        return new Error('Faild to fetch meals')
    }
    return res.image
}