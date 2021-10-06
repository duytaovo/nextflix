export default function selectionFilter(target) {
   const mapData = new Map();
   target.forEach((item) => mapData.set(item.genre, []));
   target.forEach((item) => mapData.get(item.genre).push(item));
   return mapData;
}
