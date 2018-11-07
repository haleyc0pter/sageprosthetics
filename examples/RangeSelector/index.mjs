/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/RangeSelector/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const RangeSelector = {
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
  },
};

