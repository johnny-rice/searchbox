import { componentsAlias, dataTypes } from '../utils';

const { SEARCHBASE, SEARCHBOX, SEARCHCOMPONENT } = componentsAlias;

export default {
  url: {
    components: [SEARCHBASE],
    type: dataTypes.STRING,
    required: true
  },
  index: {
    components: [SEARCHBASE, SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: true
  },
  credentials: {
    components: [SEARCHBASE],
    type: dataTypes.STRING,
    required: true
  },
  appbaseConfig: {
    components: [SEARCHBASE],
    type: dataTypes.OBJECT,
    required: false
  },
  headers: {
    components: [SEARCHBASE, SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.OBJECT,
    required: false
  },
  transformRequest: {
    components: [SEARCHBASE, SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.FUNCTION,
    required: false
  },
  transformResponse: {
    components: [SEARCHBASE, SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.FUNCTION,
    required: false
  },
  id: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: true
  },
  dataField: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: [dataTypes.ARRAY, dataTypes.STRING],
    required: false
  },
  autocompleteField: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: [dataTypes.ARRAY, dataTypes.STRING],
    required: false
  },
  queryFormat: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  react: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.OBJECT,
    required: false
  },
  size: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.NUMBER,
    required: false
  },
  from: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.NUMBER,
    required: false
  },
  includeFields: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.ARRAY,
    required: false
  },
  excludeFields: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.ARRAY,
    required: false
  },
  sortBy: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  aggregationField: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  aggregationSize: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.NUMBER,
    required: false
  },
  highlight: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.BOOLEAN,
    required: false
  },
  highlightField: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  customHighlight: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.OBJECT,
    required: false
  },
  categoryField: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  categoryValue: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  nestedField: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  fuzziness: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: [dataTypes.STRING, dataTypes.NUMBER],
    required: false
  },
  enableSynonyms: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.BOOLEAN,
    required: false
  },
  searchOperators: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.BOOLEAN,
    required: false
  },
  queryString: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  distinctField: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  distinctFieldConfig: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.OBJECT,
    required: false
  },
  enableRecentSuggestions: {
    components: [SEARCHBOX],
    type: dataTypes.BOOLEAN,
    required: false
  },
  enablePopularSuggestions: {
    components: [SEARCHBOX],
    type: dataTypes.BOOLEAN,
    required: false
  },
  recentSuggestionsConfig: {
    components: [SEARCHBOX],
    type: dataTypes.OBJECT,
    required: false
  },
  popularSuggestionsConfig: {
    components: [SEARCHBOX],
    type: dataTypes.OBJECT,
    required: false
  },
  enablePredictiveSuggestions: {
    components: [SEARCHBOX],
    type: dataTypes.BOOLEAN,
    required: false
  },
  maxPredictedWords: {
    components: [SEARCHBOX],
    type: dataTypes.NUMBER,
    required: false
  },
  urlField: {
    components: [SEARCHBOX],
    type: dataTypes.STRING,
    required: false
  },
  pagination: {
    components: [SEARCHCOMPONENT],
    type: dataTypes.BOOLEAN,
    required: false
  },
  after: {
    components: [SEARCHCOMPONENT],
    type: dataTypes.OBJECT,
    required: false
  },
  showMissing: {
    components: [SEARCHCOMPONENT],
    type: dataTypes.BOOLEAN,
    required: false
  },
  includeNullValues: {
    components: [SEARCHCOMPONENT],
    type: dataTypes.BOOLEAN,
    required: false
  },
  interval: {
    components: [SEARCHCOMPONENT],
    type: dataTypes.NUMBER,
    required: false
  },
  aggregations: {
    components: [SEARCHCOMPONENT],
    type: dataTypes.ARRAY,
    required: false
  },
  defaultQuery: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: [dataTypes.FUNCTION, dataTypes.OBJECT],
    required: false
  },
  customQuery: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: [dataTypes.FUNCTION, dataTypes.OBJECT],
    required: false
  },
  value: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: [dataTypes.STRING, dataTypes.ARRAY, dataTypes.OBJECT],
    required: false
  },
  type: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.STRING,
    required: false
  },
  clearOnQueryChange: {
    components: [SEARCHBOX, SEARCHCOMPONENT],
    type: dataTypes.BOOLEAN,
    required: false
  }
};
