import { beforeAll, vi } from "vitest";
import "@testing-library/jest-dom";

export const mockState = {
  data: {
    quizzes: [
      {
        _id: "1",
        title: "Quiz 1",
        course: "Math",
        topic: "Algebra",
        dueDate: "20/1/2025",
      },
    ],
    announcments: [
      { _id: "1", title: "string", subTitle: "string", topic: "string" },
    ],
  },
  auth: {
    isLoggedIn: false,
  },
};

beforeAll(() => {
  vi.mock("next/navigation", () => {
    const actual = vi.importActual("next/navigation");
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

  // Mock `useSelector` to return the default mock state
  // @ts-expect-error asd
  vi.mock(import("react-redux"), async (importOriginal) => {
    const actual = await importOriginal();
    return {
      ...actual,
      useSelector: vi.fn(),
      useDispatch: () => vi.fn(),
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
