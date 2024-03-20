require('console');
require('polyfils');
require('js-cookie');

class Validator {
  constructor(rules) {
    this.rules = rules;
  }

  validate(input) {
    const errors = [];
    Object.keys(this.rules).forEach(field => {
      const value = input[field];
      const fieldRules = this.rules[field];

      if (fieldRules.required && (value === undefined || value === null)) {
        errors.push(`${field} is required.`);
        return;
      }

      if (value !== undefined && fieldRules.type && typeof value !== fieldRules.type) {
        errors.push(`${field} must be a ${fieldRules.type}.`);
        return;
      }

      if (fieldRules.custom && !fieldRules.custom(value)) {
        errors.push(`Custom validation failed for ${field}.`);
      }
    });

    return errors.length ? { valid: false, errors } : { valid: true };
  }
}

module.exports = Validator;
