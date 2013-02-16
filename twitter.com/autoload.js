setInterval(function() {
  if (window.scrollY) return

  var bar = document.querySelector('.new-tweets-bar')
  if (!bar) return

  var tweet = document.querySelector('.stream-item[data-item-type=tweet]')
  bar.click()
  window.scrollTo(window.scrollX, tweet.getBoundingClientRect().top + window.scrollY - 50)
}, 1000)
