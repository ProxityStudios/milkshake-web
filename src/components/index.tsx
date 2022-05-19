import dynamic from "next/dynamic";

export const DynamicHeaderComponent = dynamic(() => import('./Header'), {
     loading: () => <>loading</>
});
export const DynamicFooterComponent = dynamic(() => import('./Footer'));
export const DynamicNavigationBarComponent = dynamic(() => import('./NavigationBar'));
export const DynamicCompanyBarComponent = dynamic(() => import('./CompanyBar'));
export const DynamicPageComponent = dynamic(() => import('./Page'));
export const DynamicHeroComponent = dynamic(() => import('./Hero'));
