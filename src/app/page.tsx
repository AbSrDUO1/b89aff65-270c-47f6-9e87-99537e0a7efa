"use client";
import ContentTextbox from '@/components/textbox/ContentTextbox';
import ImageAccordion from '@/components/accordions/ImageAccordion';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import StandardTextbox from '@/components/textbox/StandardTextbox';
import HorizontalTextbox from '@/components/textbox/HorizontalTextbox';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-[#6366F1]/25 to-transparent pt-16 pb-12">
        <ImageAccordion
          items={[{ title: "Welcome to PulseLaunch", content: "Your gateway to marketing success with innovative solutions." }]}
          imageSrc="/images/forest.jpg"
          imageAlt="A lush forest representing growth and success"
          title="Experience the Future of Marketing"
          className="rounded-lg"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#0b1020] py-24">
        <SimpleKPIBento
          items={[{ value: "95%", description: "Customer Satisfaction" }, { value: "50%", description: "Increase in Sales" }]}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        />
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#111827] py-24">
        <StandardTextbox
          title={<h2 className="text-3xl">Our Mission</h2>}
          description={<p className="text-lg">Delivering effective marketing strategies designed to elevate your brand.</p>}
          className="text-white"
        />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-soft-noise py-24">
        <HorizontalTextbox
          title={<h3 className="text-2xl">What Our Clients Say</h3>}
          description={<blockquote>
            <p className="text-lg">“PulseLaunch transformed our marketing approach!” - John Doe, CEO</p>
          </blockquote>}
          className="text-white"
        />
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-[#0b1020] py-24">
        <ContentTextbox
          title={<h3 className="text-2xl">Join Us Today!</h3>}
          description={<p className="text-lg">Sign up for our newsletter and stay updated with the latest trends.</p>}
          className="text-white"
          children={<div className="flex items-center gap-3 sm:gap-4">
            <StaggerButton text="Start Now" className="px-4 sm:px-6" />
            <StaggerButton text="Explore" className="px-4 sm:px-6 text-white" bgClassName="!bg-black" />
          </div>}
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-glass py-24">
        <HorizontalTextbox
          title={<h4 className="text-xl">Contact Us</h4>}
          description={<p className="text-sm">We would love to hear from you!</p>}
          className="text-black"
        />
      </section>
    </div>
  );
}
