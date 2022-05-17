import dynamic from "next/dynamic";

export const DynamicHeaderComponent = dynamic(() => import('../components/Header'));
export const DynamicFooterComponent = dynamic(() => import('../components/Footer'));
export const DynamicNavigationBarComponent = dynamic(() => import('../components/NavigationBar'));
export const DynamicCompanyBarComponent = dynamic(() => import('../components/CompanyBar'));
export const DynamicPageComponent = dynamic(() => import('../components/Page'));
