import React from 'react';
import { Animated, View, useWindowDimensions } from 'react-native';
import { PaginatorOnboardingStyle } from './index.style';

export default function PaginatorOnboarding(prop: {
	items: { title: string }[];
	scrollX: Animated.Value;
	scrollTo: (index: number) => void;
}) {
	const { items, scrollX, scrollTo } = prop;
	const { container, baseDote } = PaginatorOnboardingStyle();
	const { width } = useWindowDimensions();
	return (
		<View style={container}>
			{items.map((_, i) => {
				// animated width for dots
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
				const doWidth = scrollX.interpolate({
					inputRange,
					outputRange: [20, 40, 20],
					extrapolate: 'clamp',
				});
				const doOpacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 1, 0.3],
					extrapolate: 'clamp',
				});
				return (
					<Animated.View
						onTouchEnd={() => scrollTo(i)}
						key={i.toString()}
						style={[baseDote, { width: doWidth, opacity: doOpacity }]}
					/>
				);
			})}
		</View>
	);
}
