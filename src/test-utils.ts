import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// Extend Jest matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toBeVisible(): R;
      toHaveAttribute(attr: string, value?: string): R;
    }
  }
}

// Re-export everything
export * from "@testing-library/react";
export { render };
