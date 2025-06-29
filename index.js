const userIdToFind = 4;

const fetchUserDataAndPosts = async () => {
    try {

        const usersResponse = await fetch("http://jsonplaceholder.typicode.com/users");
        if (!usersResponse.ok) {
            throw new Error(`Network error: ${usersResponse.statusText}`);
        }
        const users = await usersResponse.json();
        const foundUser = users.find((user) => user.id === userIdToFind);

        if (!foundUser) {
            console.log(`User with ID ${userIdToFind} not found.`);
            return;
        }

        console.log("Found user:", foundUser);


        const userPostsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${foundUser.id}/posts`);
        if (!userPostsResponse.ok) {
            throw new Error(`Network error fetching posts: ${userPostsResponse.statusText}`);
        }
        const userPosts = await userPostsResponse.json();
        console.log(`Posts for user ${foundUser.name} (ID: ${foundUser.id}):`, userPosts);
        return { user: foundUser, posts: userPosts };

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


fetchUserDataAndPosts();





