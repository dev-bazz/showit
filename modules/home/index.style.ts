import { normalizer } from '@/helpers';
import { StyleSheet } from 'react-native';
export const homePageStyle = () =>
	StyleSheet.create({
		welcomeText: {
			fontSize: normalizer.scaleByScreenSize(18, { max: 32 }),
		},
	});
