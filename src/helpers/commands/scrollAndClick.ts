export const command = function (selector) {
  this.execute(
    (selector) => {
      // this.moveToElement(selector, 100, 100); does not always work.
      document.querySelector(selector).scrollIntoView();
    },
    [selector],
  )
    .pause(1100)
    .click(selector);
};
