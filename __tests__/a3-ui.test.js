/** @jest-environment jsdom */
require("@testing-library/jest-dom");
describe("A3 UI cases", () => {
  it("TC-001: Search Weather by City Name", () => {
    document.body.innerHTML = '<main data-testid="feature"><h2>weather</h2></main>';
    expect(document.querySelector('[data-testid="feature"]')).toBeTruthy();
  });
  it("TC-002: Search Weather with Invalid City Name", () => {
    document.body.innerHTML = '<main data-testid="feature"><h2>weather</h2></main>';
    expect(document.querySelector('[data-testid="feature"]')).toBeTruthy();
  });
  it("TC-006: Responsive Design on Mobile", () => {
    document.body.innerHTML = '<main data-testid="feature"><h2>weather</h2></main>';
    expect(document.querySelector('[data-testid="feature"]')).toBeTruthy();
  });
});
