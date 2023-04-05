// export const getUsers = () => fetch(`https://content.newtonschool.co/v1/pr/main/users`);

export const getUsers = async (id) => {
    // fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`);
    const response = await fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`);
    const data = await response.json();
    // console.log("api data", data);
    return data.name;
}