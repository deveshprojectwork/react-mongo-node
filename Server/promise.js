// // let p = new Promise((resolve, reject) =>{
// //     let a = 1+2

// //     if(a==2){
// //         resolve("Sucess")
// //     }else{
// //         reject("Failed")
// //     }
// // })

// // //p.then is used for resolve,  any thing in then will be used for resolve
// // //.catch help to catch the error 
// // p.then((message)=>{
// //     console.log("this is the then " + message)
// // }).catch((message)=>{
// //     console.log("This is in the catch "+message)
// // })
// /////////////Promise replace the callback funcation /////////////////////////////////////////
// const userLeft = true
// const userWatchingCatMeme = false

// function watchingTutCallback(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: "User Left",
//             message: ":("
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: "user wathing Cat Meme",
//             message: "WebDeb< Cat"
//         })
//     }
//     else{
//         callback("Thumbs up and Scuscribe")
//     }
// }

// watchingTutCallback((message)=>{
//     console.log("success : " + message)
// },(error) =>{
//     console.log(error.name, "" + error.message)
// })


//////////////Promiss conversion

const userLeft = true
const userWatchingCatMeme = false

function watchingTutPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name: "User Left",
                message: ":("
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: "user wathing Cat Meme",
                message: "WebDeb< Cat"
            })
        }
        else{
            resolve("Thumbs up and Scuscribe")
        }
    })
}

watchingTutPromise().then((message)=>{
    console.log("Success : " + message)
}).then((message)=>{
    console.log("Success:" + message)
}).catch((error) =>{
    console.log(error.name, "" + error.message)
})
//////show all one by one if there is no error and they ran asyncroniously in background//////////
const recordVideoOne = new Promise((resolve,reject) =>{
    resolve("Video 1 Recorded")
})

const recordVideoTwo = new Promise((resolve,reject) =>{
    resolve("Video 2 Recorded")
})

const recordVideoThree = new Promise((resolve,reject) =>{
    resolve("Video 3 Recorded")
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
}).catch((message)=>{
    console.log(message)
})