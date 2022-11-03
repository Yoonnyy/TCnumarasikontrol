const axios = require("axios")
const generateXml = require("./generateXml")

let foreignURL = "https://tckimlik.nvi.gov.tr/Service/KPSPublicforeignDogrula.asmx";
let tcURL = "https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx";

async function searchID(data) {
	try {
		// determine if id is foreign
		data.foreign = data.id.toString().startsWith("99");
		
		const res = await axios.post(
			data.foreign ? foreignURL : tcURL,
			generateXml(data),
			{
				headers: { "Content-Type": "application/soap+xml" },
			}
		);
		return {
			status: res.status,
			check: res.data.includes("true"),
			req: res,
		};
	} catch (err) {
		console.error(err);
		return {
			status: err.response.status,
			check: err.response.data.includes("true"),
			req: err,
		};
	}
}

module.exports = searchID;