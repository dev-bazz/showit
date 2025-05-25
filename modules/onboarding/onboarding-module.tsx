import { ONBOARDING_SCREEN } from '@/const/onboarding';
import { useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';
import PaginatorOnboarding from './paginator';
import SlideViewOnboarding from './slide';

const OnboardingModule = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
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
				onViewableItemsChanged={({ viewableItems }) => {
					setCurrentIndex(viewableItems[0].index as number);
				}}
				viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
				scrollEventThrottle={32}
			/>
			<PaginatorOnboarding scrollX={scrollX} items={ONBOARDING_SCREEN} />
		</View>
	);
};

export default OnboardingModule;
