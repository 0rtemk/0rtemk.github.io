import React, { useEffect, useState } from "react";
import axios from "axios";

const doTranslation = async (input, languageCode) => {
    let y = 'https://dictionary.yandex.net/api/v1/dicservice.json';
    let url = `${y}/lookup?key=dict.1.1.20250924T162735Z.5cc1e476bfe6e8db.2d60dd4c49d25e58f234941676d2ec514250c236&lang=ru-${languageCode}&text=${input}`;

    try {
        const { data } = await axios.post(url);
        return data.def[0].tr[0].text;
    } catch (err) {}
};

export default ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken).then(setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text, language]);

  return (
    <div>
      <label className="label">Output</label>
      <h1 className="title">{translated}</h1>
    </div>
  );
};
