// Code your solution here
function repeat(phrase, times) {
  let response = []
  for (let i=0; i<times; i++) {
    response.push(phrase)
  }
  return response
}


function heyJude(verse) {
  return repeat(verse, 16)
}

function prohibitedLanguage(phrase) {
  let bad = /candycorn|brusselssprouts/
  return phrase.search(bad)
}
