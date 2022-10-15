const puppeteer = require('puppeteer');
const ans = require('./answer');

const loginLink = "https://www.hackerrank.com/auth/login";
const email = "xiloja@ema-sofia.eu";
const password = "Anujk7171";

async function waitAndClick(selector, page){
    await page.waitForSelector(selector);
    let selectorClicked = await page.click(selector);
    return selectorClicked;
}

async function questionSolver(question, answer, cpage){

    await question.click();
    await waitAndClick('.monaco-editor.no-user-select .vs', cpage);

    await waitAndClick('.checkbox-input', cpage);

    await waitAndClick('textarea[id="input-1"]', cpage);

    await cpage.type('textarea[id="input-1"]', answer); 

    await cpage.keyboard.down('Control'); // down mtlb hold kra hua hai

    await pressKeys('A', cpage);  

    await pressKeys('X', cpage);

    await waitAndClick('.monaco-editor.no-user-select .vs', cpage);

    await pressKeys('A', cpage);

    await pressKeys('V', cpage);

    await cpage.click('button.hr-monaco-submit');
   
}

async function pressKeys(key, cpage){
        let keyIsPressed = await cpage.keyboard.press(key, {delay : 100});  // press mtlb bs press kra => down mtlb press krke rkha hua hai
        return keyIsPressed;
}

async function main(){

    try {
        let browserOpen = await puppeteer.launch({headless: false, defaultViewport: null, args: ['--start-maximized']});

        let newTab = await browserOpen.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[type='text']", email); 
        await newTab.type("input[type='password']", password);
        await newTab.click("button[type='submit']");
        await waitAndClick(".topic-card a[data-attr1='algorithms']", newTab);
        await waitAndClick("input[value='warmup']", newTab);
        let allChallengeArr = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');

        let questionWillSolve= questionSolver(allChallengeArr[0], ans[0], newTab);

    } catch (error) {
        console.log(error);
    }

}

main();

