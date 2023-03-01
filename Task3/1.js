let temp = Number.parseFloat(prompt('Введите температуру в градусах Цельсия: '));
alert(`Цельсий: ${temp}, Фаренгейт: ${transformations(temp)}`);

function transformations(temp) {
    return ((9 / 5) * temp + 32).toFixed(1);
}