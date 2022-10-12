const puppeteer = require("puppeteer");
const { scrollPageToBottom } = require('puppeteer-autoscroll-down')

let browserOpen = puppeteer.launch({headless: false, defaultViewport: null, args: ['--start-maximized']});
const loginLink = "https://www.hackerrank.com/auth/login";
const email = "gixig48949@inkmoto.com";
const password = "anujk2000";

let cpage;


browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;

}).then(function(newPage){
    cpage = newPage;   // yeh issleye krte hai because hum phir iss cpage ko kahi bhi use kr skte hai
    let goToPromise = cpage.goto(loginLink); // hello
    return goToPromise;

}).then(function(){
    let emailPromise = cpage.type("input[type='text']", email);  // hr baar type ya click krte hi promise milga more than 1 nai kr skte
    return emailPromise;
    
}).then(function(){
    let passPromise = cpage.type("input[type='password']", password);
    return passPromise;
    
}).then(function(){
    let clickedPromise = cpage.click("button[type='submit']");
    return clickedPromise;

}).then(function(){
    let pos = scrollPageToBottom(cpage, {
        size: 500,
      });
    return pos;
})

