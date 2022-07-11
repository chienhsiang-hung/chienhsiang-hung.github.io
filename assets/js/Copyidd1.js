function Copyidd1() {
    var copyText = document.getElementsByClassName("idd2");
    navigator.clipboard.writeText( copyText[0].innerHTML );
  
    document.getElementById('myTooltip').style.width = "200px";
    var tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = "Copied: " + copyText[0].innerHTML;
}
function outCopyidd1() {
    document.getElementById('myTooltip').style.width = "140px";
    var tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = "Copy to clipboard";
}