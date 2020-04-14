import { NightwatchTests, NightwatchBrowser } from 'nightwatch';

const home: NightwatchTests = {
  '@tags': ['home', 'sethsilesky'], // tags should reference the project that this will run for (e.g web-reservations) and the name of the owner (e.g. who to contact if it breajs)
  'navigate to home page': (browser: NightwatchBrowser) => {
    // if we define all page objects in nightwatch.d.ts, Home will always appear on the Browser.page object.
    const Home = browser.page.Home();
    Home.navigate();
    Home.waitForElementPresent('@ageGateTitleText', 'age gate title exists.');
    Home.bypassAgeGate();
    Home.waitForElementPresent('@leaflyLogoImage', 'logo exists.');
  },
};

export default home;
