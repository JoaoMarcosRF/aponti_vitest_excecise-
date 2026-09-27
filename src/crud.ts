type User = {
  id: number;
  userId: number;
  tittle: string;
  body: string;
};

const userExample: User = {
  id: 8,
  userId: 12,
  tittle: "exemplo",
  body: "blablabla",
};

async function getAllUser(){
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    if(!response.ok){
        throw new Error(`Erro HTTP: ${response.status}`);
    }

    return response.json();

  } catch (error) {
    console.log(`Erro ao buscar usuarios: ${error}`);
  }
}

async function getUserById(ID: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${ID}`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(`Erro ao buscar usuario: ${error}`);
  }
}

async function createUser(user: User) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
}

async function deleteUserById(ID: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ID}`,
    {
      method: "DELETE",
    },
  );
  return response.json();
}

async function updateUserById(ID: number, user: User) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    },
  );
  return response.json();
}

async function showCContent() {
  console.log(await getUserById(1));
}

showCContent();
