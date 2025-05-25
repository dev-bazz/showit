import { StyleSheet } from 'react-native';
export const SlideOnboardingStyle = (
	width: number,
	height: number,
	paddingTop: number,
) =>
	StyleSheet.create({
		slideItem: {
			flex: 1,
			width,
			backgroundColor: 'blue',
			height,
			paddingTop,
		},
	});
