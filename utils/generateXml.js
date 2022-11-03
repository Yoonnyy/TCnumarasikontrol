function generateXml(data) {
	let { id, name, surname, birthYear, birthMonth, birthDay, foreign } = data;

	if (foreign) {
		return `<?xml version="1.0" encoding="utf-8"?>
		<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
		  <soap12:Body>
			<YabanciKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">
			  <KimlikNo>${id}</KimlikNo>
			  <Ad>${name}</Ad>
			  <Soyad>${surname}</Soyad>
			  <DogumGun>${birthYear}</DogumGun>
			  <DogumAy>${birthMonth}</DogumAy>
			  <DogumYil>${birthDay}</DogumYil>
			</YabanciKimlikNoDogrula>
		  </soap12:Body>
		</soap12:Envelope>`;
	}

	return `<?xml version="1.0" encoding="utf-8"?>
		<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
		<soap12:Body>
		<TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">
		<TCKimlikNo>${id}</TCKimlikNo>
		<Ad>${name}</Ad>
		<Soyad>${surname}</Soyad>
		<DogumYili>${birthYear}</DogumYili>
		</TCKimlikNoDogrula>
		</soap12:Body>
		</soap12:Envelope>`;
}

module.exports = generateXml;