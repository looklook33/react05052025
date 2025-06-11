// const fetchPosts = async () => {
//     //fetch posts from "https://jsonplaceholder.typicode.com/posts"
//     //return the posts
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data)
//     return data;
// };

// fetchPosts()

// const fetchPostById = async (id) => {
//     //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
//     //return the post
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/${id}");
//     const data = await res.json()
//     console.log(data)
//     return data;
// };
// fetchPostById(10)

// const sequentialPromise = async (promises, order) => {
//     //execute promises sequentially
//     //return the results in the order specified
//     //if there is a rejected promise, throw an error, and stop executing the rest of the promises
//     //Example:
//     //order = [2,1,3]
//     //promises = ["data1", "data2", "data3"]
//     //results = ["data2", "data1", "data3"]
//     const res = [];
//     for (let i = 0; i < promises.length; i++) {
//         try {
//             const result = await promises[i];
//             res[i] = result;
//         } catch (err) {
//              throw "error"

//         }
//     }
//     return order.map(i => res[i - 1])
// };

// const promise1 = Promise.resolve('data1');
// const promise2 = Promise.reject('error');
// const promise3 = Promise.resolve('data3');

// const promises = [promise1, promise2, promise3];
// const order = [2, 1, 3];

// sequentialPromise(promises, order)
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

const users = [{
        name: "Leanne Graham",
        username: "Bret",
        email: "leanne.graham@email.com",
        password: "1drowssapencoded",
    },
    {
        name: "Ervin Howell",
        username: "Antonette",
        email: "ervin.howell@email.com",
        password: "2drowssapencoded",
    },
];

const encodePassword = (password) => {
    // encode the password by reversing it and add "encoded" at the end
    // for example, "password1" => "1drowssapencoded"
    return password.split('').reverse().join('') + "encoded";
};

// users.forEach((user)=>encodePassword(user['password']))

const decodePassword = (encrypted) => {
    // decode the password
    // for example, "1drowssapencoded" => "password1"
    return encrypted.split('').slice(0, -7).reverse().join('');
};

// decodePassword("1drowssapencoded")

const getUserByEmail = async (email) => {
    // fetch a user by email
    // should throw an error with message "User not found" if the user is not found
    // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
    const user = users.find(u=>u.email === email);
    if (!user){
        throw new Error("User not found" )
    }
    return user;
};

const verifyPassword = async (password, encrypted) => {
    // verify the password
    // should throw an error with message "Invalid password" if the password is incorrect
    const decode = decodePassword(password);
    if (decode !== encrypted){
        throw new Error( "Invalid password")
    }
    return true;
};

const login = async (email, password) => {
    // login the user with email and password
    // should return the user and token if the login is successful
    // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
    // should return the error message if the login is unsuccessful
    // e.g. "User not found", "Invalid password"
    try{
        const user = await getUserByEmail(email);
        await verifyPassword(password,user.password);
        return {
            name:user.name,
            username:user.username,
            email:user.email,
            token:'token'
        }

    }catch(err){
        return err.message;
    }
};