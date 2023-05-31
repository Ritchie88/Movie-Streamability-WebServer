async function postCall(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

async function getCall(url = "") {
    const response = await fetch(url);
    return response.json();
}
