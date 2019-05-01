
function heyJude(verse) {
  return verse.repeat(16)
}

function prohibitedLanguage(username) {
  const words = /candycorn|brusselssprouts/
  return username.search(words)
}
