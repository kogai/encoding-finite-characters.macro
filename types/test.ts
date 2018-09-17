import createEncodingTable from "encoding-finite-characters.macro";

const converter = createEncodingTable({
  characters: "価格税込み報酬1234567890-,. \n",
  from: "UNICODE",
  to: "SJIS"
}) as { [key: string]: number[] };

// $ExpectError
(converter[""] as boolean);
