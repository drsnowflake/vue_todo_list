import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: '#app',
		data: {
			todos: [
				{ item: 'Buy Shopping', priority: 'high' },
				{ item: 'Clean bathroom', priority: 'low' },
				{ item: "Car's MOT", priority: 'high' }
			],
			newTodo: ''
		},
		methods: {
			saveNewTodo: function() {
				this.todos.push({
					item: this.newTodo,
					priority: this.priority
				});
				this.newTodo = '';
			}
		}
	});
});
