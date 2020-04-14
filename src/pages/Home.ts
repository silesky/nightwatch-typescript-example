import { PageObject } from 'nightwatch';

const elements = {
  ageGateContainer: '[id=age-gate-container]',
  ageGateTitleText: '[data-testid=age-gate-title-text]',
  ageGateYesButton: '[data-testid=age-gate-yes-button]',
  leaflyLogoImage: '[data-testid=leafly-logo]',
  newsletterModalCloseButton: '.newsletter__close',
};

const home = {
  url(this: PageObject) {
    return this.api.launchUrl;
  },
  elements,
  commands: [
    {
      bypassAgeGate(this: PageObject) {
        return this.click('@ageGateYesButton').waitForElementPresent(
          'header',
          'header exists.',
        );
      },
    },
  ],
};
export default home;

export type HomePage = PageObject<typeof home>;
