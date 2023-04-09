var formPageNumber = 0;

function nextPage() {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "inline";
}

function prevPage() {
    document.getElementById("page-1").style.display = "inline";
    document.getElementById("page-2").style.display = "none";
}