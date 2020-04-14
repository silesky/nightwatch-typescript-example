module.exports.command = async function (selector) {
  return new Promise((resolve) =>
    this.elements('css selector', selector, (result) => {
      const isPresent = result.status === 0 && result.value.length > 0;
      if (isPresent) {
        this.click(selector);
      }
      resolve(this);
    }),
  );
};
