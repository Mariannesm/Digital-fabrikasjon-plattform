import blockContent from './customTypes/blockContent'
import { pageBlocks } from './customTypes/pageBlocks'
import { organization } from './documentTypes/organization'
import { project } from './documentTypes/project'
import { category } from './documentTypes/category'
import { page } from './documentTypes/page'
import { course } from './documentTypes/course'
import { quizCompletion } from './documentTypes/quizCompletion'

export const schemaTypes = [
  // Document types
  organization,
  project,
  category,
  page,
  course,
  quizCompletion,

  // Block types for page builder
  ...pageBlocks,

  // Other types
  blockContent,
]
