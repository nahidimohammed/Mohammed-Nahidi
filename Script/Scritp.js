var container = document.getElementById('containerContact');
//var tit = document.getElementsById("hiding");

window.addEventListener('scroll', ()=>{
    //alert(window.getComputedStyle(container).top);
        var containerTop = container.getBoundingClientRect().top;
        var windowheight = window.innerHeight ;
        var revealpoint = 110;
        if (containerTop == 0 ){
                document.getElementById('hiding1').style.display = "none";
                document.getElementById('hiding2').style.display = "none";
                document.getElementById('hiding3').style.display = "none";
            
        }
        else if (containerTop > 100){
            document.getElementById('hiding1').style.display = "block";
            document.getElementById('hiding2').style.display = "block";
            document.getElementById('hiding3').style.display = "block";
        }
        
})
displaytheItem = (name) => {
    ItemsContent.innerHTML = "";
    fetch('indes.json')
        .then((response) => {
            return response.json()
            
        })
        .then((results) => {
            var quiry = "<button onclick='hidetheItem()'>Close</button> <div> <div>";
            for(let result of results){
                if (result.domain == name ){
                    for (let item of result.parops){
                        quiry += `<div><h1>${item.head}</h1> <p>${item.p}</p></div>`
                    }
                }
            }
            ItemsContent.innerHTML =  quiry+"</div></div>";
        });
    ItemsContent.style.display ="block";
    setTimeout(()=>{
        ItemsContent.style.transform =" translateY(00px)";

        },10)
}

hidetheItem = () => {
    ItemsContent.style.transform =" translateY(700px)";
    setTimeout(()=>{
    ItemsContent.style.display ="none";
    },1000)
}
/*
document.addEventListener('click', e => {
    console.clear()
    console.log(document.elementFromPoint(e.clientX, e.clientY).id +"//"+ ItemsContent.style.display);
    if (document.elementFromPoint(e.clientX, e.clientY).id != "ItemsContent" && ItemsContent.getBoundingClientRect().display != "none" )
    {
        alert("hello");
    }
  }, {passive: true})
  */