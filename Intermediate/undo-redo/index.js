const undoRedo = (obj) => {
    return {
		set: (key, value) =>  obj[key] = value,
		get: (key) => obj[key],
		del: (key) => delete obj[key],
		undo: () => ,
		redo: function() {}
	};
}

const unRe = undoRedo({x: 1, y: 2});

unRe.set('y', 10);
console.log(unRe.get('y'));


export default undoRedo;
