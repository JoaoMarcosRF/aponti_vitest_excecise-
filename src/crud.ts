type User = {
    id: number,
    userId: number,
    tittle: string,
    body: string
}

const userExample: User = {
    id: 8,
    userId: 12,
    tittle: "exemplo",
    body: "blablabla"
}


async function getAllUser(): Promise<User>{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "GET"
        }
    );

    return response.json();
}

async function getUserById(ID: number): Promise<User>{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${ID}`,
        {
            method: "GET"
        }
    )

    return response.json();
}

async function createUser(user: User){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    return response.json();
}

async function deleteUserById(ID: number) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${ID}`,
        {
            method: "DELETE"
        }
    )
    return response.json();
}

async function updateUserById(ID: number, user: User) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${ID}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }

    )
        return response.json();   
}

async function showCContent() {
    console.log(await getUserById(1));
}

showCContent();