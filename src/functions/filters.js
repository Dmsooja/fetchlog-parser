// import { filters } from './filters';
import { filterAds } from '../filterads';
import { logs } from './files';

const tagsOutput = {};

/**
 * TagList object "export" makes tagsList importable in other components
 */
export const tagsList = {};


//Filter collector and push to the right array
export function colFilter(filters) {
  //clear tags and tagsOutput
  for (var tag in tagsList) delete tagsList[tag];
  for (var tagOutput in tagsOutput) delete tagsOutput[tagOutput];

  // Wait for all the lines to be pushed in logs

  console.log(filters)
  // For all tags in filters
  filters.forEach((tag) => {
    const { name, includedParams, excludedParams } = tag;

    // Get all the truthy log.collector, excludes the undefined
    logs.filter((log) => !!log.collector).forEach((log) => {
      // Transform the string into a table of query params
      const queryParams = log.collector.split('&');
      const isIncludedValid = includedParams.every((includedParam) => queryParams.some(queryParam => queryParam.search(includedParam) !== -1));
      const isExcludedValid = excludedParams.every((excludedParam) => queryParams.every(queryParam => queryParam.search(excludedParam) === -1));

      // if isIncludedValid and isExcludedValid exist
      if (isIncludedValid && isExcludedValid) {
        // if tagsOutput exists ans has less than 5 values, push the log            
        if (!!tagsOutput[name]) {
          if (tagsOutput[name].length < 5) {
            tagsOutput[name].push(log);
          }
        }
        // if tagsOutput is undefined or null create a new table
        else {
          tagsOutput[name] = [log];
        }
        // if the tag array already exist, push the log or else create an array for this tag
        !!tagsList[name] ? tagsList[name].push(log) : tagsList[name] = [log];
      }
    });
  });

  filterAds.forEach((tag) => {
    const { name, includedParams } = tag;
    logs.filter((log) => !!log.collector).forEach((log) => { //gets all the truthy log.collector, excludes the undefined
      // on transforme la chaine en tableau de query params
      const queryParams = log.collector.split('&');
      const isIncludedValid = includedParams.every((includedParam) => queryParams.some(queryParam => queryParam.search(includedParam) !== -1));
      if (isIncludedValid) {
        if (!!tagsOutput[name]) { // si on a déjà un tableau et qu'il contien moins de 2 valeurs
          if (tagsOutput[name].length < 5) {
            tagsOutput[name].push(log) // on push
          }
        } else {
          tagsOutput[name] = [log] // sinon on crée;
        }

        !!tagsList[name] ? // si on a déjà un tableau
          tagsList[name].push(log) // on push
          : tagsList[name] = [log] // sinon on crée;
      }
    });
  });
  return tagsOutput
}