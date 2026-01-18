import blockContent from './customTypes/blockContent'
import crewMember from './customTypes/crewMember'
import castMember from './customTypes/castMember'
import person from './documentTypes/person'
import screening from './documentTypes/screening'
import plotSummary from './customTypes/plotSummary'
import plotSummaries from './customTypes/plotSummaries'
import { organization } from './documentTypes/organization'

export const schemaTypes = [
  // Document types
  person,
  screening,
  organization,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
