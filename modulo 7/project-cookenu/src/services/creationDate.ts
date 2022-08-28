export const CreationDate = (date: Date) => {

    const data = new Date(date);
    const day = String(data.getDate()).padStart(2, '0');
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const year = data.getFullYear();
    const today:string = `${day}/${month}/${year}`;
    return today;
}
