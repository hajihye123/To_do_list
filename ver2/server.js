// server.js
// express server
// express 모듈 불러오기
const express = require("express");
const path = require("path");

// express 사용
const app = express();

// server.js 의 실행경로 + "/static"을 localhost:port/static으로 마운트
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// get 요청이 오면 frontend/index.html 파일을 읽고 클라이언트로 전송
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

// port 생성 서버 실행(포트번호 3000에서 실행)
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));