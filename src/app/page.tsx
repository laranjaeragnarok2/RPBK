import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSlider } from '@/components/events/hero-slider';
import { FeaturedEventCountdown } from '@/components/events/countdown';
import { SocialFeed } from '@/components/social/social-feed';
import { ImageGallery } from '@/components/gallery/image-gallery';
import { BarProducts } from '@/components/products/bar-products';
import { HouseRules } from '@/components/layout/house-rules';
import { AboutUs } from '@/components/layout/about-us';
import { Map } from '@/components/layout/map';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <div className="container mx-auto px-4">
          <section className="py-16 md:py-24">
            <FeaturedEventCountdown />
          </section>
          <section id="rules" className="border-t py-16 md:py-24">
            <HouseRules />
          </section>
          <section id="about" className="border-t py-16 md:py-24">
            <AboutUs />
          </section>
          <section className="border-t py-16 md:py-24">
            <BarProducts />
          </section>
          <section id="social" className="border-t py-16 md:py-24">
            <SocialFeed />
          </section>
          <section id="gallery" className="border-t py-16 md:py-24">
            <ImageGallery />
          </section>
          <section id="location" className="border-t py-16 md:py-24">
            <Map />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
