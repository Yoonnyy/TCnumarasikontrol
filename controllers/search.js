const searchID = require("../utils/searchID")

module.exports = async (req, res) => {
	try {
		let { id, name, surname, birthYear, birthMonth, birthDay } = req.body;
		
		// check empty/null/undefined values
		if (
			!id ||
			!name ||
			!surname ||
			!birthYear ||
			!birthMonth ||
			!birthDay
		) {
			return res.status(400).json({
				message: "TC / Isim / Soyad / Dogum tarihi hatali veya eksik.",
			});
		}

		// check id length
		if (id.toString().length != 11) {
			return res
				.status(400)
				.json({ message: "TC kimlik numarasi 11 haneli olmalidir." });
		}

		// check birthYear
		const tarih = new Date();

		if (
			birthYear.toString().length != 4 ||
			birthYear > tarih.getFullYear()
		) {
			return res.status(400).json({ message: "hatali yil girdiniz.." });
		}

		const resp = await searchID({
			id,
			name,
			surname,
			birthYear,
			birthMonth,
			birthDay,
		});
		
		// check response status code to determine problems
		if (resp.status > 200) {
			console.log(resp.check);
			return res
				.status(resp.status)
				.json({ message: resp.req.response.statusText });
		}

		res.status(200).json({ check: resp.check});
	} catch (err) {
		console.error(err);
	}
};
