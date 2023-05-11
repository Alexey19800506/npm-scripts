const getUsersBlogs = userId => {
    try{
        console.log(userId.length );
       
          const response = [];
       for(let i=0;i<userId.length;i++){
         response.push(fetch(`https://api.github.com/users/${userId[i]}`))  ; 
       }
           
         const userData = Promise.all(response); 
console.log(userData);
         for(let i=0;i<userId.length;i++){
          const blog = userData[i].json(); 
        }
          //const blog = userData.json();
          console.log(blog);
          //userData.blog
           return blog; 
        
    } catch(e){
        console.log(e);
    }
};

// examples
//getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs('microsoft').then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
