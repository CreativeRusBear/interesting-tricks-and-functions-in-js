async function getGithubUser(username) {
// ключевое слово async позволяет использовать await в функции, которая возвращает промис
    const response =await fetch(`https://api.github.com/users/${username}`);// выполнение приостановлено до момента получения ответа от переданного промиса
    return  response.json();
}

getGithubUser('CreativeRusBear')
    .then(user=>console.log(user))// ответ пользователя, проходящего авторизацию: синтаксис await невозможно использовать, поскольку код не является асинхронной функцией
    .catch(err=>console.log(err));
