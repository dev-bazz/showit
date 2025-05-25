import { ONBOARDING_SCREEN } from '@/const/onboarding';
import { useCallback, useRef, useState } from 'react';
import {
	Animated,
	FlatList,
	View,
	type ViewToken,
} from 'react-native';
import SlideViewOnboarding from './slide';

const OnboardingModule = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const viewableItemChange = useCallback(
		({ viewableItems }: { viewableItems: ViewToken[] }) => {
			setCurrentIndex(viewableItems[0].index as number);
		},
		[],
	);
	return (
		<View>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				snapToAlignment="start"
				pagingEnabled
				bounces={false}
				snapToStart
				data={ONBOARDING_SCREEN}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<SlideViewOnboarding title={item.title} />
				)}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false },
				)}
				onViewableItemsChanged={viewableItemChange}
				viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
				scrollEventThrottle={32}
			/>
		</View>
	);
};

export default OnboardingModule;
