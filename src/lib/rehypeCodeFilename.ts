import { visit } from "unist-util-visit";

// Reads `filename="..."` from fenced code meta and adds it as a `filename`
// prop on the <pre> element so CodeBlock can display it.
export function rehypeCodeFilename() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visit(tree, "element", (node: any) => {
      if (node.tagName !== "pre") return;

      const codeEl = node.children?.[0];
      if (codeEl?.tagName !== "code") return;

      const meta = (codeEl.data?.meta as string) ?? "";
      if (!meta) return;

      const match = meta.match(/filename="([^"]+)"/);
      if (match) {
        node.properties = node.properties ?? {};
        node.properties.filename = match[1];
      }
    });
  };
}
