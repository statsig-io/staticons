
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.981 10.297a3.956 3.956 0 0 1 .178-5.405l1.413-1.413a3.966 3.966 0 0 1 5.132-.406 4.065 4.065 0 0 1 5.234.435l1.656 1.656a4.8 4.8 0 0 1 0 6.788l-5.184 5.185a1.866 1.866 0 0 1-3.183-1.211 1.86 1.86 0 0 1-1.207-.543 1.859 1.859 0 0 1-.544-1.21 1.859 1.859 0 0 1-1.213-.544 1.86 1.86 0 0 1-.543-1.21 1.863 1.863 0 0 1-1.739-2.122Zm7.706-6.368 1.682 1.518a2.013 2.013 0 1 1-2.707 2.98L7.797 6.72l-3.402 3.402a.614.614 0 0 0 .855.88l.013-.012 2.364-2.364a.626.626 0 1 1 .885.887l-2.363 2.363-.013.012a.614.614 0 0 0 .881.855L9.38 10.38a.626.626 0 0 1 .888 0 .626.626 0 0 1 0 .886l-2.363 2.363a.614.614 0 0 0 .866.869l2.363-2.364a.625.625 0 1 1 .888.885l-2.363 2.364-.03.029a.614.614 0 0 0 .895.84l5.185-5.185a3.548 3.548 0 0 0 0-5.018l-1.656-1.656a2.813 2.813 0 0 0-3.366-.464ZM8.288 5.473l2.22 2.03a.76.76 0 1 0 1.022-1.127L9.193 4.268a2.713 2.713 0 0 0-3.736.096L4.044 5.777a2.704 2.704 0 0 0-.396 3.321l3.695-3.694a.626.626 0 0 1 .945.069Z","clip-rule":"evenodd"}]]

/**
 * @component @name Collaboration
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi45ODEgMTAuMjk3YTMuOTU2IDMuOTU2IDAgMCAxIC4xNzgtNS40MDVsMS40MTMtMS40MTNhMy45NjYgMy45NjYgMCAwIDEgNS4xMzItLjQwNiA0LjA2NSA0LjA2NSAwIDAgMSA1LjIzNC40MzVsMS42NTYgMS42NTZhNC44IDQuOCAwIDAgMSAwIDYuNzg4bC01LjE4NCA1LjE4NWExLjg2NiAxLjg2NiAwIDAgMS0zLjE4My0xLjIxMSAxLjg2IDEuODYgMCAwIDEtMS4yMDctLjU0MyAxLjg1OSAxLjg1OSAwIDAgMS0uNTQ0LTEuMjEgMS44NTkgMS44NTkgMCAwIDEtMS4yMTMtLjU0NCAxLjg2IDEuODYgMCAwIDEtLjU0My0xLjIxIDEuODYzIDEuODYzIDAgMCAxLTEuNzM5LTIuMTIyWm03LjcwNi02LjM2OCAxLjY4MiAxLjUxOGEyLjAxMyAyLjAxMyAwIDEgMS0yLjcwNyAyLjk4TDcuNzk3IDYuNzJsLTMuNDAyIDMuNDAyYS42MTQuNjE0IDAgMCAwIC44NTUuODhsLjAxMy0uMDEyIDIuMzY0LTIuMzY0YS42MjYuNjI2IDAgMSAxIC44ODUuODg3bC0yLjM2MyAyLjM2My0uMDEzLjAxMmEuNjE0LjYxNCAwIDAgMCAuODgxLjg1NUw5LjM4IDEwLjM4YS42MjYuNjI2IDAgMCAxIC44ODggMCAuNjI2LjYyNiAwIDAgMSAwIC44ODZsLTIuMzYzIDIuMzYzYS42MTQuNjE0IDAgMCAwIC44NjYuODY5bDIuMzYzLTIuMzY0YS42MjUuNjI1IDAgMSAxIC44ODguODg1bC0yLjM2MyAyLjM2NC0uMDMuMDI5YS42MTQuNjE0IDAgMCAwIC44OTUuODRsNS4xODUtNS4xODVhMy41NDggMy41NDggMCAwIDAgMC01LjAxOGwtMS42NTYtMS42NTZhMi44MTMgMi44MTMgMCAwIDAtMy4zNjYtLjQ2NFpNOC4yODggNS40NzNsMi4yMiAyLjAzYS43Ni43NiAwIDEgMCAxLjAyMi0xLjEyN0w5LjE5MyA0LjI2OGEyLjcxMyAyLjcxMyAwIDAgMC0zLjczNi4wOTZMNC4wNDQgNS43NzdhMi43MDQgMi43MDQgMCAwIDAtLjM5NiAzLjMyMWwzLjY5NS0zLjY5NGEuNjI2LjYyNiAwIDAgMSAuOTQ1LjA2OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Collaboration = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-collaboration',
        'staticon-Collaboration',
        className
      ),
      ...props,
    })
);
Collaboration.displayName = 'Collaboration'

export default Collaboration;
