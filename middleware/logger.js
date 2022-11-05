const fs = require('node:fs/promises');

module.exports = async (req, res, next) => {
	let { method, path, ip } = req;
	let date = new Date();
	await fs.appendFile("./log", `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${method} ${path} ${ip} \n`);
	next()
} 