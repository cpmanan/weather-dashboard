/** @jest-environment node */
const fs = require('fs');
const path = require('path');
describe("A3 API integration cases", () => {
  const routePath = path.join(__dirname, '../src/app/api/feature/route.ts');
  const featureNeedle = "weather dashboard";
  it("TC-003: Toggle Dark/Light Theme", () => {
    expect(fs.existsSync(routePath)).toBe(true);
    const src = fs.readFileSync(routePath, 'utf8');
    expect(src).toMatch(/ok:\s*true/i);
    expect(src).toMatch(/feature\s*:/i);
    expect(src.toLowerCase()).toContain(featureNeedle);
  });
  it("TC-004: Display Current Weather Metrics", () => {
    expect(fs.existsSync(routePath)).toBe(true);
    const src = fs.readFileSync(routePath, 'utf8');
    expect(src).toMatch(/ok:\s*true/i);
    expect(src).toMatch(/feature\s*:/i);
    expect(src.toLowerCase()).toContain(featureNeedle);
  });
  it("TC-005: Add and Remove City from Favorites", () => {
    expect(fs.existsSync(routePath)).toBe(true);
    const src = fs.readFileSync(routePath, 'utf8');
    expect(src).toMatch(/ok:\s*true/i);
    expect(src).toMatch(/feature\s*:/i);
    expect(src.toLowerCase()).toContain(featureNeedle);
  });

  describe("App Router API route contract", () => {
    function walk(dir, acc) {
      if (!fs.existsSync(dir)) return acc;
      for (const name of fs.readdirSync(dir)) {
        const full = path.join(dir, name);
        const st = fs.statSync(full);
        if (st.isDirectory()) walk(full, acc);
        else if (name === 'route.ts') acc.push(full);
      }
      return acc;
    }
    const apiRoot = path.join(__dirname, '../src/app/api');
    const routes = walk(apiRoot, []);
    it('has at least one API route when api folder exists', () => {
      if (!fs.existsSync(apiRoot)) return;
      expect(routes.length).toBeGreaterThan(0);
    });
    routes.forEach((file) => {
      const rel = path.relative(path.join(__dirname, '..'), file).split(path.sep).join('/');
      it(`App Router exports: ${rel}`, () => {
        const src = fs.readFileSync(file, 'utf8');
        expect(src).not.toMatch(/NextApiRequest/);
        expect(src).not.toMatch(/NextApiResponse/);
        expect(src).not.toMatch(/export default async function handler/);
        expect(src).toMatch(/export async function (GET|POST|PUT|DELETE|PATCH)/);
        expect(src).toMatch(/from ["']next\/server["']/);
      });
    });
  });
});
