class Repo {
    static getName(){
        return "Repo name is modern-js-cheatsheet";
    }
    static modifyName(){
        return `${this.getName()}-added-this`
    }
    useName(){
        return `${Repo.getName()} and it contains some really important stuff`;
    }
}

console.log(Repo.getName());
console.log(Repo.modifyName());
let repo=new Repo();
console.log(repo.useName());//success
console.log(repo.getName());//error

