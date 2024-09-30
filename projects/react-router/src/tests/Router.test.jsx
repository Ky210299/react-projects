import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, cleanup, } from '@testing-library/react';
import { waitFor } from "@testing-library/react";
import { Router } from "../components/Router";
import { getCurrentPath } from "../utils/utils";

vi.mock('../utils/utils.js', () => ({
  getCurrentPath: vi.fn()
}))


describe('Router test', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })
  it('Should work', () => {
    render(<Router />)
    expect(true).toBeTruthy()
  });
  it('Should show 404 if not match a route', () => {
    window.history.pushState({}, '', '/non-existing-route');
    render(<Router />,);
    expect(screen.findByText('404')).toBeTruthy();
  })
  it('Should render the fist matched route', async () => {
    getCurrentPath.mockReturnValue('/')
    render(<Router />)
    const HomeTitle = await screen.findByText('This is the Home');
    expect(HomeTitle).toBeTruthy();
  })
})
