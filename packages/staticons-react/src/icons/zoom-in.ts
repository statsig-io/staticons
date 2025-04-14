
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.662 3.249a5.912 5.912 0 1 0 0 11.824 5.912 5.912 0 0 0 0-11.824ZM2.5 9.161a7.162 7.162 0 1 1 12.167 5.123l2.65 2.65a.625.625 0 0 1-.884.883l-2.737-2.737A7.162 7.162 0 0 1 2.5 9.16Zm7.162-4.247c.345 0 .625.28.625.625v2.997h2.997a.625.625 0 1 1 0 1.25h-2.997v2.997a.625.625 0 1 1-1.25 0V9.786H6.04a.625.625 0 1 1 0-1.25h2.997V5.539c0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name ZoomIn
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS42NjIgMy4yNDlhNS45MTIgNS45MTIgMCAxIDAgMCAxMS44MjQgNS45MTIgNS45MTIgMCAwIDAgMC0xMS44MjRaTTIuNSA5LjE2MWE3LjE2MiA3LjE2MiAwIDEgMSAxMi4xNjcgNS4xMjNsMi42NSAyLjY1YS42MjUuNjI1IDAgMCAxLS44ODQuODgzbC0yLjczNy0yLjczN0E3LjE2MiA3LjE2MiAwIDAgMSAyLjUgOS4xNlptNy4xNjItNC4yNDdjLjM0NSAwIC42MjUuMjguNjI1LjYyNXYyLjk5N2gyLjk5N2EuNjI1LjYyNSAwIDEgMSAwIDEuMjVoLTIuOTk3djIuOTk3YS42MjUuNjI1IDAgMSAxLTEuMjUgMFY5Ljc4Nkg2LjA0YS42MjUuNjI1IDAgMSAxIDAtMS4yNWgyLjk5N1Y1LjUzOWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ZoomIn = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-zoom-in',
        'staticon-ZoomIn',
        className
      ),
      ...props,
    })
);
ZoomIn.displayName = 'ZoomIn'

export default ZoomIn;
