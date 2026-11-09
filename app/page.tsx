import Hero from "./components/home/Hero";
import SearchBar from "./components/search/SearchBar";
import CategoryGrid from "./components/home/CategoryGrid";
import FeaturedProducts from "./components/home/FeaturedProducts";
import PromoBanner from "./components/home/PromoBanner";
import PopularProducts from "./components/home/PopularProducts";
import BrandStrip from "./components/home/BrandStrip";
import WhyChooseUs from "./components/home/WhyChooseUs";
import {
  getBrands,
  getCategories,
  getFeaturedProducts,
  getPopularProducts,
  getSiteInfo,
} from "@/lib/api";
import VisitUs from "./components/home/VisitUs";

export default async function Home() {
  const [site, categories, featured, popular, brands] = await Promise.all([
    getSiteInfo(),
    getCategories(),
    getFeaturedProducts(4),
    getPopularProducts(4),
    getBrands(),
  ]);

  return (
    <>
      <Hero site={site} />
      
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
          <SearchBar />
        </div>
      <section className="bg-surface">
      <CategoryGrid categories={categories} />
      </section>
      <FeaturedProducts products={featured} whatsapp={site.whatsapp} />
      <section className="bg-surface">
      <PromoBanner promo={site.promo} />
      </section>
      <PopularProducts products={popular} whatsapp={site.whatsapp} />
      <BrandStrip brands={brands} />
      <WhyChooseUs  />
      <section className="bg-surface">
      <VisitUs site={site} />
      </section>
    </>
  );
}