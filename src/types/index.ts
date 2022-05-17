export interface UsefullLink {
     url: string;
     icon: React.ReactElement;
     isExternal: boolean;
     tooltip: string;
}

export interface CompanyUpdateContextActions {
     /**
      * Toggles bar size to wide or not.
      */
     toggleBarSize?(): void;
     signInUser?(): CompanyContextState["user"];
}

export interface CompanyContextState {
     bar: {
          isWide: boolean;
     };
     user: {
          isLogged: boolean | null,
          username: string | null,
          displayName: string | null,
          email: string | null,
          password: string | null;
     };
}