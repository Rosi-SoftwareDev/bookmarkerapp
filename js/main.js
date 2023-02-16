document.getElementById("myForm").addEventListener("submit", savebookmark);

function savebookmark(e) {
  //prevant bookmark//
  let siteName = document.getElementById("siteName").value;
  let siteUrl = document.getElementById("siteUrl").value;

  let bookmark = {
    name: siteName,
    url: siteUrl,
  };
  /*
  let bookMarks = [];
  bookMarks.push(bookMark);
  console.log(bookMarks); */

  //test if book mark is null

  if (localStorage.getItem("bookmarks") === null) {
    let bookmarks = [];
    bookmarks.push(bookmark);
    //console.log(bookMarks);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  fetchBookmarks()
  e.prevantDefault();

}


function deleteBookmark(url) {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop through the bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks()
}

function fetchBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  let bookmarksResults = document.getElementById('bookmarksResults');
  bookmarksResults.innerHTML = "";
  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;
    bookmarksResults.innerHTML +=
      '<div class = "well">' +
      "<h3>" +
      name +
      '<a class = "btn btn-default" target = "_blank" href= "' + url + '">visit</a>' +
      '<a onclick = "deleteBookmark(\'' + url + '\')" class = "btn btn-danger" target = "_blank" href= "#">delete </a>' +
      '</h3>';
    '</div>';
  }


}


/*
  let bookmarksResult = document.getElementById("bookmarksResults");
  bookmarksResult.innerHTML = "";

  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;
  }

  bookmarksResult.innerHTML +=
    '<div class = "well">' +
    "<h3>" +
    name +
    '<a class = "btn btn-default" target = "_blank" href= "' +
    url +
    '">visit</a>' +
    "<a onclick =\"deleteBookmark('" +
    url +
    '\')" class = "btn btn-danger" target = "_blank" href= "#">delete</a>' +
    "</h3>";
  "</div>";
}
*/