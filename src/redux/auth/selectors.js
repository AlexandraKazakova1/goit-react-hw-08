export const selectIsLoggedIn = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
