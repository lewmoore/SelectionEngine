var $ = function (selector) {
	let elements = []


	  const div = document.getElementsByTagName('div')
	  const img = document.getElementsByTagName('img')
	  const someClass = document.getElementsByClassName('some_class')
	  const someId = document.getElementById('some_id')

	this.results = [
		{ tag: 'div', action: div},
		{ tag: 'img.some_class', action: img },
		{ tag: '.some_class', action: someClass },
		{ tag: '#some_id', action: someId },
		{ tag: 'div#some_id.some_class', action: someId },
		{ tag: 'div.some_class#some_id', action: someId }
	]

	for (let i = 0; i < this.results.length; i++){
		if (this.results[i].tag == selector && !this.results[i].tag.includes('#')) {
			elements = this.results[i].action
		} else if (this.results[i].tag == selector) {
			elements.push(this.results[i].action)
		}
	}

  return elements
}
