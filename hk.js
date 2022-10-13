const puppeteer = require("puppeteer");

let browserOpen = puppeteer.launch({headless: false, defaultViewport: null, args: ['--start-maximized']});
const loginLink = "https://www.hackerrank.com/auth/login";
const email = "gixig48949@inkmoto.com";
const password = "anujk2000";

let cpage;
//div[data-automation="algorithms"]


// const scrollDownAuto = async (page) => {
//     previousHeight = await page.evaluate("document.body.scrollHeight");
//     console.log("Previous height :", previousHeight);
    // await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
    
  
//     // await page.waitForFunction(
//     //   `document.body.scrollHeight > ${previousHeight}`
//     // );
//     // await new Promise((resolve) => setTimeout(resolve, 1000));
//   };



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
    let clickOnAlgoPromise = waitAndClick(".topic-card a[data-attr1='algorithms']", cpage);
    return clickOnAlgoPromise;
      
}).then(function(){
    let clickedWarmupPromise = waitAndClick("input[value='warmup']", cpage);
    return clickedWarmupPromise;
})

function waitAndClick(selector, page){
    return new Promise(function(resolve, reject){
        let waitForModelPromise = page.waitForSelector(selector);
        waitForModelPromise.then(function(){
            let clickModel = page.click(selector);
            return clickModel;

        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}