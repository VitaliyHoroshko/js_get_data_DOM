'use strict';

const populationElements = document.getElementsByClassName('population');

const populations = Array.from(populationElements).map((item) => {
  const text = item.textContent.trim();
  const cleaned = text.replace(/,/g, '');
  const number = Number(cleaned);

  return number;
});

const total = populations.reduce((sum, value) => sum + value, 0);

const average = total / populations.length;

const formattedTotal = total.toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
