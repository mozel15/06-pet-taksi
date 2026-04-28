import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata(input: PageMetadataInput): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
  };
}
