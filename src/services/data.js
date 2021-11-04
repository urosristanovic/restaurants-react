import restaurants from '../assets/json/restaurants.json';
import capacitites from '../assets/json/capacity.json';
import prices from '../assets/json/prices.json';
import foods from '../assets/json/food.json';

export function getRestaurants() {
  return restaurants;
}
export function getPrices() {
  return prices;
}
export function getCapacities() {
  return capacitites;
}
export function getFoods() {
  return foods;
}
