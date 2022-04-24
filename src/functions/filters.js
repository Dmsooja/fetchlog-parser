// import { filters } from './filters';
import { filterAds } from '../store/filterads';
import { logs } from './files';

const tagsOutput = {};

/**
 * TagList object "export" makes tagsList importable in other components
 */
export const tagsList = {};


/**
 * Filter collectors and store each collector to its matching tag's array
 * @param {*} filters - The existing filters (original, custom and alert)
 * @returns tagsOutput - An object that contains tags as arrays and their matching collectors
 */
export function colFilter(filters) {
  // Clear tags and tagsOutput
  for (var tag in tagsList) delete tagsList[tag];
  for (var tagOutput in tagsOutput) delete tagsOutput[tagOutput];

  // For all tags in filters
  filters.forEach((tag) => {
    const { name, includedParams, excludedParams } = tag;

    // Get all the truthy log.collector (exclude the undefined)
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

  // Same as above : For all tags in filtersAds create an array and push all the matching collectors (filtered by included and excluded parameters)
  filterAds.forEach((tag) => {
    const { name, includedParams } = tag;
    logs.filter((log) => !!log.collector).forEach((log) => {
      const queryParams = log.collector.split('&');
      const isIncludedValid = includedParams.every((includedParam) => queryParams.some(queryParam => queryParam.search(includedParam) !== -1));
      if (isIncludedValid) {
        if (!!tagsOutput[name]) {
          if (tagsOutput[name].length < 5) {
            tagsOutput[name].push(log)
          }
        } else {
          tagsOutput[name] = [log];
        }
        // if the tag array already exist, push the log or else create an array for this tag
        !!tagsList[name] ? tagsList[name].push(log) : tagsList[name] = [log];
      }
    });
  });
  return tagsOutput
}