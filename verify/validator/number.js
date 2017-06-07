import rules from '../rule/';
import {isEmptyValue} from '../util';

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, source, options) {
    const errors = [];
    const validate = rule.required || (!rule.required && source.hasOwnProperty(rule.field));
    if (validate) {
        if (isEmptyValue(value) && !rule.required) {
            return errors;
        }
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    // callback(errors);
    return errors;
}

module.exports = number;