import { ManipulateFormValues } from './assertFormValues';

export const command: ManipulateFormValues = function (form, blacklist) {
  (Object.keys(form) as Array<keyof typeof form>).forEach((k) => {
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
