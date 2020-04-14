/**
 * @typedef {Object} FormElement
 * @property {string} selector
 * @property {string} value
 * @property {string?} expectedValue
 * @property {string?} iframeID
 *
 * @example {selector: '#phone', value: '555123333' expectedValue: '' })
 *
 *  Asserts many form values programatically
 *
 * @param {Object} args
 * @param {Object} args.page
 * @param {Object<string, FormElement>} args.form
 * @param {string[]?} args.blacklist
 *
 * @returns {Object} page object
 *
 * @example
 * setAllFormValues({ page: this, form, blacklist: [] })
 */
export const command = function ({ form = {}, blacklist = [] }) {
  Object.keys(form).forEach((k) => {
    const { expectedValue, value, selector, iframeID } = form[k];
    const assertedValue = expectedValue || value;
    if (!blacklist.includes(k)) {
      if (iframeID) {
        return this.api
          .frame(iframeID)
          .assert.value(selector, assertedValue)
          .frame(null);
      } else {
        return this.assert.value(selector, assertedValue);
      }
    }
  });
  return this;
};
