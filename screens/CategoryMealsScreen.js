import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        onSelectMeal={() => props.navigation.navigate('MealDetail')}
      />
    );
  };
  const catID = props.navigation.getParam('categoryID');
  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catID) >= 0,
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        style={{width: '93%'}}
      />
    </View>
  );
};

export default CategoryMealScreen;

CategoryMealScreen.navigationOptions = navigationData => {
  const catID = navigationData.navigation.getParam('categoryID');
  const selectCategory = CATEGORIES.find(cat => catID === cat.id);
  return {
    headerTitle: selectCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
