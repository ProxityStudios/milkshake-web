import { createContext, ReactNode, useContext, useState } from 'react';
import { CompanyContextState, CompanyUpdateContextActions } from '../types';

const INITIAL_STATE: CompanyContextState = {
	bar: {
		isWide: false,
	},
	user: {
		isLoggedIn: false,
		username: null,
		displayName: null,
		email: null,
		password: null,
	},
};

export const CompanyContext = createContext<CompanyContextState>(INITIAL_STATE);
export const CompanyUpdateContext = createContext<CompanyUpdateContextActions | {}>({});

export const useCompanyContext = () => useContext(CompanyContext);
export const useCompanyUpdateContext = () =>
	useContext(CompanyUpdateContext) as CompanyUpdateContextActions;

export function CompanyProvider({ children }: { children: ReactNode }) {
	const [bar, setBar] = useState(INITIAL_STATE.bar);
	const [user, setUser] = useState(INITIAL_STATE.user);

	function toggleBarSize(): void {
		return setBar((prev) => ({ ...prev, isWide: !prev.isWide }));
	}

	function signInUser(payload: typeof INITIAL_STATE.user): typeof user {
		setUser(payload);
		return user;
	}

	const state: typeof INITIAL_STATE = { bar, user };
	const actions = { toggleBarSize, signInUser };

	return (
		<CompanyContext.Provider value={state}>
			<CompanyUpdateContext.Provider value={actions}>
				{children}
			</CompanyUpdateContext.Provider>
		</CompanyContext.Provider>
	);
}
