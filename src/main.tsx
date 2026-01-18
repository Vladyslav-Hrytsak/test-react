import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routers.tsx";
import {store} from "./redux/store.ts";
import './index.css'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)