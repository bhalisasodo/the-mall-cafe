"use client";

import Link from "next/link";
import { CONTACT, WHATSAPP_ORDER_MESSAGE } from "@/lib/site-data";

function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Quick mobile order bar"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/20 bg-neutral-950/95 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-md items-center gap-2">
        <Link
          href="#menu"
          className="flex min-h-[44px] flex-1 items-center justify-center rounded border border-white/20 bg-white/10 px-2 text-xs font-bold uppercase tracking-wider text-white transition-colors active:bg-white/20"
        >
          Menu
        </Link>
        <a
          href={`tel:${CONTACT.phoneTelPrimary}`}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded border border-turmeric/60 bg-amber-500/10 px-2 text-xs font-bold uppercase tracking-wider text-turmeric transition-colors active:bg-amber-500/20"
        >
          <svg
            className="h-4 w-4 shrink-0 text-turmeric"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Call</span>
        </a>
        <a
          href={waLink(WHATSAPP_ORDER_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[44px] flex-[1.4] items-center justify-center gap-1.5 rounded bg-chili px-3 text-xs font-black uppercase tracking-wider text-white shadow-md transition-transform active:scale-95"
        >
          <svg
            className="h-4 w-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.146-.519-1.859-.764-3.048-2.656-3.14-2.778-.093-.122-.751-.998-.751-1.905 0-.907.476-1.353.646-1.538.169-.185.37-.231.494-.231.123 0 .247.001.354.006.113.005.263-.043.411.312.155.372.529 1.29.575 1.383.046.092.077.2.015.323-.061.123-.092.2-.185.308-.092.108-.194.241-.277.323-.092.093-.189.194-.081.379.108.185.479.79 1.028 1.278.708.631 1.305.826 1.49.919.185.092.293.077.401-.046.108-.124.462-.539.585-.724.124-.185.247-.154.416-.092.169.062 1.077.508 1.262.6.185.093.308.139.354.216.046.077.046.446-.098.851z" />
          </svg>
          <span>Order Now</span>
        </a>
      </div>
    </aside>
  );
}
