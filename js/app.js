const copy = document.getElementById('copy');
copy.addEventListener('click', function () {
  copy.innerText = "copied to Clipboard";
  setTimeout(() => {
    copy.innerHTML = ` Get the link
      <span> <i class="far fa-clipboard"></i></span>`;
  }, 1000);
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

document.addEventListener('keydown', function (event) {

  console.log(event);
  if (event.which == 123)
    document.querySelector('#openModal').click();
  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
    document.querySelector('#openModal').click();
  else if (event.ctrlKey && event.which == 85)
    document.querySelector('#openModal').click();


});


document.oncontextmenu = function () {
  return false;
}

document.onkeydown = function (event) {
  if (event.which == 123)
    return false;
  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
    return false;
  else if (event.ctrlKey && event.which == 85)
    return false;
}
