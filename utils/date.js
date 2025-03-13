export function getFormattedDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 1).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`
}