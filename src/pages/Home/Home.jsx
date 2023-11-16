import {
  CarouselHome,
  FeaturedProducts,
  Categories,
} from "../../components/index";

export const Home = () => {
  return (
    <>
      <CarouselHome />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </>
  );
};
