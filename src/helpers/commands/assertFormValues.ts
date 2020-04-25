import { Nightwatch } from 'nightwatch';

type FormElement = {
  selector: string;
  value: string;
  expectedValue: string;
  iframeID?: string;
};

type Blacklist = string[];

export type ManipulateFormValues = (
  this: Nightwatch,
  form: Record<string, FormElement>,
  blacklist: Blacklist,
) => Nightwatch;

export const command: ManipulateFormValues = function (form, blacklist) {
  (Object.keys(form) as Array<keyof typeof form>).forEach((k) => {
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
