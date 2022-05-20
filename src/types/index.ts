export interface UsefullLink {
	url: string;
	icon: React.ReactElement;
	isExternal: boolean;
	tooltip: string;
}

export interface CompanyUpdateContextActions {
	/**
	 * Toggles bar size to wide or not.
	 * 
	 */
	toggleBarSize(): void;
	/**
	 * Sign in the user to context
	 * @version 1.0.0
	 * @param payload 
	 */
	signInUser(payload: CompanyContextState['user']): typeof payload;
}

export interface CompanyContextState {
	bar: {
		isWide: boolean;
	};
	user: {
		isLoggedIn: boolean | null;
		username: string | null;
		displayName: string | null;
		email: string | null;
		password: string | null;
	};
}
