var result = [];

/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var hashTags = tweet.split(' ')
    .filter(function(w) {
      return w.indexOf('#') !== -1;
    })
    .map(function(h) {
      return h.slice(1);
    })

  return hashTags;
};

/*     // Разбиваем строку на массив слов
    var words = tweet.split(' ');

    // Заводим переменную под найденные хэштеги
    var hashtags = [];

    // Итерируемся по словам из твита
    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        // Проверяем, является ли слово хэштегом
        // Для этого смотрит на первый символ, у хэштега он должен быть решеткой
        if (word[0] === '#') {
            // Избавляемся от решетки в хэштеге.
            // Копируем строку, начиная со второго символа и до конца
            var hashtag = word.slice(1);

            // Сохраняем хэштег
            hashtags.push(hashtag);
        }
    }

    // Возвращаем результат из функции
    return hashtags;
}; */