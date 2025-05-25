import { Dimensions, PixelRatio, Platform } from 'react-native';
const DESIGN_WIDTH = 320; // Figma reference width
/**
 * ## Adjusts a given size value based on the screen width to ensure consistent sizing across different devices.
 * using a base layout size of 320 for Figma designs.
 * On iOS, the adjusted size is rounded to the nearest pixel. On other platforms,
 * the value is rounded and slightly reduced to account for platform-specific differences.
 *
 * @param size - The original size value to be normalized.
 * @returns The normalized size, adjusted for the current device's screen width.
 */
export const scaleByScreenSize = (
	size: number,
	options?: { min?: number; max?: number },
): number => {
	const { width: screenWidth } = Dimensions.get('window');
	const scale = screenWidth / DESIGN_WIDTH; // 320 is the layout size in Figma
	let newSize = size * scale;
	if (options?.min) {
		newSize = Math.max(newSize, options.min);
	}
	if (options?.max) {
		newSize = Math.min(newSize, options.max);
	}
	const returnValue =
		Platform.OS === 'ios'
			? Math.round(PixelRatio.roundToNearestPixel(newSize))
			: Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
	return returnValue;
};
