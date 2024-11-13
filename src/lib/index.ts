// place files you want to import through the `$lib` alias in this folder.

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
export const clamp: (target: number, min: number, max: number) => number = function (
	target: number,
	min: number,
	max: number
) {
	return Math.min(Math.max(target, min), max);
};
