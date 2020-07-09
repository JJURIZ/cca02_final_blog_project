const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "data"),
    fileName = path.join(filePath, "postData.json");

let postList = [];

let loadPosts = () => {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.error("Error loading data file: " + err.message)
        } else {
            let newPostArr = JSON.parse(data);
            if (newPostArr.length > 0) {
                postList = newPostArr;
            }
        }
    });
}

let savePosts = () => {
    fs.writeFile(fileName, JSON.stringify(postList), (err) => {
        if (err) {
            console.error("Error writing the file." + err.message);
            throw err;
        } else {
            console.log("The file has been saved");
        }
    });
}

loadPosts();

let repo = {
    dataSource: "Filesystem",
    postCount: () => {
        return postList.length;
    },

    getPosts: () => {
        return postList;
    },

    getPostByPermalink: (permalink) => {
        return postList.find((post) => {
            return post.permalink === permalink;
        });
    },

    getPostIndex: (permalink) => {
        return posts.findIndex((post) => {
            return post.permalink === permalink;
        });
    },

    addPost: (newPost) => {
        postList.push(newPost);
        savePosts();
        //TODO: Save the list to the filesystem
    },

    deletePost: (index) => {
        posts.splice(index, 1);
        savePosts();
    },

    updatePost: (index, update) => {
        posts[index] = update;
        savePosts();
    }
    
    //Ability to Edit Post
    // On post screen, display Edit button. --DONE
    // When clicked, display post in "newPost" view. 
    // Screen should load with that posts's data in place.
    // Validation - If current permalink === permalink, allow edit(?)
    // Once complete rules identical to newPost with passphrase required to save. 
    // Save changes to post data. 

    //Ability to Delete Posts
};

module.exports = repo;
