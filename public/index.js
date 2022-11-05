(() => {
	const form = document.querySelector("#form");
	const [ id, name, surname, date ] = form;

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
	
		// split data to YY[0] MM[1] DD[2] 
		const splitDate = date.split("-");
		
		// make the request
		const request = await axios.post("/search", {
			id: id.value,
			name: name.value,
			surname: surname.value,
			birthYear: splitDate[0],	
			birthMonth: splitDate[1],
			birthDay: splitDate[2],
		} )
		
		console.log(request)
	})
})()
