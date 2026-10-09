import { RouterProvider } from 'react-router';

import createRouter from '@/routes/Router.tsx';

const header = 'Hello React';
const footer = 'Built with ❤️ and React';
const router = createRouter({ header, footer });

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
