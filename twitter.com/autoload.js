setInterval(function() {
  if (window.scrollY) return
  var bar = document.querySelector('.new-tweets-bar')
  if (!bar) return
  bar.click()
}, 1000)
