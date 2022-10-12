// let checkbox = document.querySelectorAll("#checkbox");

// checkbox.forEach((ele) =>{
//     ele.addEventListener('change', function(e){
//         if(e.target.parentElement.querySelector("p")){
//             e.target.parentElement.querySelector("p").classList.toggle("line-through")
//         }
//     })
// })



{/* <div class="item flex space-x-2 items-center justify-left py-2">
    <input type="checkbox" name="" class="w-4 h-4 mx-3 my-1" id="checkbox">
    <p class="text-2xl text-white item-text">abcd</p>
</div> */}

function item(txt){
    let div = document.createElement("div");
    div.classList.add("item", "flex", "space-x-2", "items-center", "justify-left", "py-2");

    let input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id","checkbox");
    input.setAttribute("name","");
    input.classList.add("w-4", "h-4", "mx-3", "my-1");

    let p = document.createElement("p");
    p.classList.add("text-2xl", "text-white", "item-text");
    p.innerText = txt;

    div.append(input);
    div.append(p);

    document.querySelector("#lists").append(div);

}


document.querySelector("#add").addEventListener("click", function(e){
    let txt = document.querySelector("#text").value;
    
    if(txt){
        item(txt);


        let checkbox = document.querySelectorAll("#checkbox");
        checkbox.forEach((ele) =>{
            ele.addEventListener('change', function(e){
                if(e.target.checked){
                    e.target.parentElement.querySelector("p").classList.add("line-through")
                }
                else{
                    e.target.parentElement.querySelector("p").classList.remove("line-through")
                }


            })
        })

        document.querySelector("#text").value = "";
    }


})
