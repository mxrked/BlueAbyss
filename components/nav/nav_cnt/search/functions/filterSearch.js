export default function filterSearch() {
  var ipt, filter, links, links_li, link, i, txtVal;

  ipt = document.getElementById("searchIpt");
  filter = ipt.value.toUpperCase();
  links = document.getElementById("searchLinks");
  links_li = links.getElementsByTagName("li");

  for (i = 0; i < links_li.length; i++) {
    link = links_li[i].getElementsByTagName("a")[0];

    txtVal = link.textContent || link.innerText;

    if (txtVal.toUpperCase().indexOf(filter) > -1) {
      links_li[i].style.display = "";
    } else {
      links_li[i].style.display = "none";
    }
  }
}
