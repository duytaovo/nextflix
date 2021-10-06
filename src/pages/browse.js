import React from 'react';
import { useFetchCollection } from '../hooks';
import selectionFilter from '../utils/selection-map';
import { BrowseContainer } from '../containers';

function Browse() {
   // need series and  films
   const { series } = useFetchCollection('series');
   const { films } = useFetchCollection('films');
   const seriesMap = selectionFilter(series);
   const filmsMap = selectionFilter(films);
   // need slides
   const slides = { series: seriesMap, films: filmsMap };
   // pass it to the browse container
   return <BrowseContainer slides={slides} />;
}

export default Browse;
