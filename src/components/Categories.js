import { View, Text, ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://img.livestrong.com/375/cme-data/getty%2F1c5230aa716042b788a0c75483d78691.jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-1024x683.jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-1024x683.jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-1024x683.jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-1024x683.jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-1024x683.jpg"
        title="testing"
      />
      <CategoryCard
        imgUrl="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-1024x683.jpg"
        title="testing"
      />
    </ScrollView>
  );
};

export default Categories;
