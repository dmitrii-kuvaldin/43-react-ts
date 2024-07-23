` <span>rate: {rate}</span>
      <span>count: {count}</span>
      {/* если объект может не придти как в этом случае, потому что props не обязательный нужно делать проверку на то, существуют ли данные */}
      {rating && <span>rate from object: {rating.rate}</span>}
      {/* короткий вариант проверки на существование через оператор '?' */}
      <span>rate from object: {rating?.rate}</span>`
