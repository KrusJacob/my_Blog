export const UrlInText = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const words = text.split(" ");

  return (
    <>
      {words.map((word) => {
        return word.match(urlRegex) ? (
          <>
            <a href={word} target="_blank">
              {word}
            </a>{" "}
          </>
        ) : (
          word + " "
        );
      })}
    </>
  );
};
