import { apiVersion, projectId, dataset} from "@/lib/sanity/env"
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});