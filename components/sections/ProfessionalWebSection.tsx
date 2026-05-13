"use client";
import FadeIn from "@/components/animations/FadeIn";

export default function ProfessionalWebSection() {
  return (
    <section className="relative overflow-visible bg-[linear-gradient(135deg,#1a75ff_0%,#1a2ce2_45%,#2a2fe8_100%)] px-6 pb-2 pt-20 text-white">
      <img
        src="/images%209/66030a8f80bb3baa5b0aaa1b_detail-mkt-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-[220px] opacity-50"
      />

      <FadeIn>
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center">
          <h2 className="font-body text-[56px] font-medium leading-[73px] max-[960px]:text-[46px] max-[960px]:leading-[60px] max-[640px]:text-[34px] max-[640px]:leading-[44px]">
            Professional
            <span className="block">website done for</span>
            <span className="block">you. 7-day</span>
            <span className="block">turnaround.</span>
          </h2>
          <p className="mt-6 max-w-[520px] font-accent text-[24px] leading-[31px] text-white/90 max-[960px]:text-[20px] max-[960px]:leading-[28px] max-[640px]:text-[16px] max-[640px]:leading-[22px]">
            Completely zero-risk. Unmatched customer service.
          </p>
          <button
            className="mt-10 rounded-[12px] bg-[#ff5a1f] px-10 py-4 text-base font-medium text-white shadow-[0_12px_26px_rgba(255,90,31,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,31,0.45)] max-[640px]:w-full max-[640px]:max-w-[320px] max-[640px]:px-12 max-[640px]:py-5 max-[640px]:text-lg"
            type="button"
          >
            Get Started
          </button>
        </div>

        <div className="relative flex min-h-[460px] items-center justify-center lg:min-h-[620px] max-[640px]:hidden">
          <img
            src="/images%209/65df76fc25f041b3d2a2ec52_websites-ueni-p-1080.webp"
            alt="Website examples collage"
            sizes="(max-width: 991px) 100vw, 850px"
            className="w-[min(850px,94vw)] max-w-none rotate-[-6deg] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
