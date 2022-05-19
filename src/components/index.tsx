import dynamic from "next/dynamic";

export const DynamicHeaderComponent = dynamic(() => import('./Header'), {
     loading: () => <>loading</>
});
export const DynamicFooterComponent = dynamic(() => import('./Footer'), {
     loading: () => <>loading</>
});
export const DynamicNavigationBarComponent = dynamic(() => import('./NavigationBar'), {
     loading: () => <>loading</>
});
export const DynamicCompanyBarComponent = dynamic(() => import('./CompanyBar'), {
     loading: () => <>loading</>
});
export const DynamicPageComponent = dynamic(() => import('./Page'), {
     loading: () => <>loading</>
});
export const DynamicHeroComponent = dynamic(() => import('./Hero'), {
     loading: () => <>loading</>
});
