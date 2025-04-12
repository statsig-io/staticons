
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.76 14.498a.625.625 0 0 1-.576-.671l.192-2.491H6.11l-.2 2.587a.625.625 0 0 1-1.246-.096l.192-2.491H2.125a.625.625 0 0 1 0-1.25h2.828l.321-4.173H2.125a.625.625 0 1 1 0-1.25H5.37l.2-2.586a.625.625 0 1 1 1.245.096l-.191 2.49h3.265l.199-2.586a.625.625 0 0 1 1.246.096l-.191 2.49h2.732a.625.625 0 1 1 0 1.25h-2.828l-.321 4.173h3.149a.625.625 0 1 1 0 1.25H10.63l-.2 2.587a.625.625 0 0 1-.67.575ZM6.527 5.913l-.321 4.173h3.265l.32-4.173H6.529Z","clip-rule":"evenodd"}]]

/**
 * @component @name Number
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS43NiAxNC40OThhLjYyNS42MjUgMCAwIDEtLjU3Ni0uNjcxbC4xOTItMi40OTFINi4xMWwtLjIgMi41ODdhLjYyNS42MjUgMCAwIDEtMS4yNDYtLjA5NmwuMTkyLTIuNDkxSDIuMTI1YS42MjUuNjI1IDAgMCAxIDAtMS4yNWgyLjgyOGwuMzIxLTQuMTczSDIuMTI1YS42MjUuNjI1IDAgMSAxIDAtMS4yNUg1LjM3bC4yLTIuNTg2YS42MjUuNjI1IDAgMSAxIDEuMjQ1LjA5NmwtLjE5MSAyLjQ5aDMuMjY1bC4xOTktMi41ODZhLjYyNS42MjUgMCAwIDEgMS4yNDYuMDk2bC0uMTkxIDIuNDloMi43MzJhLjYyNS42MjUgMCAxIDEgMCAxLjI1aC0yLjgyOGwtLjMyMSA0LjE3M2gzLjE0OWEuNjI1LjYyNSAwIDEgMSAwIDEuMjVIMTAuNjNsLS4yIDIuNTg3YS42MjUuNjI1IDAgMCAxLS42Ny41NzVaTTYuNTI3IDUuOTEzbC0uMzIxIDQuMTczaDMuMjY1bC4zMi00LjE3M0g2LjUyOVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Number = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-number',
        'staticon-Number',
        className
      ),
      ...props,
    })
);
Number.displayName = 'Number'

export default Number;
