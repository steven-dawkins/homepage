import type { WorkHighlight } from '../types/experience'

export const workHighlights: WorkHighlight[] = [
  {
    title: 'Data Services platform',
    summary:
      'Led the architecture and development of a next-generation data platform, which replaced the legacy data API and feed delivery and became the foundation for the company’s data and charting products.',
    tags: ['.NET', 'Azure Functions', 'ClickHouse', 'Redis'],
  },
  {
    title: 'TradePrism',
    summary:
      'Led a client-facing trade-data product end to end on an 8.5-billion-row dataset. The ETL pre-computes every aggregation so queries never aggregate at runtime, and downloads stream straight from the database so even large extracts start immediately.',
    tags: ['React', 'TypeScript', 'Snowflake', 'ClickHouse'],
  },
  {
    title: 'Historical data tool',
    summary:
      'A multi-service data platform with a Claude and MCP workflow that lets economists find and validate public replacements for a paid data feed, across 160+ countries and 85+ providers.',
    tags: ['.NET', 'Python', 'React', 'MCP'],
  },
]
