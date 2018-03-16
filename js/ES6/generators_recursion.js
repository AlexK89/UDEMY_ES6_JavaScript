class Comment {
	constructor(content, children = []) {
		this.content = content;
		this.children = children;
	}

	*[Symbol.iterator]() {
		yield this.content;

		for(let child of this.children) {
			yield* child;
		}
	}
}

const children = [
	new Comment('good'),
	new Comment('bad comment', [new Comment('cool 1')]),
	new Comment('meh', [new Comment('cool 2')]),
];

const tree = new Comment('Great article', children);

const result = [];

for (let comment of tree) {
	result.push(comment);
}
console.log(result);