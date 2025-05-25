import { Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SlideOnboardingStyle } from './index.style';

const SlideViewOnboarding = (prop: { title: string }) => {
	const { width, height } = useWindowDimensions();
	const { top } = useSafeAreaInsets();
	const { slideItem } = SlideOnboardingStyle(width, height, top);
	const { title } = prop;
	return (
		<View style={slideItem}>
			<Text>{title}</Text>
		</View>
	);
};

export default SlideViewOnboarding;
