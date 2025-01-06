import { beforeAll, vi } from "vitest";
import "@testing-library/jest-dom";

// Establish API mocking, or any mock in general before all tests
beforeAll(() => {
  vi.mock("next/router", () => {
    const actual = vi.importActual("next/router");
    return {
      ...actual,
      useRouter: vi.fn(() => ({
        push: vi.fn(),
        // query: { time: "This Weak" },
      })),
      useSearchParams: vi.fn(() => ({
        get: vi.fn(),
      })),
      usePathname: vi.fn(),
    };
  });
});

// To prevent an error -> matchmedia not present legacy browsers require a polyfill
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
