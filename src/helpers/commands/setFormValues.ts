/*
 * Sets many form values programatically
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
    const { value, selector, iframeID } = form[k];
    if (!blacklist.includes(k)) {
      if (iframeID) {
        return this.api.frame(iframeID).setValue(selector, value).frame(null);
      }
      return this.api.setValue(selector, value);
    }
  });
  return this;
};
