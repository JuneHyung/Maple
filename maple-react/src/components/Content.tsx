import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchHeader from './common/SearchHeader';

const RankInfoPage = lazy(()=>import("@/pages/RankInfoPage"));
const TabContent = lazy(()=>import("@/components/common/TabContent"));

const Content = () => {
  return (
    <main className="content">
      <BrowserRouter >
        <SearchHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<RankInfoPage />}></Route>
            <Route path="/user/:characterName/*" element={<TabContent/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default Content;
