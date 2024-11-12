import {
  CarouselHome,
  Categories,
  FeaturedProducts,
} from "../../components/index";

export const Home = () => {
  return (
    <main className="container mx-auto">
      <CarouselHome />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </main>
  );
};
