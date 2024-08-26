export const replaceURLs = (message, color) => {
  if (!message) return;

  const urlRegex =
    /(https?:\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  return message.replace(urlRegex, function (url) {
    var hyperlink = url;
    if (!hyperlink.match("^(https?://|www.)")) {
      hyperlink = "http://" + hyperlink;
    }
    return (
      '<a class="' +
      color +
      ' bold text-decoration-underline" href="' +
      hyperlink +
      '" target="_blank" rel="noopener noreferrer">' +
      url +
      "</a>"
    );
  });
};
export const formatLocation = (query) => {
  const { street, city, region, country } = query;
  return [street, city, region, country].filter(Boolean).join(", ");
};
