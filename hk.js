const puppeteer = require("puppeteer");

let browserOpen = puppeteer.launch({headless: false, defaultViewport: null, args: ['--start-maximized']});
const loginLink = "https://www.hackerrank.com/auth/login";
const email = "gixig48949@inkmoto.com";
const password = "anujk2000";

let cpage;

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;

}).then(function(newPage){
    cpage = newPage;   
    let goToPromise = cpage.goto(loginLink); 
    return goToPromise;

})
