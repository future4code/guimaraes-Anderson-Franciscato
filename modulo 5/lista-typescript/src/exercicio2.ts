let todoTIpo : any = true;

function whatsType () : any {
    if (typeof todoTIpo === "number") {
        return "Number";
    } else if (typeof todoTIpo === "string") {
        return "String";
    } else if (typeof todoTIpo === "boolean") {
        return "Boolean";
    } else if (typeof todoTIpo === "undefined") {
        return "Undefined";
    } else if (typeof todoTIpo === "object") {
        return "Object";
    } else if (typeof todoTIpo === "function") {
        return "Function";
    } else {
        return "Unknown";
    }
}

console.log(whatsType());

