

/**
 * Function to mimic the CSS clamp function
 * @param {string} min the minimal value for the component
 * @param {string} value the preferred value for the component
 * @param {string} max the maximum value for the component
 * @returns the clamped value
 */
export function clamp(min, value, max) {
    return Math.max(parseFloat(min), Math.min(parseFloat(value), parseFloat(max)));
}
