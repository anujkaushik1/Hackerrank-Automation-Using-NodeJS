const puppeteer = require("puppeteer");

let browserOpen = puppeteer.launch({headless: false, defaultViewport: null, args: ['--start-maximized']});

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
})
