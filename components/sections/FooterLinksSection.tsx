"use client";
import FadeIn from "@/components/animations/FadeIn";

const productLinks = ["Pricing", "Examples", "Help", "FAQs"];
const companyLinks = ["About Us", "Careers", "Blog"];
const accountLinks = ["Login", "Terms & Conditions", "Refund Policy", "Privacy Policy"];
const compareLinks = ["Vertexia vs GoDaddy", "Vertexia vs Squarespace"];

export default function FooterLinksSection() {
  return (
    <section className="footer-links bg-[#040404] px-6 pb-14 pt-20 text-white max-[640px]:pt-12">
      <FadeIn>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10">
            <div className="grid grid-cols-2 gap-x-20 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 max-[640px]:gap-y-8">
              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Product
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 text-[14px] text-white/60 max-[640px]:grid-cols-2">
                  {productLinks.map((item) => (
                    <li key={item}>
                      <a className="hover:text-white transition-colors" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Company
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 text-[14px] text-white/60 max-[640px]:grid-cols-2">
                  {companyLinks.map((item) => (
                    <li key={item}>
                      <a className="hover:text-white transition-colors" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Account
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 text-[14px] text-white/60 max-[640px]:grid-cols-2">
                  {accountLinks.map((item) => (
                    <li key={item}>
                      <a className="hover:text-white transition-colors" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Become a Partner
                </p>
                <ul className="mt-5 flex flex-col gap-y-4 text-[14px] text-white/60">
                  <li>
                    <a className="hover:text-white transition-colors" href="#">
                      Partner Program
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10 max-[640px]:mt-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 max-[640px]:gap-y-8">
              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Compare
                </p>
                <ul className="mt-5 flex flex-col gap-y-4 text-[14px] text-white/60">
                  {compareLinks.map((item) => (
                    <li key={item}>
                      <a className="hover:text-white transition-colors" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Research
                </p>
                <p className="mt-5 text-[14px] text-white/60">
                  AI = Absolute Inequality for Small Business?
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
