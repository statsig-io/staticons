
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"m10.04 3.49-5.635 7.166a.125.125 0 0 0 .098.203h4.363c.624 0 1.13.508 1.125 1.132L9.96 16.51l5.635-7.167a.125.125 0 0 0-.098-.203l-4.359.003c-.624 0-1.13-.507-1.125-1.132l.027-4.52Zm-.757-1.06c.663-.841 2.016-.368 2.01.703l-.03 4.76 4.233-.004c1.148 0 1.791 1.323 1.082 2.225l-5.861 7.455c-.663.843-2.017.369-2.01-.703l.033-4.757H4.503c-1.148 0-1.79-1.323-1.08-2.225l5.86-7.453Z","clip-rule":"evenodd"}]]

/**
 * @component @name Flash
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuMDQgMy40OS01LjYzNSA3LjE2NmEuMTI1LjEyNSAwIDAgMCAuMDk4LjIwM2g0LjM2M2MuNjI0IDAgMS4xMy41MDggMS4xMjUgMS4xMzJMOS45NiAxNi41MWw1LjYzNS03LjE2N2EuMTI1LjEyNSAwIDAgMC0uMDk4LS4yMDNsLTQuMzU5LjAwM2MtLjYyNCAwLTEuMTMtLjUwNy0xLjEyNS0xLjEzMmwuMDI3LTQuNTJabS0uNzU3LTEuMDZjLjY2My0uODQxIDIuMDE2LS4zNjggMi4wMS43MDNsLS4wMyA0Ljc2IDQuMjMzLS4wMDRjMS4xNDggMCAxLjc5MSAxLjMyMyAxLjA4MiAyLjIyNWwtNS44NjEgNy40NTVjLS42NjMuODQzLTIuMDE3LjM2OS0yLjAxLS43MDNsLjAzMy00Ljc1N0g0LjUwM2MtMS4xNDggMC0xLjc5LTEuMzIzLTEuMDgtMi4yMjVsNS44Ni03LjQ1M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Flash = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flash',
        'staticon-Flash',
        className
      ),
      ...props,
    })
);
Flash.displayName = 'Flash'

export default Flash;
