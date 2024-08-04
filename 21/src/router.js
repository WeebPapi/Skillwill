import { EntryPage, ListPage } from "./pages";

export const routes = [
  {
    path: "/",
    element: <EntryPage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
];
