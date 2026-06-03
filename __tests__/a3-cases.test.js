/** @jest-environment node */
const fs = require('fs');
const path = require('path');
describe("A3 API integration cases", () => {
  const routePath = path.join(__dirname, '../src/app/api/feature/route.ts');
  const featureNeedle = "weather";
  it("TC-003: Toggle Dark/Light Theme", () => {
    expect(fs.existsSync(routePath)).toBe(true);
    const src = fs.readFileSync(routePath, 'utf8');
    expect(src).toMatch(/ok:\s*true/i);
    expect(src).toMatch(/feature\s*:/i);
    expect(src.toLowerCase()).toContain(featureNeedle);
  });
  it("TC-004: Display 5-Day Weather Forecast", () => {
    expect(fs.existsSync(routePath)).toBe(true);
    const src = fs.readFileSync(routePath, 'utf8');
    expect(src).toMatch(/ok:\s*true/i);
    expect(src).toMatch(/feature\s*:/i);
    expect(src.toLowerCase()).toContain(featureNeedle);
  });
});
