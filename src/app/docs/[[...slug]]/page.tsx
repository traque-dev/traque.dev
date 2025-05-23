import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/page';
import { redirect } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
// import { metadataImage } from '@/lib/metadata';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { PlatformSelect } from '@/common/components/platform-select';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await props.params;

  const page = source.getPage(slug);

  if (!page) {
    return redirect('/docs/introduction');
  }

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{ ...defaultMdxComponents, Tab, Tabs, PlatformSelect }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

// export async function generateMetadata(props: {
//   params: Promise<{ slug?: string[] }>;
// }) {
//   const params = await props.params;
//   const page = source.getPage(params.slug);
//   if (!page) notFound();
//
//   return metadataImage.withImage(page.slugs, {
//     title: page.data.title,
//     description: page.data.description,
//   });
// }
