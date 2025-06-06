export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/${id}");
  const data = res.json()
  return data;
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
      const res = [];
    for (let i = 0; i < promises.length; i++) {
        try {
            const result = await promises[i];
            res[i] = result;
        } catch (err) {
            throw "error"
        }
    }
    return order.map(i => res[i - 1])
};
