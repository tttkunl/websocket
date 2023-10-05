var list = document.getElementById("list")
var content = document.getElementById("content")
var btn = document.getElementById("btn")
var title = document.getElementById("title")
var heavy = document.getElementById("heavy")


btn.addEventListener("click",function(){
    list.innerHTML=list.innerHTML +`
    <div class="article">
        <table></table>
        <h2>${title.value}</h2>
        <p>${content.value}</p>
    </div>    
    `;
})
