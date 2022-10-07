
var container = document.getElementById('containerContact');
//var tit = document.getElementsById("hiding");

window.addEventListener('scroll', ()=>{
    //alert(window.getComputedStyle(container).top);
        var containerTop = container.getBoundingClientRect().top;
        var windowheight = window.innerHeight ;
        var revealpoint = 150;
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
            var quiry = "<button type='button'  onclick='hidetheItem()'>Close</button> <div> <div>";
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
    disableScroll();
    setTimeout(()=>{
        ItemsContent.style.transform =" translateY(00px)";

        },10)
}

hidetheItem = () => {
    ItemsContent.style.transform =" translateY(1600px)";
    enableScroll();
    setTimeout(()=>{
    ItemsContent.style.display ="none";
    },500)
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


 function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(0, scrollTop);
    };
    
    }

    function enableScroll() {
    window.onscroll = function() {};
    }
 

    hidethecotact = () => {
        document.getElementById("CotactForm").style.transform = "translate(-50%, 100%)";
        //setTimeout(() => {
        //document.getElementById("CotactForm").style.display = "none";
        //}, 1000);
        enableScroll();

    }
    ShowCotact = () => {
        //document.getElementById("CotactForm").style.display = "inline-block";
        //setTimeout(() => {
            document.getElementById("CotactForm").style.transform = "translate(-50%, -50%)";
        //}, 10);        

        disableScroll();
    }






copynumber = () => {
    navigator.clipboard.writeText("+212 700564216");
    alert("Number is copyed +212 700564216");
}