async function create(data){
	await axios.post("http://localhost:8080/data/barang", data)
	.then((result) => {
			console.log(result)
			return result.data
	}).catch((err) => {
			console.error(err)
	});
}

function getAll(){
	const respon = axios.get("http://localhost:8080/data/barang")
	const dr = respon.then(resp => resp.data)
	return dr

}

function getbyId(data){
	const respon = axios.get("http://localhost:8080/data/barang", data)
	// const dr = respon.then(resp => resp.data)
	// return dr
	.then((result) => {
		console.log(result)
		return result.data
	}).catch((err) => {
			console.error(err)
	});

}

async function update(data){
	await axios.put("http://localhost:8080/data/barang", data)
	.then((result) => {
			console.log(result)
			return result.data
	}).catch((err) => {
			console.error(err)
	});
}

async function del(data){
	await axios.delete("http://localhost:8080/data/barang", data)
	.then((result) => {
			console.log(result)
			return result.data
	}).catch((err) => {
			console.error(err)
	});
}