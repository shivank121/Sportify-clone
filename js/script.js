console.log("hell shivank")

// async function main(){
//     try{
//         let response =  await fetch("http://127.0.0.1:3000/songs/")
//         if(!response.ok){
//             throw new Error(`HTTP error! $ Status: ${response.status}`)
//         }
//         let data = await response.json();
//         console.log("helllcjxlkjvldfhl");
//     } 
//     catch (error) {
//         console.error('Error fetching data:', error);
//     }

    
// }

async function main(){
    let response = await fetch("http:127.0.0.1:3000/songs")
    console.log(response)
}

main()