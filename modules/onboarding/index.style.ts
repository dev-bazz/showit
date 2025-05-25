import { scaleByScreenSize } from '@/helpers/normalizer.fn';
import { StyleSheet } from 'react-native';
export const SlideOnboardingStyle = (
	width: number,
	height: number,
	paddingTop: number,
) =>
	StyleSheet.create({
		slideItem: {
			flex: 3,
			width,
			backgroundColor: 'blue',
			height,
			paddingTop,
		},
	});

export const PaginatorOnboardingStyle = () =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			height: 20,
			position: 'absolute',
			width: '100%',
			bottom: '5%',
			justifyContent: 'center',
			gap: scaleByScreenSize(8),
		},
		baseDote: {
			backgroundColor: 'red',
		},
		activeDot: {
			backgroundColor: '#fff',
		},
	});
