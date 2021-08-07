class App {
	constructor(app) {
		this.app = app;
	}

	async run({ port }) {

		const server = require('http').createServer(this.app.callback());

		server.listen(port, () => {
			console.info(`Server is running on port : ${port}`);
		});
	}
}

module.exports = App;

