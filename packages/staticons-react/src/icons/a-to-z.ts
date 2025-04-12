
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.48 4.47c-.293-.957-1.649-.957-1.942 0L.403 11.44a.625.625 0 0 0 1.195.365l.475-1.55h2.871l.475 1.55a.625.625 0 1 0 1.195-.366L4.48 4.47Zm.105 4.613L3.51 5.568 2.432 9.083h2.153ZM10.11 4.54c0-.345.28-.625.625-.625h4.07a.82.82 0 0 1 .68 1.278l-3.798 5.64h3.271a.625.625 0 1 1 0 1.25H10.88a.82.82 0 0 1-.68-1.28l3.797-5.638h-3.262a.625.625 0 0 1-.625-.625Zm-.78 4.065H7.59a.625.625 0 0 1 0-1.25h1.74a.625.625 0 1 1 0 1.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name AToZ
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC40OCA0LjQ3Yy0uMjkzLS45NTctMS42NDktLjk1Ny0xLjk0MiAwTC40MDMgMTEuNDRhLjYyNS42MjUgMCAwIDAgMS4xOTUuMzY1bC40NzUtMS41NWgyLjg3MWwuNDc1IDEuNTVhLjYyNS42MjUgMCAxIDAgMS4xOTUtLjM2Nkw0LjQ4IDQuNDdabS4xMDUgNC42MTNMMy41MSA1LjU2OCAyLjQzMiA5LjA4M2gyLjE1M1pNMTAuMTEgNC41NGMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWg0LjA3YS44Mi44MiAwIDAgMSAuNjggMS4yNzhsLTMuNzk4IDUuNjRoMy4yNzFhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDEwLjg4YS44Mi44MiAwIDAgMS0uNjgtMS4yOGwzLjc5Ny01LjYzOGgtMy4yNjJhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1Wm0tLjc4IDQuMDY1SDcuNTlhLjYyNS42MjUgMCAwIDEgMC0xLjI1aDEuNzRhLjYyNS42MjUgMCAxIDEgMCAxLjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AToZ = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-ato-z',
        'staticon-AToZ',
        className
      ),
      ...props,
    })
);
AToZ.displayName = 'AToZ'

export default AToZ;
