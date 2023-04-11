//express 모듈 불러오기
const express = require("express");

//express 사용
const app = express();

/**
 * @path http://localhost:3000/ 경로
 */
app.get("/", (req, res) => {
    res.send("모두의 이력서 서버입니다!");
});

// http listen port 생성 서버 실행
app.listen(80, () => {
    console.log("Server is Running...");
});