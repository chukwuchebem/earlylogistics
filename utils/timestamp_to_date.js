export const timestampToDate = (stamp) => {
    const getDate = new Date(stamp)
    const day = getDate.toLocaleString("us",{day:"numeric"});
    const month = getDate.toLocaleString("us",{month:"numeric"});
    const year = getDate.getFullYear();
    
    return `${month}${day}${year}`
}