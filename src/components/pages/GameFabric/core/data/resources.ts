interface Resource {
  name_en: string;
  name_ru: string;
  image: string;
  total: number;
}

const IronOre: Resource = {
  name_en: "iron ore",
  name_ru: "Железная руда",
  image: "iron-ore",
  total: 60,
};

export { IronOre };
