import { isRejectedWithValue } from "@reduxjs/toolkit";

/**
 * Validate number between min and max
 * @param {number} min
 * @param {number} max
 * @param {boolean} [isRequired=false]
 * @returns {(Error | ErrorType|String)}
 */
const numberBetween = (min, max, isRequired = false) => {
  return (props, propName, componentName) => {
    const propValue = props[propName];
    if (isRequired) {
      if (!propValue) {
        return new Error(`Prop ${propName} is required on ${componentName}`);
      }
    }
    if (propValue) {
      if (typeof propValue !== "number") {
        return new Error(
          `Prop ${propName} must be a number on ${componentName}`
        );
      }
      if (propValue < min || propValue > max) {
        return new Error(
          `Prop ${propName} value must be in ` +
            `${min} and ${max} on ${componentName}`
        );
      }
    }
  };
};
const Validators = {
  numberBetween,
};
export default Validators;
