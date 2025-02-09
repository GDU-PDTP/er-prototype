const sidebar = document.querySelector(".sidebar");
fetch("/usersidepanel.html") // only works when using localweb server
.then(res=>res.text())
.then(data=>{
    sidebar.innerHTML=data
});