export const sendFetch = async (data,method,url) => {
    let motherOption = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: method
    }

    motherOption = data ? {...motherOption, body:JSON.stringify(data)} : motherOption

    const res = await fetch(`http://localhost:3001/${url}`, motherOption);
    return res.json();
}