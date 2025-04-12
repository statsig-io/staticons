
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.395.623c.483 0 .875.392.875.875V3.15h1.603a.625.625 0 1 1 0 1.25H13.27v1.652a.875.875 0 0 1-.875.875H9.96a.875.875 0 0 1-.875-.875V4.4H7.858a.375.375 0 0 0-.375.375v2.228c0 .376-.129.723-.344.999.217.276.345.623.345 1v2.223c0 .207.168.375.375.375h1.227V9.947c0-.483.392-.875.875-.875h2.434c.483 0 .875.392.875.875V11.6h1.603a.625.625 0 1 1 0 1.25H13.27v1.65a.875.875 0 0 1-.875.875H9.96a.875.875 0 0 1-.875-.875v-1.65H7.86a1.625 1.625 0 0 1-1.625-1.625V9.003a.375.375 0 0 0-.375-.375H4.685v1.957a.875.875 0 0 1-.875.875H1.377a.875.875 0 0 1-.875-.875V5.37c0-.483.392-.875.875-.875H3.81c.483 0 .875.392.875.875v2.009h1.173a.375.375 0 0 0 .375-.375V4.775c0-.897.727-1.625 1.625-1.625h1.228V1.498c0-.483.392-.875.875-.875h2.434Zm-.375 9.7h-1.684v3.803h1.684v-3.804Zm0-8.45v3.804h-1.684V1.873h1.684ZM3.435 5.744H1.752v4.466h1.683V5.744Z","clip-rule":"evenodd"}]]

/**
 * @component @name UserJourney
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMzk1LjYyM2MuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NVYzLjE1aDEuNjAzYS42MjUuNjI1IDAgMSAxIDAgMS4yNUgxMy4yN3YxLjY1MmEuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NUg5Ljk2YS44NzUuODc1IDAgMCAxLS44NzUtLjg3NVY0LjRINy44NThhLjM3NS4zNzUgMCAwIDAtLjM3NS4zNzV2Mi4yMjhjMCAuMzc2LS4xMjkuNzIzLS4zNDQuOTk5LjIxNy4yNzYuMzQ1LjYyMy4zNDUgMXYyLjIyM2MwIC4yMDcuMTY4LjM3NS4zNzUuMzc1aDEuMjI3VjkuOTQ3YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWgyLjQzNGMuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NVYxMS42aDEuNjAzYS42MjUuNjI1IDAgMSAxIDAgMS4yNUgxMy4yN3YxLjY1YS44NzUuODc1IDAgMCAxLS44NzUuODc1SDkuOTZhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1di0xLjY1SDcuODZhMS42MjUgMS42MjUgMCAwIDEtMS42MjUtMS42MjVWOS4wMDNhLjM3NS4zNzUgMCAwIDAtLjM3NS0uMzc1SDQuNjg1djEuOTU3YS44NzUuODc1IDAgMCAxLS44NzUuODc1SDEuMzc3YS44NzUuODc1IDAgMCAxLS44NzUtLjg3NVY1LjM3YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NUgzLjgxYy40ODMgMCAuODc1LjM5Mi44NzUuODc1djIuMDA5aDEuMTczYS4zNzUuMzc1IDAgMCAwIC4zNzUtLjM3NVY0Ljc3NWMwLS44OTcuNzI3LTEuNjI1IDEuNjI1LTEuNjI1aDEuMjI4VjEuNDk4YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWgyLjQzNFptLS4zNzUgOS43aC0xLjY4NHYzLjgwM2gxLjY4NHYtMy44MDRabTAtOC40NXYzLjgwNGgtMS42ODRWMS44NzNoMS42ODRaTTMuNDM1IDUuNzQ0SDEuNzUydjQuNDY2aDEuNjgzVjUuNzQ0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const UserJourney = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-user-journey',
        'staticon-UserJourney',
        className
      ),
      ...props,
    })
);
UserJourney.displayName = 'UserJourney'

export default UserJourney;
