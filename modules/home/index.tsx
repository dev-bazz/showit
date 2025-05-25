import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { homePageStyle } from './index.style';

const HomePageModule = () => {
	const { welcomeText } = homePageStyle();
	return (
		<View>
			{/* Add your content here */}
			<Text style={welcomeText}>Hello World</Text>
			<Link href={'/onboarding'}> Onboarding</Link>
		</View>
	);
};

export default HomePageModule;
