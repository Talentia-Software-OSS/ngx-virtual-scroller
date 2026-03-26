export interface VirtualScrollerDefaultOptions {
	checkResizeInterval: number
	modifyOverflowStyleOfParentScroll: boolean,
	resizeBypassRefreshThreshold: number,
	scrollAnimationTime: number;
	scrollDebounceTime: number;
	scrollThrottlingTime: number;
	scrollbarHeight?: number;
	scrollbarWidth?: number;
	stripedTable: boolean
}

export function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY(): VirtualScrollerDefaultOptions {
	return {
		checkResizeInterval: 1000,
		modifyOverflowStyleOfParentScroll: true,
		resizeBypassRefreshThreshold: 5,
		scrollAnimationTime: 750,
		scrollDebounceTime: 0,
		scrollThrottlingTime: 0,
		stripedTable: false
	};
}