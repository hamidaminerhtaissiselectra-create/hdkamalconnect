import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const HEADER_HEIGHT = 80;
const MAX_SCROLL_RETRIES = 12;
const SCROLL_RETRY_DELAY_MS = 120;

export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (
      targetId: string,
      options?: {
        mode?: "quote" | "intervention";
        offset?: number;
      },
    ) => {
      const offset = options?.offset ?? HEADER_HEIGHT;

      const tryScroll = (attempt = 0) => {
        const element = document.getElementById(targetId);
        if (!element) {
          if (attempt < MAX_SCROLL_RETRIES) {
            window.setTimeout(() => tryScroll(attempt + 1), SCROLL_RETRY_DELAY_MS);
          }
          return;
        }

        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Focus animation + mode selection when landing on quote
        if (targetId === "quote") {
          element.classList.add("quote-focused");
          window.setTimeout(() => {
            element.classList.remove("quote-focused");
          }, 4500);

          if (options?.mode) {
            window.setTimeout(() => {
              const targetBtn = document.querySelector(
                options.mode === "intervention" ? "[data-intervention-btn]" : "[data-quote-btn]",
              ) as HTMLButtonElement | null;

              targetBtn?.click();
            }, 500);
          }
        }
      };

      // The quote funnel lives on the homepage: always navigate to / first.
      if (targetId === "quote" && location.pathname !== "/") {
        navigate("/");
        window.setTimeout(() => tryScroll(0), 180);
        return;
      }

      // If the target doesn't exist on the current page, go to home then retry.
      const targetExistsHere = typeof document !== "undefined" && !!document.getElementById(targetId);
      if (location.pathname !== "/" && !targetExistsHere) {
        navigate("/");
        window.setTimeout(() => tryScroll(0), 180);
        return;
      }

      tryScroll(0);
    },
    [navigate, location.pathname],
  );

  return { scrollToSection };
};

// Standalone function for use outside components (without navigation capability)
export const smoothScrollTo = (targetId: string, offset: number = HEADER_HEIGHT) => {
  const element = document.getElementById(targetId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default useSmoothScroll;
