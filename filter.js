let API_KEY = "AIzaSyCPv_4bGP9tBWXOkFwEXFhnSkinBxLOclE";
let query;
let getData = async () => {
    try {
        query = document.getElementById("query").value;
        let res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20&videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN`
        );
        // `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${query}&key=${API_KEY}&maxResults=20`

        let { items } = await res.json();

        let array_of_vedios = items;
        console.log("array_of_vedios:", array_of_vedios);
        appendVedios(array_of_vedios);
        // localStorage.setItem("youData",JSON.stringify(array_of_vedios))
    } catch (error) {
        console.log("error:", error);
    }
};

let appendVedios = (data) => {
    let container = document.getElementById("search_results");
    container.innerHTML = " ";

    data.forEach(
        (
            {
                snippet: { title },
                snippet: {
                    thumbnails: {
                        high: { url },
                    },
                },
                id: { videoId },
            },
            index
        ) => {
            // let title=el.snippet.title
            // let vedioId=el.id.vedioId
            let div = document.createElement("div");
            div.addEventListener("click", function () {
                localStorage.setItem("yData", JSON.stringify(data[index]));
                window.location.href = "play.html";
                // localStorage.setItem("yData",JSON.stringify(videoId))
            });
            let image = document.createElement("img");
            image.src = url;

            let iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.width = "100%";
            iframe.height = "60%";
            iframe.allow = "fullscreen";

            let head = document.createElement("h4");
            head.innerText = title;
            head.style.margin = "20px";
            head.style.lineHeight = "25px";
            div.append(image, head);
            container.append(div);
        }
    );
};
// let API_KEY = "AIzaSyCPv_4bGP9tBWXOkFwEXFhnSkinBxLOclE";

let getDataa = async () => {
    try {
        let query = document.getElementById("query").value;
        let res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${query}&key=${API_KEY}&maxResults=20`
        );

        let { items } = await res.json();

        let array_of_vedios = items;
        console.log("array_of_vedios:", array_of_vedios);
        appendVedios(array_of_vedios);
        localStorage.setItem("popular", JSON.stringify(array_of_vedios));
    } catch (error) {
        console.log("error:", error);
    }
};
let popularArr = JSON.parse(localStorage.getItem("popular"));
console.log("popuarArr:", popularArr);

let appendVedioss = (popularArr) => {
    let container = document.getElementById("search_results");
    container.innerHTML = " ";

    popularArr.forEach(
        ({ snippet: { title }, snippet: { channelTitle }, id }, index) => {
            console.log("videoId:", id);
            // let title=el.snippet.title
            // let vedioId=el.id.vedioId
            let div = document.createElement("div");
            div.setAttribute("id", "dis");
            // div.addEventListener("click",function(){
            //     localStorage.setItem("yData",JSON.stringify(data[index]))
            //     window.location.href="play.html"
            //     // localStorage.setItem("yData",JSON.stringify(videoId))

            // })
            // let image=document.createElement("img");
            // image.src=url

            let iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${id}`;
            iframe.width = "100%";
            iframe.height = "60%";
            iframe.allow = "fullscreen";

            let head = document.createElement("h4");
            head.innerText = title;
            head.style.margin = "20px";
            head.style.lineHeight = "25px";
            let channel = document.createElement("p");
            channel.innerText = channelTitle;

            div.append(iframe, head, channel);
            container.append(div);
        }
    );
};
appendVedioss(popularArr);
// function sorthl(){
//     let sort=popularArr.sort(function(a,b){
//         if(a.cha))>b.(Number(cha))){
//             return 1
//         // }else if(a.Number(cha)<b.Number(cha)){
//         //     return -1
//         // }else{
//         //     return 0
//         // }

//     })
//     console.log('sort:', sort)
//     appendVedioss(sort);

// }

let filterFunc = () => {
    // popularArr.forEach(({snippet:{channelTitle}})=>{
    //     popularArr.sort(function(a,b){
    //         let x=a.channelTitle.toLowerCase()
    //         let y=b.channelTitle.toLowerCase()
    //         if(x>y) return 1;
    //         if(x<y) return -1;
    //         return 0;
    //         console.log('channelTitle:', channelTitle)
    //     })
    // console.log('popularArr:', popularArr)
    // // console.log('channelTitle:', popularArr)
    // let fill=document.getElementById("filId").value;
    // popularArr.filter({snippet:{channelTitle}})=>{
    //     return channelTitle.toLowerCase().includes(fill)
    // }
    // })
};