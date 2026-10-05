import { renderPage } from "@/lib/markdown";
import { getNav } from "@/lib/nav";

export const dynamic = "force-static";

export async function GET() {
  const docs = await Promise.all(
    getNav().pages.map(async (page) => ({
      id: page.url,
      title: page.title,
      text: (await renderPage(page)).text.slice(0, 6000),
    })),
  );
  return Response.json(docs);
}
