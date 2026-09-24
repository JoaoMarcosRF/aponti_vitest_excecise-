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
        {method: "get"}
    );

    return response.json();
}

async function getUserById(ID: number): Promise<User>{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + ID,
        {method: "get"}
    )

    return response.json();
}

async function createUser(user: User){

}

async function deleteUserById(ID: number) {
    
}

async function updateUserById(ID: number) {
    
}

async function showCContent() {
    console.log(await getUserById(1));
}

showCContent();