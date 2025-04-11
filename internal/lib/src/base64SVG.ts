export function base64SVG(svg: string): string {
  return Buffer.from(
    svg
      .replace("\n", "")
      .replace(
        'stroke="currentColor"',
        'stroke="#000" style="background-color: #fff; border-radius: 2px"'
      )
  ).toString("base64");
}
