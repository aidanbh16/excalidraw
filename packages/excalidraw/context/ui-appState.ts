import React from "react";

import type { UIAppState } from "../types";

export const UIAppStateContext = React.createContext<UIAppState>(null!);
// Returns the current UI state from the context
export const useUIAppState = () => React.useContext(UIAppStateContext);
