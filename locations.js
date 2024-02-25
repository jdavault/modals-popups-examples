export type Location = {
  place_id: string,
  osm_id: string,
  osm_type: string,
  licence: string,
  lat: string,
  lon: string,
  boundingbox: [
    string,
    string,
    string,
    string
  ],
  class: "place" | string,
  type: "city" | "state" | "country" | string,
  display_name: string,
  display_place: string,
  display_address: string,
  address: {
    name: string,
    city: string,
    county: string,
    state: string,
    postcode: string,
    country: string,
    country_code: string
  };
};
