import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from './constants/route.constants';

const Index = lazy(() => import('./screens/Home'));
const About = lazy(() => import('./screens/About/About.Screen'));
const BlockChain = lazy(() => import('./screens/BlockChain/BlockChain.Screen'));
const Scrapying = lazy(() => import('./screens/Scrapying/Scrapying.Screen'));

function CustomRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={ROUTE_PATH.INDEX} element={<Index />} />
                <Route path={ROUTE_PATH.REACT_FRONTEND} element={<Index />} />
                <Route path={ROUTE_PATH.ABOUT_WEBSITE} element={<About />} />
                <Route path={ROUTE_PATH.BLOCK_CHAIN} element={<BlockChain />} />
                <Route path={ROUTE_PATH.SCRAPYING} element={<Scrapying />} />
            </Routes>
        </Suspense>
    );
}

export { CustomRoutes };
