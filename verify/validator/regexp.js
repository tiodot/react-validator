import rules from '../rule/';
import { isEmptyValue } from '../util';

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, source, options) {
  const errors = [];
  const validate = rule.required || (!rule.required && source.hasOwnProperty(rule.field));
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return errors;
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  // callback(errors);
  return errors;
}

module.exports = regexp;
