import { apiVersion, projectId, dataset } from "@/lib/sanity/env"
import { createClient } from "next-sanity";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export function getWriteClient() {
  const token = process.env.NEXT_SANITY_API_TOKEN
  if (!token) throw new Error('NEXT_SANITY_API_TOKEN mangler i .env.local')
  return createClient({ projectId, dataset, apiVersion, useCdn: false, token })
}