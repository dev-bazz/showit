import { ONBOARDING_SCREEN } from '@/const/onboarding';
import { useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';
import PaginatorOnboarding from './paginator';
import SlideViewOnboarding from './slide';

const OnboardingModule = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const sliderRef = useRef<FlatList>(null);
	const scrollToIndicator = (index: number) => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollToIndex({
			index,
			animated: true,
		});
	};
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				ref={sliderRef}
				showsHorizontalScrollIndicator={false}
				horizontal
				pagingEnabled
				bounces={false}
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
					const index = viewableItems[0]?.index;

					if (index) {
						setCurrentIndex(index);
						console.log(currentIndex);
					}
				}}
				viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
				scrollEventThrottle={32}
			/>
			<PaginatorOnboarding
				scrollX={scrollX}
				items={ONBOARDING_SCREEN}
				scrollTo={scrollToIndicator}
			/>
		</View>
	);
};

export default OnboardingModule;
