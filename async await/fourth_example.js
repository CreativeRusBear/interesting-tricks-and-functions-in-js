async function getUser() {
    throw "User not found!";
}

async function getAvatarByUsername(userId) {
    const user = await getUser(userId);
    return user.avatar;
}

async function getUserAvatar(username) {
    let avatar = await getAvatarByUsername(username);
    return  {username, avatar};
}

getUserAvatar('CreativeRusBear')
    .then(resolve=>console.log(resolve))
    .catch(reject=>console.error(reject));
