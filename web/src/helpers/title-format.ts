const skip = [
    "a",
    "and",
    "in",
    "for",
    "from"
]


export default function titleFormat(str: string){
    return str.split(" ").filter(word => !skip.includes(word)).map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(" ");
}