const fetch=require('node-fetch');

//async function getUser(id){ //пишем async, так как в теле ф-ии имеется ключ. слово await
const getUser = async (id)=>{
	try{
		let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);//используем await, так как fetch возвращает Promise 
		let data = await response.json();
		return data;
	}catch {
		throw new Error('Не удалось загрузить данные о пользователе');
	}
	
}

async function main(){
	try{
		let user = await getUser(1);
		console.log(user);
	}catch (err){
		console.error(err);
	}
}

main();