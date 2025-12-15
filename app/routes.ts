import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('api/search', 'docs/search.ts'),
  route('*', 'docs/page.tsx'),
] satisfies RouteConfig;
