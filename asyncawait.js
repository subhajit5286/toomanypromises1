const blogs=[{title:'Blog1'},{title:'Blog2'}]
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG3'});
            resolve();
        }, 1000)
    }) 
}
function createBlog(blog) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push(blog);
            resolve();
        }, 1000)
    }) 
}
function userLastActivity(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            var createdAt=new Date().toTimeString();;
            resolve(createdAt);
        }, 1000)
    }) 
}
function printBlogs() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
          blogs.forEach((post) => {
        console.log(post.title)
        resolve()
    })
        }, 1000)
    })
    
}
function deleteBlog(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(blogs.length > 0){
                const poppedElement  = blogs.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR")
            }
        }, 1000)
    })
}
const postAll = async () => {
    const promiseAll=
   await Promise.all([createBlog({title:'Blog3'}),userLastActivity()]);
    console.log('User Last Activity Time' +promiseAll[1]);
    await printBlogs() ;
    const delPost= await deleteBlog();
    console.log('After deletion : ');
     await printBlogs() ;
}

postAll();






