// タイマーIDを格納する変数を宣言
let timer;

//ランダムことこリストを生成する
function getKoOrTo(){

    let randomNum = Math.random();

    if(randomNum < 1/2){
        return "こ"
    }else if(randomNum < 3/4){
        return "と"
    }else{
        return "な"
    }
}

const textRow = document.querySelector("#text");

//一定の間隔で文章を徐々に表示する
function displayText(count, delay){
    let index = 0;
    let letterList = [];

    const intervalId = setInterval(() => {
        if(index < count){
            letterList.push(getKoOrTo());
            textRow.textContent = letterList.join("");
            index++;
        }else{
            clearInterval(intervalId);
        }
    }, delay);
    return intervalId; // タイマーIDを返す
}

const generateBtn = document.querySelector(".generate");
const stopBtn = document.querySelector(".stop")

generateBtn.addEventListener("click", () => {
    // 既存のタイマーをクリア
    clearInterval(timer);

    textRow.textContent = ""

    timer = displayText(3000, 0.1)
});

stopBtn.addEventListener("click", () => {
    textRow.textContent = ""
    clearInterval(timer);
})

